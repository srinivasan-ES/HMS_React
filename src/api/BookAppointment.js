import axios from 'axios';

const BASE_URL = 'https://patient-service-8h36.onrender.com/hospital';

export const bookAppointment = async (patientId, appointmentData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/v1/book-appointment/${patientId}`,
      appointmentData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const retrieveAppointment = async (appointmentId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/v1/get-appointment/${appointmentId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const retrieveByDoctorId = async (doctorId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/v1/get-appointmentByDoctorId/${doctorId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};