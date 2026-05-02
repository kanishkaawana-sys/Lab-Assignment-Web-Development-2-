import React from "react";

export default function Dashboard({ appointments }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h2>📅 My Appointments</h2>

      {appointments.length === 0 && <p>No bookings yet</p>}

      {appointments.map((appt, i) => (
        <div key={i} style={{ border: "1px solid #ccc", margin: 5 }}>
          <p><b>Patient:</b> {appt.patient}</p>
          <p><b>Doctor:</b> {appt.doctor}</p>
          <p><b>Date:</b> {appt.date}</p>
          <p><b>Time:</b> {appt.time}</p>
        </div>
      ))}
    </div>
  );
}
