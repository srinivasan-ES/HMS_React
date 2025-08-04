import React, { useState } from "react";
import { getPatientById, getPatientByMobile, updatePatient } from "../../api/PatientApi";
//import { setSelectedPatientId } from "../../api/Storage1";

function ViewPatient() {
  const [searchId, setSearchId] = useState("");
  const [searchMobile, setSearchMobile] = useState("");
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      let response;

      if (searchId) {
        response = await getPatientById(searchId);
      } else if (searchMobile) {
        response = await getPatientByMobile(searchMobile);
      } else {
        setError("Enter Patient ID or Mobile Number");
        return;
      }
      setFormData(response.data);
      localStorage.setItem("setSelectedPatientId",response.data.patientId);
    } catch (err) {
      setFormData(null);
      setError("Patient not found");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updatePatient(formData);
      alert("Patient updated successfully");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div>
      <h2>View Patient Details</h2>
      <input
        type="text"
        placeholder="Search by Patient ID"
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
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange}  />
        <br />
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
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
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}

export default ViewPatient;
