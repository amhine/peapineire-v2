import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; 

export const register = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

export const login = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};

export const logout = async () => {
  const token = localStorage.getItem('token');
  return await axios.post(`${API_URL}/logout`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });
};