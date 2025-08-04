import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const AppointmentList = () => {
  const [appointment, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = () => {
    axios.get("https://patient-service-8h36.onrender.com/hospital/v1/get-appointments")
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error("Error fetching appointments:", error);
      });
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to canecel this Appointment?");
    if (!confirm) return;

    axios.delete(`https://patient-service-8h36.onrender.com/hospital/v1/delete-appointment/${id}`)
      .then(() => {
        alert("Appointment successfully Cancelled");
        fetchPatients(); // refresh list
      })
      .catch((error) => {
        console.error("Error deleting appointment:", error);
        alert("Delete failed.");
      });
  };

  return (
    <div>
      <h2>Registered Appointments</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>appointmentDate</th>
            <th>appointmentTime</th>
            <th>status</th>
            <th>notes</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {appointment.map((appointment) => (
            <tr key={appointment.appointmentId}>
              <td>{appointment.appointmentId}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.appointmentTime}</td>
              <td>{appointment.status}</td>
              <td>{appointment.notes}</td>
              <td>
                <button onClick={() => handleDelete(appointment.appointmentId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
