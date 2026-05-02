import React, { useState } from "react";
import DoctorList from "./components/DoctorList";
import BookingForm from "./components/BookingForm";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const bookAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
    setSelectedDoctor(null);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🏥 Healthcare Appointment System</h1>

      {!selectedDoctor ? (
        <DoctorList onSelect={setSelectedDoctor} />
      ) : (
        <BookingForm
          doctor={selectedDoctor}
          onBook={bookAppointment}
        />
      )}

      <Dashboard appointments={appointments} />
    </div>
  );
}
