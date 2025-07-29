import React, { useState } from 'react';
import axios from 'axios';
const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    bloodGroup: '',
    emergencyContact: '',
    medicalHistoryNotes: '',
    emailAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // this will be replaced with API call
    try {
      const response = await axios.post(
        'https://patient-service-8h36.onrender.com/hospital/v1/create-patient',
        formData,
        {
          headers: {
            Authorization: `Bearer YOUR_JWT_TOKEN_HERE`, // Replace with actual token later
            'Content-Type': 'application/json',
          },
        }
      );
      
      console.log('Patient registered:', response.data);
      alert('Patient Registered Successfully');
      // Reset form if needed
      setFormData({
        name: '',
        phoneNumber: '',
        gender: '',
        address: '',
        bloodGroup: '',
        dateOfBirth: '',
        emergencyContact: '',
        medicalHistoryNotes: '',
        emailAddress: ''
      });
  
    } catch (error) {
      console.error('Error registering patient:', error);
      alert('Error occurred while registering patient');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <br />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
        <br />
        <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} />
        <br />
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        <br />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <br />
        <input type="text" name="bloodGroup" placeholder="Blood Group" value={formData.bloodGroup} onChange={handleChange} />
        <br />
        <input type="text" name="emergencyContact" placeholder="Emergency Contact" value={formData.emergencyContact} onChange={handleChange} />
        <br />
        <textarea name="medicalHistoryNotes" placeholder="Medical History" value={formData.medicalHistoryNotes} onChange={handleChange}></textarea>
        <br />
        <input type="email" name="emailAddress" placeholder="Email Address" value={formData.emailAddress} onChange={handleChange} required />
        <br /><br />
        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
};

export default PatientRegistration;
