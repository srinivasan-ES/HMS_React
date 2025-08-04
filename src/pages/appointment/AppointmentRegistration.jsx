import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { bookAppointment } from '../../api/BookAppointment';
import axios from 'axios';
const AppointmentRegistration = () => {
  const navigate = useNavigate();
  const [doctorList, setDoctorList] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [notes, setNotes] = useState('');
  const [patientId, setPatientId] = useState(null);

  useEffect(() => {
    const cachedId = localStorage.getItem('setSelectedPatientId');
    console.log(cachedId);
    if (!cachedId) {
      alert('Patient not selected. Please view patient first.');
      navigate('/view-patient');
    } else {
      setPatientId(Number(cachedId));
    }
  }, [navigate]);


  useEffect(() => {
    axios.get("https://patient-service-8h36.onrender.com/hospital/v1/get-doctors")
      .then(response => {
        setDoctorList(response.data);
      })
      .catch(error => {
        console.error("Error fetching patients:", error);
      });
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      appointmentId: 0,
      doctorId: Number(selectedDoctorId),
      appointmentDate,
      appointmentTime,
      notes
    };

    try {
      const response = await bookAppointment(patientId, appointmentData);
      alert('Appointment booked successfully!');
      console.log(response);
    } catch (err) {
      alert('Error booking appointment');
      console.error(err);
    }
  };

  return (
     <div style={{ padding: '2rem' }}>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedDoctorId}
        onChange={(e) => setSelectedDoctorId(e.target.value)}
        required
      >
      <option value="">Select Doctor</option>
        {doctorList.map((doc) => (
          <option key={doc.doctorId} value={doc.doctorId}>
            {doc.doctorName}
          </option>
        ))}
      </select>

        <br />

      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        required
      />
      <br />
      <input
        type="time"
        value={appointmentTime}
        onChange={(e) => setAppointmentTime(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <br />
      <button type="submit">Book Appointment</button>
    </form>
    </div>
  );
};

export default AppointmentRegistration;
