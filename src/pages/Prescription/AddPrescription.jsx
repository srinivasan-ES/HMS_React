import React, { useState } from 'react';
import axios from 'axios';

const AddPrescription = () => {
  const [formData, setFormData] = useState({
    appointmentId: '',
    prescribedDate: '',
    diagnosis: '',
    remarks: '',
    medicineId: '',
    medicineName: '',
    dosage: '',
    Duration: '',
    frequency: '',
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
    console.log(formData); 
    try {
      const response = await axios.post(
        'https://patient-service-8h36.onrender.com/hospital/v1/add-prescription',
        formData,
        {
          headers: {
            Authorization: `Bearer YOUR_JWT_TOKEN_HERE`, // Replace with actual token later
            'Content-Type': 'application/json',
          },
        }
      );
      
      console.log('Prescription added Successfully:', response.data);
      alert('Prescription added Successfully');
      // Reset form if needed
      setFormData({
        appointmentId: '',
        prescribedDate: '',
        diagnosis: '',
        remarks: '',
        medicineId: '',
        medicineName: '',
        dosage: '',
        duration: '',
        frequency: '',
      });
  
    } catch (error) {
      console.error('Error registering patient:', error);
      alert('Error occurred while registering patient');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Add Prescription</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="appointmentId" placeholder="appointmentId" value={formData.appointmentId} onChange={handleChange} required />
        <br />
        <input type="Date" name="prescribedDate" placeholder="prescribedDate" value={formData.prescribedDate} onChange={handleChange} required />
        <br />
        <input type="text" name="diagnosis" placeholder="diagnosis" value={formData.diagnosis} onChange={handleChange} />
        <br />
        <textarea name="remarks" placeholder="remarks" value={formData.remarks} onChange={handleChange}></textarea>
        <br />
        <input type="text" name="medicineName" placeholder="medicineName" value={formData.medicineName} onChange={handleChange} />
        <br />
        <input type="text" name="dosage" placeholder="dosage" value={formData.dosage} onChange={handleChange} />
        <br />
        <input type="text" name="duration" placeholder="duration" value={formData.duration} onChange={handleChange} />
        <br />
        <input type="text" name="frequency" placeholder="frequency"  value={formData.frequency} onChange={handleChange} />
        <br /><br />
        <button type="submit">Add Prescription</button>
      </form>
    </div>
  );
};

export default AddPrescription;
