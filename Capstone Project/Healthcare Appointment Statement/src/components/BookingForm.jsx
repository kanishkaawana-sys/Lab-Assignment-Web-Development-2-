import React, { useState } from "react";

export default function BookingForm({ doctor, onBook }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    if (!name || !date || !time) return alert("Fill all fields");

    onBook({
      patient: name,
      doctor: doctor.name,
      date,
      time,
    });
  };

  return (
    <div>
      <h2>Book Appointment with {doctor.name}</h2>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select onChange={(e) => setTime(e.target.value)}>
        <option value="">Select Time</option>
        <option>10:00 AM</option>
        <option>12:00 PM</option>
        <option>3:00 PM</option>
      </select>

      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
}
