// src/api/patientApi.js
import axios from 'axios';

const BASE_URL = "https://patient-service-8h36.onrender.com/hospital/v1";

export const getDoctorById = (id) => axios.get(`${BASE_URL}/get-doctor/${id}`);
export const getDoctorByMobile = (mobile) => axios.get(`${BASE_URL}/get-doctor/phone-number/${mobile}`);
export const updateDoctor = (doctorData) => axios.post(`${BASE_URL}/create-doctor`, doctorData);

