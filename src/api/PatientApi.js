// src/api/patientApi.js
import axios from 'axios';

const BASE_URL = "https://patient-service-8h36.onrender.com/hospital/v1";

export const getPatientById = (id) => axios.get(`${BASE_URL}/get-patient/${id}`);
export const getPatientByMobile = (mobile) => axios.get(`${BASE_URL}/get-patient/phone-number/${mobile}`);
export const updatePatient = (patientData) => axios.post(`${BASE_URL}/create-patient`, patientData);
export const generateBill = (id) => axios.post(`${BASE_URL}/generate-bill/${id}`);
export const getDoctorById = (id) => axios.get(`${BASE_URL}/get-doctor/${id}`);
export const getDoctorByMobile = (mobile) => axios.get(`${BASE_URL}/get-doctor/phone-number/${mobile}`);
export const updateDoctor = (doctorData) => axios.post(`${BASE_URL}/create-doctor`, doctorData);
export const getPrescriptionByAppointmentId = (id) => axios.get(`${BASE_URL}/prescription/${id}`);
export const getPrescriptionById = (id) => axios.get(`${BASE_URL}/get-prescription/${id}`);
