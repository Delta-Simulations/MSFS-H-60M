import React, { useState, useEffect } from "react";

function EICASDisplay() {
  const maxAlerts = 6; // Maximum number of alerts to display

  // Define the initial alerts directly inside the function
  const initialAlerts = [
    { text: 'Engine Failure', acknowledged: false, active: true },
    { text: 'Low Fuel', acknowledged: false, active: false },
    { text: 'Cabin Pressure Low', acknowledged: false, active: true },
    { text: 'Turbulence Ahead', acknowledged: false, active: false },
    { text: 'Landing Gear Issue', acknowledged: false, active: false },
    { text: 'Overheat Warning', acknowledged: false, active: true },
  ];

  // State to store the list of alerts
  const [alerts, setAlerts] = useState(initialAlerts);

  // Get only the active alerts
  const activeAlerts = alerts.filter((alert) => alert.active);

  useEffect(() => {
    console.log("Active Alerts:", activeAlerts); // Log active alerts to console for debugging
  }, [activeAlerts]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px", // Limit the width to make it visible
        backgroundColor: "black",
        padding: "10px",
        borderRadius: "5px",
        color: "white", // Ensure the text color is white on black background
        overflowY: "auto", // Allow scrolling if there are too many alerts
        height: "300px", // Set a fixed height for visibility
        boxSizing: "border-box", // Prevent overflow issues
      }}
    >
      <h3 style={{ textAlign: "center", color: "yellow" }}>Active Alerts</h3>

      {activeAlerts.length > 0 ? (
        activeAlerts.map((alert, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "red", // Active alerts are shown with a red background
              padding: "10px",
              margin: "5px 0",
              borderRadius: "5px",
              fontFamily: "monospace",
              color: "black", // Ensure text is readable
            }}
          >
            {alert.text} (Active)
          </div>
        ))
      ) : (
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "14px",
            fontStyle: "italic",
          }}
        >
          No active alerts
        </div>
      )}

      <button
        onClick={() => setAlerts((prevAlerts) => [...prevAlerts, { text: `Warning ${alerts.length + 1}`, acknowledged: false, active: true }])}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Add Active Warning
      </button>
    </div>
  );
}

export default EICASDisplay;
