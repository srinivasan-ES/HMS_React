import React, { useState } from "react";
import { generateBill } from "../../api/PatientApi";

function GenerateBill() {
  const [appointmentId, setAppointmentId] = useState("");
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      let response;

      if (appointmentId) {
        response = await generateBill(appointmentId);
      } 
      setFormData(response.data);
    } catch (err) {
      setFormData(null);
      setError("Billing not found");
    }
  };

  return (
    <div>
      <h2>Generate Bill</h2>
      
      <input
        type="text"
        placeholder="Search by Appointment ID"
        value={appointmentId}
        onChange={(e) => setAppointmentId(e.target.value)}
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

export default GenerateBill;
