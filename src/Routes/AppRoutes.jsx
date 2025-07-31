import React from "react";
import { Routes, Route } from "react-router-dom";
import PatientRegistration from "../pages/patient/PatientRegistration";
import PatientList from "../pages/patient/PatientList";
import EditPatient from "../pages/patient/EditPatient";
import ViewPatient from "../pages/patient/ViewPatient";
import Home from "../pages/patient/Home";
function AppRoutes() {
  return (

<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PatientRegistration" element={<PatientRegistration />} />
      <Route path="/PatientList" element={<PatientList />} />
      <Route path="/edit-patient/:id" element={<EditPatient />} />
      <Route path="/view-patient" element={<ViewPatient />} />
    </Routes>
  );
}
export default AppRoutes;