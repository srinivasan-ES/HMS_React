import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    axios.get("https://patient-service-8h36.onrender.com/hospital/v1/get-doctors")
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error("Error fetching patients:", error);
      });
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this Doctor?");
    if (!confirm) return;

    axios.delete(`https://patient-service-8h36.onrender.com/hospital/v1/delete-doctor/${id}`)
      .then(() => {
        alert("Doctor deleted successfully");
        fetchPatients(); // refresh list
      })
      .catch((error) => {
        console.error("Error deleting doctor:", error);
        alert("Delete failed.");
      });
  };

  return (
    <div>
      <h2>Registered Doctors</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>doctorName</th>
            <th>phoneNumber</th>
            <th>specialization</th>
            <th>email</th>
            <th>experienceYears</th>
            <th>department</th>
            <th>availabilityStatus</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.doctorId}>
              <td>{doctor.doctorId}</td>
              <td>{doctor.doctorName}</td>
              <td>{doctor.phoneNumber}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.email}</td>
              <td>{doctor.experienceYears}</td>
              <td>{doctor.department}</td>
              <td>{doctor.availabilityStatus}</td>
              <td>
                <button onClick={() => navigate(`/edit-doctor/${doctor.doctorId}`)}>Edit</button>
                &nbsp;
                <button onClick={() => handleDelete(doctor.doctorId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
