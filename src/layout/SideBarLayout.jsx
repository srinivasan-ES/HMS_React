// src/components/SidebarLayout.jsx
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './SideBarLayout.css'; // We'll define basic styles

function SideBarLayout() {

  const [showPatients,setShowPatients] = useState(false);
  const [showDoctors,setShowDoctors] = useState(false);
  const [showAppointments,setShowAppointments] = useState(false);
  const [prescription,setPrescription] = useState(false);
  const [billing,setBilling] = useState(false);
  return (
    <div className="layout">
      <aside className="sidebar">
        <nav>
          <h2><Link to="/" style={{ marginRight: '10px'}}>HMS</Link></h2>
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
        <br />
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
          <br />
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
          <br />
          <div className="dropdown">
            <div onClick={() => setPrescription(!prescription)} style={{ cursor: 'pointer' }}>
            Prescription ▼
        </div>
        {prescription && (
            <div className="dropdown-content">
              <Link to="/AddPrescription" style={{ marginRight: '10px'}}>Add Prescription</Link>
              <Link to="/ViewPrescription" style={{ marginRight: '10px'}}>View Prescription</Link>
            </div>)}
          </div>
          <br />
          <div className="dropdown">
            <div onClick={() => setBilling(!billing)} style={{ cursor: 'pointer' }}>
            Billing ▼
        </div>
        {billing && (
            <div className="dropdown-content">
              <Link to="/GenerateBill" style={{ marginRight: '10px'}}>Generate Bill</Link>
              <Link to="/ViewBilling" style={{ marginRight: '10px'}}>View Billing</Link>
            </div>)}
          </div>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default SideBarLayout;
