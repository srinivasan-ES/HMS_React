import React, { useState } from 'react';
import axios from 'axios';
export const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    doctorName: '',
    phoneNumber: '',
    specialization: '',
    experienceYears: '',
    department: '',
    availabilityStatus: '',
    email: '',
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
        'https://patient-service-8h36.onrender.com/hospital/v1/create-doctor',
        formData,
        {
          headers: {
            Authorization: `Bearer YOUR_JWT_TOKEN_HERE`, // Replace with actual token later
            'Content-Type': 'application/json',
          },
        }
      );
      
      console.log('Doctor registered:', response.data);
      alert('Doctor Registered Successfully');
      // Reset form if needed
      setFormData({
        name: '',
        phoneNumber: '',
        specialization: '',
        experienceYears: '',
        department: '',
        availabilityStatus: '',
        emailAddress: ''
      });
  
    } catch (error) {
      console.error('Error registering Doctor:', error);
      alert('Error occurred while registering Doctor');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="doctorName" placeholder="Full Name" value={formData.doctorName} onChange={handleChange} required />
        <br />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
        <br />
        <input type="text" name="specialization" placeholder="specification" value={formData.specialization} onChange={handleChange} />
        <br />
        <input type="text" name="experienceYears" placeholder="experienceYears"  value={formData.experienceYears} onChange={handleChange} />
        <br />
        <input type="text" name="department" placeholder="department" value={formData.department} onChange={handleChange} />
        <br />
        <input type="text" name="availabilityStatus" placeholder="availabilityStatus" value={formData.availabilityStatus} onChange={handleChange} />
        <br />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <br /><br />
        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
};

export default DoctorRegistration;
