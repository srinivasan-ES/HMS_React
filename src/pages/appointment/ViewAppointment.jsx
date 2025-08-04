import React, { useState } from "react";
import { retrieveAppointment } from "../../api/BookAppointment";


function ViewAppointment() {
  const [searchId, setSearchId] = useState("");
  const [searchDoctorId, setSearchDoctorId] = useState("");
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
      try {
        setError("");
        let response;
  
        if (searchId) {
          response = await retrieveAppointment(searchId);
        } else if (searchDoctorId) {
          response = await retrieveByDoctorId(searchDoctorId);
        } else {
          setError("Enter Doctor ID or Appointment Number");
          return;
        }
        setFormData(response);
      } catch (err) {
        setFormData(null);
        setError("Appointment not found");
      }
    };


  return (
    <div>
      <h2>View Appointment Details</h2>
      <input
        type="text"
        placeholder="Search by Appointment ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <span> OR </span>
      <input
        type="text"
        placeholder="Search by Doctor ID"
        value={searchDoctorId}
        onChange={(e) => setSearchDoctorId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {formData && (
        <form style={{ marginTop: "1rem" }}>
        <input type="text" name="appointmentId" value={formData.appointmentId} readOnly />
        <br />
        <input type="text" name="doctorId" value={formData.doctorId}  readOnly/>
        <br />
        <input type="text" name="appointmentDate" value={formData.appointmentDate}  readOnly/>
        <br />
        <input type="text" name="appointmentTime" value={formData.appointmentTime} readOnly />
        <br />
        <input type="text" name="status" value={formData.status}  readOnly/>
        <br />
        <input type="text" name="notes" value={formData.notes}  readOnly/>
        <br />
        </form>
      )}
    </div>
  );
}

export default ViewAppointment;
