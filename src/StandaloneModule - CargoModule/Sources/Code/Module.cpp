#define _USE_MATH_DEFINES
#include <MSFS/MSFS.h>
#include <MSFS/MSFS_Core.h>
#include <Legacy/gauges.h>
#include <Legacy/gps_info.h>
#include <MSFS/MSFS_WindowsTypes.h>
#include <SimConnect.h>

#include <cmath>

static HANDLE hSimConnect = NULL;
static DWORD spawnedObject = 0;

static bool keyPressed = false;


// Remove object
void removeObject()
{
    if (spawnedObject != 0)
    {
        SimConnect_AIRemoveObject(hSimConnect, spawnedObject, 0);
        spawnedObject = 0;
    }
}


// Spawn object ahead of aircraft
void spawnObject()
{
    double lat = aircraft_varget("PLANE LATITUDE", "degrees");
    double lon = aircraft_varget("PLANE LONGITUDE", "degrees");
    double heading = aircraft_varget("PLANE HEADING DEGREES TRUE", "degrees");

    const double distance = 50.0;

    double headingRad = heading * M_PI / 180.0;

    double dNorth = cos(headingRad) * distance;
    double dEast = sin(headingRad) * distance;

    double deltaLat = dNorth / 111320.0;
    double deltaLon = dEast / (111320.0 * cos(lat * M_PI / 180.0));

    double newLat = lat + deltaLat;
    double newLon = lon + deltaLon;

    SIMCONNECT_DATA_INITPOSITION init{};

    init.Latitude = newLat;
    init.Longitude = newLon;
    init.Altitude = 0;

    init.Pitch = 0;
    init.Bank = 0;
    init.Heading = heading;

    init.OnGround = 1;
    init.Airspeed = 0;

    SimConnect_AICreateSimulatedObject(
        hSimConnect,
        "ISU_Cargo",
        init,
        0
    );
}


// SimConnect dispatcher
void CALLBACK dispatch(SIMCONNECT_RECV* pData, DWORD cbData, void* pContext)
{
    switch (pData->dwID)
    {

    case SIMCONNECT_RECV_ID_ASSIGNED_OBJECT_ID:
    {
        auto obj = (SIMCONNECT_RECV_ASSIGNED_OBJECT_ID*)pData;
        spawnedObject = obj->dwObjectID;
        break;
    }

    }
}


// Module initialization
extern "C" MSFS_CALLBACK bool module_init()
{
    if (SUCCEEDED(SimConnect_Open(&hSimConnect, "CargoSpawner", NULL, 0, 0, 0)))
    {
        return true;
    }

    return false;
}


// Called every frame
extern "C" MSFS_CALLBACK void module_update()
{
    SimConnect_CallDispatch(hSimConnect, dispatch, nullptr);

    SHORT state = GetAsyncKeyState('Z');

    if (state & 0x8000)
    {
        if (!keyPressed)
        {
            keyPressed = true;

            removeObject();
            spawnObject();
        }
    }
    else
    {
        keyPressed = false;
    }
}


// Module shutdown
extern "C" MSFS_CALLBACK void module_deinit()
{
    if (hSimConnect != NULL)
    {
        SimConnect_Close(hSimConnect);
    }
}