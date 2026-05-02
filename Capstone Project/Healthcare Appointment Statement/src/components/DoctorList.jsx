import React from "react";

const doctors = [
  { id: 1, name: "Dr. Sharma", specialty: "Cardiologist" },
  { id: 2, name: "Dr. Mehta", specialty: "Dermatologist" },
  { id: 3, name: "Dr. Singh", specialty: "Neurologist" },
];

export default function DoctorList({ onSelect }) {
  return (
    <div>
      <h2>Available Doctors</h2>
      {doctors.map((doc) => (
        <div key={doc.id} style={{ marginBottom: 10 }}>
          <p>
            {doc.name} - {doc.specialty}
          </p>
          <button onClick={() => onSelect(doc)}>Book</button>
        </div>
      ))}
    </div>
  );
}