#include <MSFS\MSFS.h>
#include <MSFS\MSFS_WindowsTypes.h>
#include <SimConnect.h>
#include <cmath>
#include "Module.h"
#include <iostream>
#include <string>
//#include <tchar.h>
#include <stdio.h>
//#include <strsafe.h>
#include <string.h>

int     quit = 0;
HANDLE  g_hSimConnect;

// PID values


struct HeadingTailRotor {
    const double P = 1.0;
    const double I = 0.001;
    const double D = 0.001;
};

struct HeadingLowSpeed {
    const double P = 0.03;
    const double I = 0.000005;
    const double D = 0.01;
};

struct HeadingHighSpeed {
    const double P = 0.02;
    const double I = 0.0000080;
    const double D = 0.01;
};

struct Baro {
    const double P = 0.01;
    const double I = 0.001;
    const double D = 0.025;
};

struct Radio {
    const double P = 0.01;
    const double I = 0.0002;
    const double D = 0.025;
};

struct Bank {
    const double P = 0.02;
    const double I = 0.0001;
    const double D = 0.0;
};


bool headingHold = false;
bool baroAltHold = false;
bool radioAltHold = false;

bool isSimPaused = false;

// HEADING HOLD
double headingIntegralSum = 0.0;
double headingError = 0.0;

// BARO ALTITUDE HOLD
bool baroAltSet = false;
double baroAltTarget = 0.0;

double baroAltIntegralSum = 0.0;
double baroAltError = 0.0;

// RADIO ALTITUDE HOLD
bool radioAltSet = false;
double radioAltTarget = 0.0;

double radioAltIntegralSum = 0.0;
double radioAltError = 0.0;

// BANK HOLD
double bankIntegralSum = 0.0;
double bankError = 0.0;

struct Autopilot
{
    double altitude;
    double speed;
    double heading;
    double targetHeading;
    double radioAltitude;
    double bankAngle;
    double coordinatorBall;
    double collective;
};

enum EVENT_ID {
    EVENT_SIM_START,
    EVENT_SIM_6HZ,
    EVENT_HEADING_HOLD,
    EVENT_BARO_ALT_HOLD,
    EVENT_RADIO_ALT_HOLD,
    EVENT_BANK_HOLD,
    EVENT_TAIL_ROTOR_SET,
    EVENT_COLLECTIVE_SET,
    EVENT_CYCLIC_LATERAL_SET,
    EVENT_SIM_PAUSED
};

enum PAUSESTATE
{
    UNPAUSED = 0,
    PAUSED
};

static enum GROUP_ID {
    GROUP_A,
};

enum DATA_DEFINE_ID {
    DEFINITION_AUTOPILOT,
    DEFINITION_LVAR_HEADING_HOLD,
    DEFINITION_LVAR_BARO_ALT_HOLD,
    DEFINITION_LVAR_RADIO_ALT_HOLD
};

enum DATA_REQUEST_ID {
    REQUEST_AUTOPILOT,
    REQUEST_LVAR_HEADING_HOLD,
    REQUEST_LVAR_BARO_ALT_HOLD,
    REQUEST_LVAR_RADIO_ALT_HOLD
};

enum INPUT_ID {
    INPUT0,
};




double calculateResponse(const double& current, const double& target, const double& Kp, const double& Ki, const double& Kd, double& integralSum, double& prevError, const std::string& testCase, double& error) {
    error = current - target;

    if (testCase == "heading") {
        if (error < -170.0) {
            error += 360.0;
        }
        else if (error > 170.0) {
            error -= 360.0;
        }
    }

    printf("\nerror = %f", error);

    double proportional = error * Kp;

    //std::cout << "\nINTEGRALSUM: " << integralSum;

    integralSum += error * 0.167;
    double integral = integralSum * Ki;

    double errorDiff = (error - prevError) / 0.167;
    double derivative = errorDiff * Kd;
    prevError = error;

    double finalProportional = -16383 * proportional;
    double finalIntegral = -16383 * integral;
    double finalDerivative = -16383 * derivative;

    double totalResponse = finalProportional + finalIntegral + finalDerivative;

    //std::cout << "\n" << testCase << " P: " << finalProportional << " I: " << finalIntegral << " D: " << finalDerivative;

    return totalResponse;
};


void MonitorLVars()
{
    SimConnect_RequestDataOnSimObjectType(g_hSimConnect, REQUEST_LVAR_HEADING_HOLD, DEFINITION_LVAR_HEADING_HOLD, 0, SIMCONNECT_SIMOBJECT_TYPE_USER);
    SimConnect_RequestDataOnSimObjectType(g_hSimConnect, REQUEST_LVAR_BARO_ALT_HOLD, DEFINITION_LVAR_BARO_ALT_HOLD, 0, SIMCONNECT_SIMOBJECT_TYPE_USER);
    SimConnect_RequestDataOnSimObjectType(g_hSimConnect, REQUEST_LVAR_RADIO_ALT_HOLD, DEFINITION_LVAR_RADIO_ALT_HOLD, 0, SIMCONNECT_SIMOBJECT_TYPE_USER);
}


void CALLBACK MyDispatchProc(SIMCONNECT_RECV* pData, DWORD cbData, void* pContext)
{
    HRESULT hr;

    switch (pData->dwID)
    {
    case SIMCONNECT_RECV_ID_EVENT:
    {
        SIMCONNECT_RECV_EVENT* evt = (SIMCONNECT_RECV_EVENT*)pData;

        switch (evt->uEventID)
        {
        case EVENT_HEADING_HOLD:
            printf("\nEvent input: %d", evt->dwData);
            headingHold = !headingHold;

            if (!headingHold) {
                headingIntegralSum = 0.0;
                headingError = 0.0;
                bankIntegralSum = 0.0;
                bankError = 0.0;
            }

            break;

        case EVENT_BARO_ALT_HOLD:
            printf("\nEvent input: %d", evt->dwData);
            baroAltHold = !baroAltHold;

            if (baroAltHold) {
                radioAltHold = false;
            }
            if (!baroAltHold) {
                baroAltSet = false;
                baroAltIntegralSum = 0.0;
                baroAltError = 0.0;
            }

            break;

        case EVENT_RADIO_ALT_HOLD:
            printf("\nEvent input: %d", evt->dwData);
            radioAltHold = !radioAltHold;

            if (radioAltHold) {
                baroAltHold = false;
            }
            if (!radioAltHold) {
                radioAltSet = false;
                radioAltIntegralSum = 0.0;
                radioAltError = 0.0;
            }

            break;

        case EVENT_SIM_START:
            hr = SimConnect_RequestDataOnSimObjectType(g_hSimConnect, REQUEST_AUTOPILOT, DEFINITION_AUTOPILOT, 0, SIMCONNECT_SIMOBJECT_TYPE_USER);
            MonitorLVars();
            break;

        case EVENT_SIM_6HZ:
            hr = SimConnect_RequestDataOnSimObjectType(g_hSimConnect, REQUEST_AUTOPILOT, DEFINITION_AUTOPILOT, 0, SIMCONNECT_SIMOBJECT_TYPE_USER);
            MonitorLVars();
            break;

        case EVENT_SIM_PAUSED:
            switch (evt->dwData)
            {
            case UNPAUSED:
                isSimPaused = false;
                break;

            case PAUSED:
                isSimPaused = true;
                break;
            }
            break;

        default:
            break;
        }
        break;
    }

    case SIMCONNECT_RECV_ID_SIMOBJECT_DATA_BYTYPE:
    {
        SIMCONNECT_RECV_SIMOBJECT_DATA_BYTYPE* pObjData = (SIMCONNECT_RECV_SIMOBJECT_DATA_BYTYPE*)pData;

        switch (pObjData->dwRequestID)
        {
        case REQUEST_LVAR_HEADING_HOLD:
            headingHold = *(double*)&pObjData->dwData != 0.0;
            //headingHold = !headingHold;

            if (!headingHold) {
                headingIntegralSum = 0.0;
                headingError = 0.0;
                bankIntegralSum = 0.0;
                bankError = 0.0;
            }
            break;
        case REQUEST_LVAR_BARO_ALT_HOLD:
            baroAltHold = *(double*)&pObjData->dwData != 0.0;
            //baroAltHold = !baroAltHold;

            if (baroAltHold) {
                radioAltHold = false;
            }
            if (!baroAltHold) {
                baroAltSet = false;
                baroAltIntegralSum = 0.0;
                baroAltError = 0.0;
            }
            break;
        case REQUEST_LVAR_RADIO_ALT_HOLD:
            radioAltHold = *(double*)&pObjData->dwData != 0.0;
            //radioAltHold = !radioAltHold;

            if (radioAltHold) {
                baroAltHold = false;
            }
            if (!radioAltHold) {
                radioAltSet = false;
                radioAltIntegralSum = 0.0;
                radioAltError = 0.0;
            }
            break;
        case REQUEST_AUTOPILOT:
        {
            if (!isSimPaused) {
                DWORD ObjectID = pObjData->dwObjectID;
                Autopilot* AP = (Autopilot*)&pObjData->dwData;

                HeadingTailRotor headingTailRotor;
                HeadingLowSpeed headingLowSpeed;
                HeadingHighSpeed headingHighSpeed;
                Baro baro;
                Radio radio;
                Bank bank;

                double error = 0.0;

                // heading by bank, bank by cyclic

                if (headingHold) {
                    double speed = AP->speed;
                    double heading = AP->heading;
                    double targetHeading = AP->targetHeading;
                    double bankAngle = AP->bankAngle;
                    double coordinatorBall = AP->coordinatorBall;

                    if (speed < 25) {

                        double resp_TailRotor_25_CCW = calculateResponse(heading, targetHeading, headingLowSpeed.P, headingLowSpeed.I, headingLowSpeed.D, headingIntegralSum, headingError, "heading", error);
                        double resp_Bank_25_CCW = calculateResponse(bankAngle, 0.0, bank.P, bank.I, bank.D, bankIntegralSum, bankError, "bank", error);

                        if (resp_TailRotor_25_CCW > 16383.0) {
                            resp_TailRotor_25_CCW = 16383.0;
                        }
                        else if (resp_TailRotor_25_CCW < -16383.0) {
                            resp_TailRotor_25_CCW = -16383.0;
                        }
                        else {
                            resp_TailRotor_25_CCW = resp_TailRotor_25_CCW / 2;
                        }


                        if (resp_Bank_25_CCW > 16383.0) {
                            resp_Bank_25_CCW = 16383.0;
                        }
                        else if (resp_Bank_25_CCW < -16383.0) {
                            resp_Bank_25_CCW = -16383.0;
                        }

                        resp_TailRotor_25_CCW = -resp_TailRotor_25_CCW;


                        DWORD resp_TailRotor_25_CW = calculateResponse(heading, targetHeading, headingLowSpeed.P, headingLowSpeed.I, headingLowSpeed.D, headingIntegralSum, headingError, "heading", error);
                        DWORD resp_Bank_25_CW = std::abs(calculateResponse(bankAngle, 0.0, bank.P, bank.I, bank.D, bankIntegralSum, bankError, "bank", error));

                        if (resp_TailRotor_25_CW > 16383.0) {
                            resp_TailRotor_25_CW = 16383.0;
                        }
                        else if (resp_TailRotor_25_CW < -16383.0) {
                            resp_TailRotor_25_CW = -16383.0;
                        }
                        else {
                            resp_TailRotor_25_CW = resp_TailRotor_25_CW / 2;
                        }


                        if (resp_Bank_25_CW > 16383.0) {
                            resp_Bank_25_CW = 16383.0;
                        }
                        else if (resp_Bank_25_CW < -16383.0) {
                            resp_Bank_25_CW = -16383.0;
                        }

                        resp_TailRotor_25_CW = -resp_TailRotor_25_CW;
                        //std::cout << "\nTAIL ROTOR RESPONSE CW: " << resp_TailRotor_25_CW;
                        std::cout << "\nROLL RESPONSE CW: " << resp_Bank_25_CW;



                        if (resp_TailRotor_25_CCW>0) {
                            SimConnect_TransmitClientEvent(g_hSimConnect, 0, EVENT_TAIL_ROTOR_SET, resp_TailRotor_25_CCW, SIMCONNECT_GROUP_PRIORITY_HIGHEST, SIMCONNECT_EVENT_FLAG_GROUPID_IS_PRIORITY);
                            SimConnect_TransmitClientEvent(g_hSimConnect, 0, EVENT_CYCLIC_LATERAL_SET, resp_Bank_25_CCW, SIMCONNECT_GROUP_PRIORITY_HIGHEST, SIMCONNECT_EVENT_FLAG_GROUPID_IS_PRIORITY);
                       }
                        else {
                            SimConnect_TransmitClientEvent(g_hSimConnect, 0, EVENT_TAIL_ROTOR_SET, resp_TailRotor_25_CW, SIMCONNECT_GROUP_PRIORITY_HIGHEST, SIMCONNECT_EVENT_FLAG_GROUPID_IS_PRIORITY);
                            SimConnect_TransmitClientEvent(g_hSimConnect, 0, EVENT_CYCLIC_LATERAL_SET, -resp_Bank_25_CW, SIMCONNECT_GROUP_PRIORITY_HIGHEST, SIMCONNECT_EVENT_FLAG_GROUPID_IS_PRIORITY);
                        }
                    }

                    else {
                        double response = calculateResponse(heading, targetHeading, headingHighSpeed.P, headingHighSpeed.I, headingHighSpeed.D, headingIntegralSum, headingError, "heading", error);

                        if (response > 16383.0) {
                            response = 16383.0;
                        }
                        else if (response < -16383.0) {
                            response = -16383.0;
                        }

                        //std::cout << "\nHEADING RESPONSE: " << response;

                        double finalResponse = response / 655.32;


                        double resp_Bank_CCW = calculateResponse(bankAngle, -finalResponse, bank.P, bank.I, bank.D, bankIntegralSum, bankError, "bank", error);
                        DWORD resp_Bank_CW = std::abs(calculateResponse(bankAngle, -finalResponse, bank.P, bank.I, bank.D, bankIntegralSum, bankError, "bank", error));

                        if (resp_Bank_CCW > 16383.0) {
                            resp_Bank_CCW = 16383.0;
                        }
                        else if (resp_Bank_CCW < -16383.0) {
                            resp_Bank_CCW = -16383.0;
                        }

                        if (resp_Bank_CW > 16383.0) {
                            resp_Bank_CW = 16383.0;
                        }
                        else if (resp_Bank_CW < -16383.0) {
                            resp_Bank_CW = -16383.0;
                        }



                        // TURN COORDINATION
                        double resp_TailRotor_CCW = calculateResponse(coordinatorBall, 0.0, headingTailRotor.P, headingTailRotor.I, headingTailRotor.D, bankIntegralSum, bankError, "tail rotor", error);

                        if (resp_TailRotor_CCW > 16383.0) {
                            resp_TailRotor_CCW = 16383.0;
                        }
                        else if (resp_TailRotor_CCW < -16383.0) {
                            resp_TailRotor_CCW = -16383.0;
                        }
                        else {
                            resp_TailRotor_CCW = resp_TailRotor_CCW / 2;
                        }


                        DWORD resp_TailRotor_CW = calculateResponse(coordinatorBall, 0.0, headingTailRotor.P, headingTailRotor.I, headingTailRotor.D, bankIntegralSum, bankError, "tail rotor", error);

                        if (resp_TailRotor_CW > 16383.0) {
                            resp_TailRotor_CW = 16383.0;
                        }
                        else if (resp_TailRotor_CW < -16383.0) {
                            resp_TailRotor_CW = -16383.0;
                        }
                        else {
                            resp_TailRotor_CW = resp_TailRotor_CW / 2;
                        }



                        if (resp_TailRotor_CCW > 0) {
                            SimConnect_TransmitClientEvent(g_hSimConnect, 0, EVENT_TAIL_ROTOR_SET, resp_TailRotor_CCW, SIMCONNECT_GROUP_PRIORITY_HIGHEST, SIMCONNECT_EVENT_FLAG_GROUPID_IS_PRIORITY);
                        }
                        else {
                            SimConnect_TransmitClientEvent(g_hSimConnect, 0, EVENT_TAIL_ROTOR_SET, resp_TailRotor_CW, SIMCONNECT_GROUP_PRIORITY_HIGHEST, SIMCONNECT_EVENT_FLAG_GROUPID_IS_PRIORITY);
                        }

                        if (resp_Bank_CCW > 0) {
                            SimConnect_TransmitClientEvent(g_hSimConnect, 0, EVENT_CYCLIC_LATERAL_SET, resp_Bank_CCW, SIMCONNECT_GROUP_PRIORITY_HIGHEST, SIMCONNECT_EVENT_FLAG_GROUPID_IS_PRIORITY);
                        }
                        else {
                            SimConnect_TransmitClientEvent(g_hSimConnect, 0, EVENT_CYCLIC_LATERAL_SET, -resp_Bank_CW, SIMCONNECT_GROUP_PRIORITY_HIGHEST, SIMCONNECT_EVENT_FLAG_GROUPID_IS_PRIORITY);
                        }
                    }
                }

                if (baroAltHold) {
                    if (!baroAltSet) {
                        baroAltTarget = AP->altitude;
                        baroAltSet = true;
                        baroAltIntegralSum = ((AP->collective - 0.5) * -2.0) / baro.I;

                        std::cout << "\n" << baroAltIntegralSum;
                    }
                    else {

                        double altitude = AP->altitude;

                        //std::cout << "\ntarget: " << baroAltTarget << " current: " << altitude;

                        double response = calculateResponse(altitude, baroAltTarget, baro.P, baro.I, baro.D, baroAltIntegralSum, baroAltError, "baro altitude", error);

                        if (response > 16383.0) {
                            response = 16383.0;
                        }
                        else if (response < -0) {
                            response = 0;
                        }

                        std::cout << "\nBARO ALT RESPONSE: " << response;

                        SimConnect_TransmitClientEvent(g_hSimConnect, 0, EVENT_COLLECTIVE_SET, response, SIMCONNECT_GROUP_PRIORITY_HIGHEST, SIMCONNECT_EVENT_FLAG_GROUPID_IS_PRIORITY);
                    }
                }

                if (radioAltHold) {
                    if (!radioAltSet) {
                        radioAltTarget = AP->radioAltitude;
                        radioAltSet = true;
                        radioAltIntegralSum = ((AP->collective - 0.5) * -2.0) / radio.I;
                    }
                    else {
                        double altitude = AP->radioAltitude;

                        //std::cout << "\ntarget: " << radioAltTarget << " current: " << altitude;

                        double response = calculateResponse(altitude, radioAltTarget, radio.P, radio.I, radio.D, radioAltIntegralSum, radioAltError, "radio altitude", error);

                        if (response > 16383.0) {
                            response = 16383.0;
                        }
                        else if (response < 0) {
                            response = 0;
                        }

                        //std::cout << "\nRADIO ALT RESPONSE: " << response;

                        SimConnect_TransmitClientEvent(g_hSimConnect, 0, EVENT_COLLECTIVE_SET, response, SIMCONNECT_GROUP_PRIORITY_HIGHEST, SIMCONNECT_EVENT_FLAG_GROUPID_IS_PRIORITY);
                    }
                }
            }

            break;
        }
        default:
            break;
        }
        break;
    }

    case SIMCONNECT_RECV_ID_QUIT:
    {
        printf("\nQUIT");
        break;
    }

    default:
        printf("\nReceived:%d", pData->dwID);
        break;
    }
};



//--------------------------------------------------------------------------------------
//
// SIMCONNECT SETUP
//
//--------------------------------------------------------------------------------------
extern "C" MSFS_CALLBACK void module_init(void)
{
    g_hSimConnect = 0;
    HRESULT hr = SimConnect_Open(&g_hSimConnect, "Input Event", NULL, 0, 0, 0);
    if (hr != S_OK)
    {
        fprintf(stderr, "Could not open SimConnect connection.\n");
        return;
    }
    hr = SimConnect_AddToDataDefinition(g_hSimConnect, DEFINITION_AUTOPILOT, "INDICATED ALTITUDE", "feet");
    hr = SimConnect_AddToDataDefinition(g_hSimConnect, DEFINITION_AUTOPILOT, "AIRSPEED INDICATED", "knots");
    hr = SimConnect_AddToDataDefinition(g_hSimConnect, DEFINITION_AUTOPILOT, "PLANE HEADING DEGREES MAGNETIC", "degrees");
    hr = SimConnect_AddToDataDefinition(g_hSimConnect, DEFINITION_AUTOPILOT, "AUTOPILOT HEADING LOCK DIR", "degrees");
    hr = SimConnect_AddToDataDefinition(g_hSimConnect, DEFINITION_AUTOPILOT, "RADIO HEIGHT", "feet");
    hr = SimConnect_AddToDataDefinition(g_hSimConnect, DEFINITION_AUTOPILOT, "PLANE BANK DEGREES", "degrees");
    hr = SimConnect_AddToDataDefinition(g_hSimConnect, DEFINITION_AUTOPILOT, "TURN COORDINATOR BALL", "position");
    hr = SimConnect_AddToDataDefinition(g_hSimConnect, DEFINITION_AUTOPILOT, "COLLECTIVE POSITION", "percent over 100");


    hr = SimConnect_AddToDataDefinition(g_hSimConnect, DEFINITION_LVAR_HEADING_HOLD, "L:PID_Heading_hold", "number", SIMCONNECT_DATATYPE_FLOAT64);
    hr = SimConnect_AddToDataDefinition(g_hSimConnect, DEFINITION_LVAR_BARO_ALT_HOLD, "L:PID_Altitude_hold", "number", SIMCONNECT_DATATYPE_FLOAT64);
    hr = SimConnect_AddToDataDefinition(g_hSimConnect, DEFINITION_LVAR_RADIO_ALT_HOLD, "L:PID_RadioAltitude_hold", "number", SIMCONNECT_DATATYPE_FLOAT64);

    //hr = SimConnect_MapClientEventToSimEvent(g_hSimConnect, EVENT_HEADING_HOLD, "AP_HDG_HOLD");
    //hr = SimConnect_MapClientEventToSimEvent(g_hSimConnect, EVENT_BARO_ALT_HOLD, "AP_ALT_HOLD");
    //hr = SimConnect_MapClientEventToSimEvent(g_hSimConnect, EVENT_RADIO_ALT_HOLD, "AP_ALT_RADIO_MODE_TOGGLE");

    hr = SimConnect_AddClientEventToNotificationGroup(g_hSimConnect, GROUP_A, EVENT_HEADING_HOLD);
    hr = SimConnect_AddClientEventToNotificationGroup(g_hSimConnect, GROUP_A, EVENT_BARO_ALT_HOLD);
    hr = SimConnect_AddClientEventToNotificationGroup(g_hSimConnect, GROUP_A, EVENT_RADIO_ALT_HOLD);

    hr = SimConnect_SetNotificationGroupPriority(g_hSimConnect, GROUP_A, SIMCONNECT_GROUP_PRIORITY_HIGHEST);

    // Note that this does not override "." for brakes - both with be transmitted

    hr = SimConnect_MapClientEventToSimEvent(g_hSimConnect, EVENT_TAIL_ROTOR_SET, "ROTOR_AXIS_TAIL_ROTOR_SET");
    hr = SimConnect_AddClientEventToNotificationGroup(g_hSimConnect, GROUP_A, EVENT_TAIL_ROTOR_SET);
    hr = SimConnect_SetNotificationGroupPriority(g_hSimConnect, GROUP_A, EVENT_TAIL_ROTOR_SET);

    hr = SimConnect_MapClientEventToSimEvent(g_hSimConnect, EVENT_COLLECTIVE_SET, "AXIS_COLLECTIVE_SET");
    hr = SimConnect_AddClientEventToNotificationGroup(g_hSimConnect, GROUP_A, EVENT_COLLECTIVE_SET);
    hr = SimConnect_SetNotificationGroupPriority(g_hSimConnect, GROUP_A, EVENT_COLLECTIVE_SET);

    hr = SimConnect_MapClientEventToSimEvent(g_hSimConnect, EVENT_CYCLIC_LATERAL_SET, "AXIS_CYCLIC_LATERAL_SET");
    hr = SimConnect_AddClientEventToNotificationGroup(g_hSimConnect, GROUP_A, EVENT_CYCLIC_LATERAL_SET);
    hr = SimConnect_SetNotificationGroupPriority(g_hSimConnect, GROUP_A, EVENT_CYCLIC_LATERAL_SET);

    hr = SimConnect_SubscribeToSystemEvent(g_hSimConnect, EVENT_SIM_PAUSED, "Pause");

    hr = SimConnect_SetInputGroupState(g_hSimConnect, INPUT0, SIMCONNECT_STATE_ON);

    hr = SimConnect_SubscribeToSystemEvent(g_hSimConnect, EVENT_SIM_START, "SimStart");
    hr = SimConnect_SubscribeToSystemEvent(g_hSimConnect, EVENT_SIM_6HZ, "6Hz");
    hr = SimConnect_RequestDataOnSimObject(g_hSimConnect, REQUEST_AUTOPILOT, DEFINITION_AUTOPILOT, SIMCONNECT_OBJECT_ID_USER, SIMCONNECT_PERIOD_SECOND);
    hr = SimConnect_RequestDataOnSimObjectType(g_hSimConnect, REQUEST_LVAR_HEADING_HOLD, DEFINITION_LVAR_HEADING_HOLD, 0, SIMCONNECT_SIMOBJECT_TYPE_USER);
    hr = SimConnect_RequestDataOnSimObjectType(g_hSimConnect, REQUEST_LVAR_BARO_ALT_HOLD, DEFINITION_LVAR_BARO_ALT_HOLD, 0, SIMCONNECT_SIMOBJECT_TYPE_USER);
    hr = SimConnect_RequestDataOnSimObjectType(g_hSimConnect, REQUEST_LVAR_RADIO_ALT_HOLD, DEFINITION_LVAR_RADIO_ALT_HOLD, 0, SIMCONNECT_SIMOBJECT_TYPE_USER);

    //hr = SimConnect_RequestDataOnSimObject(g_hSimConnect, REQUEST_AUTOPILOT, DEFINITION_AUTOPILOT, SIMCONNECT_OBJECT_ID_USER, SIMCONNECT_PERIOD_VISUAL_FRAME);

    hr = SimConnect_CallDispatch(g_hSimConnect, MyDispatchProc, NULL);


    if (hr != S_OK)
    {
        fprintf(stderr, "Could not set dispatch proc.\n");
        return;
    }
}




extern "C" MSFS_CALLBACK void module_deinit(void)
{
    if (!g_hSimConnect)
        return;
    HRESULT hr = SimConnect_Close(g_hSimConnect);
    if (hr != S_OK)
    {
        fprintf(stderr, "Could not close SimConnect connection.\n");
        return;
    }
}