import axios from "axios";

const API_BASE_URL = "https://mcrm.webtechnomind.in/backend/api"; 


export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};


export const logout = async (token) => {
  const response = await axios.post(
    `${API_BASE_URL}/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`, // Send token to logout
      },
    }
  );
  return response.data;
};