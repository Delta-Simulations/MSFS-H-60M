#define M_PI 3.14159265358979323846
#include <windows.h>
#include <tchar.h>
#include <stdio.h>
#include <math.h>
#include "SimConnect.h"
#define _USE_MATH_DEFINES

HANDLE hSimConnect = NULL;
bool quit = false;

DWORD spawnedObject = 0;

double planeLat = 0.0;
double planeLon = 0.0;
double planeHeading = 0.0;


// EVENTS
enum EVENT_ID
{
    EVENT_SPAWN
};


// DATA REQUESTS
enum REQUEST_ID
{
    REQ_PLANE
};


// DEFINITIONS
enum DEF_ID
{
    DEF_PLANE
};


struct PlaneData
{
    double lat;
    double lon;
    double heading;
};


// Remove object
void removeObject()
{
    if (spawnedObject != 0)
    {
        SimConnect_AIRemoveObject(hSimConnect, spawnedObject, 0);
        printf("Removed object %d\n", spawnedObject);
        spawnedObject = 0;
    }
}


// Spawn object 50m from aircraft
void spawnObject()
{
    const double distance = 50.0; // meters

    double headingRad = planeHeading * M_PI / 180.0;

    double dNorth = cos(headingRad) * distance;
    double dEast = sin(headingRad) * distance;

    double deltaLat = dNorth / 111320.0;
    double deltaLon = dEast / (111320.0 * cos(planeLat * M_PI / 180.0));

    double newLat = planeLat + deltaLat;
    double newLon = planeLon + deltaLon;

    SIMCONNECT_DATA_INITPOSITION init{};

    init.Latitude = newLat;
    init.Longitude = newLon;
    init.Altitude = 0;

    init.Pitch = 0;
    init.Bank = 0;
    init.Heading = planeHeading;

    init.OnGround = 1;
    init.Airspeed = 0;

    printf("Aircraft Lat: %f Lon: %f\n", planeLat, planeLon);
    printf("Spawn Lat: %f Lon: %f\n", newLat, newLon);

    SimConnect_AICreateSimulatedObject(
        hSimConnect,
        "ISU_Cargo",
        init,
        100
    );
}


// Dispatch
void CALLBACK MyDispatch(SIMCONNECT_RECV* pData, DWORD cbData, void* pContext)
{
    switch (pData->dwID)
    {

    case SIMCONNECT_RECV_ID_EVENT:
    {
        SIMCONNECT_RECV_EVENT* evt = (SIMCONNECT_RECV_EVENT*)pData;

        if (evt->uEventID == EVENT_SPAWN)
        {
            printf("\nSpawn key pressed\n");

            SimConnect_RequestDataOnSimObject(
                hSimConnect,
                REQ_PLANE,
                SIMCONNECT_OBJECT_ID_USER,
                DEF_PLANE,
                SIMCONNECT_PERIOD_ONCE
            );
        }

        break;
    }


    case SIMCONNECT_RECV_ID_SIMOBJECT_DATA:
    {
        SIMCONNECT_RECV_SIMOBJECT_DATA* obj =
            (SIMCONNECT_RECV_SIMOBJECT_DATA*)pData;

        if (obj->dwRequestID == REQ_PLANE)
        {
            PlaneData* p = (PlaneData*)&obj->dwData;

            planeLat = p->lat;
            planeLon = p->lon;
            planeHeading = p->heading;

            printf("Aircraft position received\n");

            removeObject();
            spawnObject();
        }

        break;
    }


    case SIMCONNECT_RECV_ID_ASSIGNED_OBJECT_ID:
    {
        SIMCONNECT_RECV_ASSIGNED_OBJECT_ID* obj =
            (SIMCONNECT_RECV_ASSIGNED_OBJECT_ID*)pData;

        spawnedObject = obj->dwObjectID;

        printf("Spawned object ID: %d\n", spawnedObject);
        break;
    }


    case SIMCONNECT_RECV_ID_QUIT:
        quit = true;
        break;
    }
}


// Main
int _tmain(int argc, _TCHAR* argv[])
{

    if (SUCCEEDED(
        SimConnect_Open(&hSimConnect, "CargoSpawner", NULL, 0, 0, 0)))
    {

        printf("Connected to MSFS\n");


        // EVENT
        SimConnect_MapClientEventToSimEvent(hSimConnect, EVENT_SPAWN);

        SimConnect_AddClientEventToNotificationGroup(
            hSimConnect, 0, EVENT_SPAWN);

        SimConnect_MapInputEventToClientEvent(
            hSimConnect, 0, "Z", EVENT_SPAWN);

        SimConnect_SetInputGroupState(
            hSimConnect, 0, SIMCONNECT_STATE_ON);


        // PLANE DATA
        SimConnect_AddToDataDefinition(
            hSimConnect,
            DEF_PLANE,
            "Plane Latitude",
            "degrees"
        );

        SimConnect_AddToDataDefinition(
            hSimConnect,
            DEF_PLANE,
            "Plane Longitude",
            "degrees"
        );

        SimConnect_AddToDataDefinition(
            hSimConnect,
            DEF_PLANE,
            "Plane Heading Degrees True",
            "degrees"
        );


        printf("Press Z to spawn cargo 50m ahead\n");


        while (!quit)
        {
            SimConnect_CallDispatch(hSimConnect, MyDispatch, NULL);
            Sleep(1);
        }

        SimConnect_Close(hSimConnect);
    }

    return 0;
}