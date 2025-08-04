import React, { useState } from "react";
import { getDoctorById, getDoctorByMobile, updateDoctor } from "../../api/PatientApi";

function ViewDoctor() {
  const [searchId, setSearchId] = useState("");
  const [searchMobile, setSearchMobile] = useState("");
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      let response;

      if (searchId) {
        response = await getDoctorById(searchId);
      } else if (searchMobile) {
        response = await getDoctorByMobile(searchMobile);
      } else {
        setError("Enter Doctor ID or Mobile Number");
        return;
      }
      setFormData(response.data);
    } catch (err) {
      setFormData(null);
      setError("Doctor not found");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDoctor(formData);
      alert("Doctor updated successfully");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div>
      <h2>View Doctor Details</h2>
      <input
        type="text"
        placeholder="Search by Doctor ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <span> OR </span>
      <input
        type="text"
        placeholder="Search by Mobile Number"
        value={searchMobile}
        onChange={(e) => setSearchMobile(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {formData && (
        <form onSubmit={handleUpdate}>
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
        <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}

export default ViewDoctor;
