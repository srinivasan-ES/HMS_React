// src/components/SidebarLayout.jsx
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './SideBarLayout.css'; // We'll define basic styles

function SideBarLayout() {

  const [showPatients,setShowPatients] = useState(false);
  const [showDoctors,setShowDoctors] = useState(false);
  const [showAppointments,setShowAppointments] = useState(false);
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>HMS</h2>
        <nav>
          <Link to="/" style={{ marginRight: '10px'}}>Home</Link>
          <div className="dropdown">
             <div onClick={() => setShowPatients(!showPatients)} style={{ cursor: 'pointer' }}>
          Patients ▼
        </div>
        {showPatients && (
            <div className="dropdown-content">
              <Link to="/PatientRegistration" style={{ marginRight: '10px'}}>Patient Registration</Link>
              <Link to="/PatientList" style={{ marginRight: '10px'}}>Patient List</Link>       
              <Link to="/view-patient" style={{ marginRight: '10px'}}>View Patient</Link>
            </div>)}
        </div>
          <div className="dropdown">
            <div onClick={() => setShowDoctors(!showDoctors)} style={{ cursor: 'pointer' }}>
          Doctors ▼
        </div>
        {showDoctors && (
            <div className="dropdown-content">
              <Link to="/DoctorRegistration" style={{ marginRight: '10px'}}>Doctor Registration</Link>
              <Link to="/DoctorList" style={{ marginRight: '10px'}}>Doctor List</Link>       
              <Link to="/view-doctor" style={{ marginRight: '10px'}}>View Doctor</Link>
            </div>)}
          </div>
          <div className="dropdown">
            <div onClick={() => setShowAppointments(!showAppointments)} style={{ cursor: 'pointer' }}>
          Appointment ▼
        </div>
        {showAppointments && (
            <div className="dropdown-content">
              <Link to="/AppointmentRegistration" style={{ marginRight: '10px'}}>Book Appointment</Link>
              <Link to="/AppointmentList" style={{ marginRight: '10px'}}>Appointment List</Link>       
              <Link to="/ViewAppointment" style={{ marginRight: '10px'}}>View Appointment</Link>
            </div>)}
          </div>
          <Link to="/billing">Billing</Link>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default SideBarLayout;
