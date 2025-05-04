const API_BASE_URL = 'http://localhost:5000/api/doctors/';

export const getDoctors = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_BASE_URL}?${queryParams}`);
    if (!response.ok) {
      throw new Error('Failed to fetch doctors');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

export const addDoctor = async (doctorData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctorData),
    });
    if (!response.ok) {
      throw new Error('Failed to add doctor');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding doctor:', error);
    throw error;
  }
};