

const PATIENT_ID_KEY = 'selectedPatientId';

export const setSelectedPatientId = (id) => {
    localStorage.setItem(PATIENT_ID_KEY,id);
}

export const getSelectedPatientId = () => {
    localStorage.getItem(PATIENT_ID_KEY);
}

export const clearSelectedPatientId = () => {
    localStorage.removeItem(PATIENT_ID_KEY);
}