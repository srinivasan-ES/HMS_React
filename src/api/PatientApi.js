// src/api/patientApi.js
import axios from 'axios';

const BASE_URL = "https://patient-service-8h36.onrender.com/hospital/v1";

export const getPatientById = (id) => axios.get(`${BASE_URL}/get-patient/${id}`);
export const getPatientByMobile = (mobile) => axios.get(`${BASE_URL}/get-patient/phone-number/${mobile}`);
export const updatePatient = (patientData) => axios.post(`${BASE_URL}/create-patient`, patientData);
