import React from "react";
import AppRoutes from "./routes/AppRoutes";
import {  Routes, Route ,Link } from 'react-router-dom';


function App() {
  return (
  <div>
    <nav style={{ padding : '10px'}}>
      <Link to="/" style={{ marginRight: '10px'}}>Home</Link>
      <Link to="/PatientRegistration" style={{ marginRight: '10px'}}>Patient Registration</Link>
      <Link to="/PatientList" style={{ marginRight: '10px'}}>Patient List</Link>
      <Link to="/view-patient" style={{ marginRight: '10px'}}>View Patient</Link>
    </nav>
    <AppRoutes/>
  </div>

  );
}

export default App