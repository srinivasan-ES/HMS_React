import React, { useState } from "react";
import { getPrescriptionByAppointmentId ,getPrescriptionById } from "../../api/PatientApi";

function ViewPrescription() {
  const [searchId, setSearchId] = useState("");
  const [searchAppointmentId, setSearchAppointmentId] = useState("");
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
      try {
        setError("");
        let response;
  
        if (searchId) {
          response = await getPrescriptionById(searchId);
        } else if (searchAppointmentId) {
          response = await getPrescriptionByAppointmentId(searchAppointmentId);
        } else {
          setError("Enter Prescription ID or Appointment Number");
          return;
        }
        setFormData(response.data);
      } catch (err) {
        setFormData(null);
        setError("Prescription not found");
      }
    };


  return (
    <div>
      <h2>View Prescription Details</h2>
      <input
        type="text"
        placeholder="Search by Prescription ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <span> OR </span>
      <input
        type="text"
        placeholder="Search by Appointment ID"
        value={searchAppointmentId}
        onChange={(e) => setSearchAppointmentId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {formData && (
        <form style={{ marginTop: "1rem" }}>
        <input type="text" name="appointmentId" value={formData.appointmentId} readOnly />
        <br />
        <input type="text" name="prescribedDate" value={formData.prescribedDate}  readOnly/>
        <br />
        <input type="text" name="diagnosis" value={formData.diagnosis}  readOnly/>
        <br />
        <input type="text" name="remarks" value={formData.remarks} readOnly />
        <br />
        </form>
      )}
    </div>
  );
}

export default ViewPrescription;
