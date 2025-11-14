import axios from "axios";

const API_BASE_URL = "https://mcrm.webtechnomind.in/backend/api";

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - automatically adds token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Get all roles
export const getRoles = async (token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.get("/user-role", { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
};

// Create role
export const createRole = async (roleData, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.post("/role-create", roleData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error creating role:", error);
    throw error;
  }
};

// Update role
export const updateRole = async (roleId, roleData, token = null) => {
  try {    
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.post(`/role-update/${roleId}`, roleData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error updating role:", error);
    throw error;
  }
};

// Delete role
export const deleteRole = async (roleId, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.get(`/role-delete/${roleId}`, { headers });
    return response.data;
  } catch (error) {
    console.error("Error deleting role:", error);
    throw error;
  }
};

export default { getRoles, createRole, updateRole, deleteRole };