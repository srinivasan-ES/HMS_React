import React from "react";
import SideBarLayout from '../layout/SideBarLayout';
import { Routes, Route } from "react-router-dom";
import { Link, Outlet } from 'react-router-dom';
import PatientRegistration from "../pages/patient/PatientRegistration";
import PatientList from "../pages/patient/PatientList";
import EditPatient from "../pages/patient/EditPatient";
import ViewPatient from "../pages/patient/ViewPatient";
import Home from "../pages/patient/Home";
import DoctorRegistration from "../pages/Doctor/DoctorRegistration";
import EditDoctor from "../pages/Doctor/EditDoctor";
import ViewDoctor from "../pages/Doctor/ViewDoctor";
import DoctorList from "../pages/Doctor/DoctorList";
import AppointmentRegistration from "../pages/appointment/AppointmentRegistration";
import AppointmentList from "../pages/appointment/AppointmentList";
import ViewAppointment from "../pages/appointment/ViewAppointment"; 

function AppRoutes() {
  return (

<Routes>
    <Route path="/" element={<SideBarLayout />} >
      <Route index element={<Home />} />
      <Route path="/PatientRegistration" element={<PatientRegistration />} />
      <Route path="/PatientList" element={<PatientList />} />
      <Route path="/edit-patient/:id" element={<EditPatient />} />
      <Route path="/view-patient" element={<ViewPatient />} />
      <Route path="/DoctorRegistration" element={<DoctorRegistration />} />
      <Route path="/edit-doctor/:id" element={<EditDoctor />} />
      <Route path="/view-doctor" element={<ViewDoctor />} />
      <Route path="/DoctorList" element={<DoctorList />} />
      <Route path="/AppointmentRegistration" element={<AppointmentRegistration />} />
      <Route path="/AppointmentList" element={<AppointmentList />} />
      <Route path="/ViewAppointment" element={<ViewAppointment />} />
    </Route>
</Routes>
  );
}
export default AppRoutes;