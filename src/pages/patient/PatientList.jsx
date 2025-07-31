import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = () => {
    axios.get("https://patient-service-8h36.onrender.com/hospital/v1/get-patients")
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error("Error fetching patients:", error);
      });
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this patient?");
    if (!confirm) return;

    axios.delete(`https://patient-service-8h36.onrender.com/hospital/v1/delete-patient/${id}`)
      .then(() => {
        alert("Patient deleted successfully");
        fetchPatients(); // refresh list
      })
      .catch((error) => {
        console.error("Error deleting patient:", error);
        alert("Delete failed.");
      });
  };

  return (
    <div>
      <h2>Registered Patients</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Date Of Birth</th>
            <th>Emergency Contact</th>
            <th>Medical History Notes</th>
            <th>EmailAddress</th>
            <th>Actions</th> {/* 👈 add column for Edit/Delete */}
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.patientId}>
              <td>{patient.patientId}</td>
              <td>{patient.name}</td>
              <td>{patient.phoneNumber}</td>
              <td>{patient.gender}</td>
              <td>{patient.bloodGroup}</td>
              <td>{patient.dateOfBirth}</td>
              <td>{patient.emergencyContact}</td>
              <td>{patient.medicalHistoryNotes}</td>
              <td>{patient.emailAddress}</td>
              <td>
                <button onClick={() => navigate(`/edit-patient/${patient.patientId}`)}>Edit</button>
                &nbsp;
                <button onClick={() => handleDelete(patient.patientId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
