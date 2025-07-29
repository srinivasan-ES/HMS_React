import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("https://patient-service-8h36.onrender.com/hospital/v1/get-patients")
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error("Error fetching patients:", error);
      });
  }, []);

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;