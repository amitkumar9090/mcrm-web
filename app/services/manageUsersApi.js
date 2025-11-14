import axios from "axios";

const API_BASE_URL = "https://mcrm.webtechnomind.in/backend/api";

// Create a reusable Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get all users
export const getUsers = async (token = null) => {
  console.log(" Token:", token);

  try {
    const response = await api.get("/users", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    console.log("API Response Data:", response.data);
    return response.data.data; // return only data (not the entire response)
  } catch (error) {
    console.error("Error fetching users:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
    });

    // Handle specific error cases
    if (error.response) {
      // Server responded but with error status (e.g., 401, 404, 500)
      throw {
        message: error.response.data?.message || "Failed to fetch users",
        status: error.response.status,
        errors: error.response.data?.errors || null,
        type: "server_error",
      };
    } else if (error.request) {
      // Request made but no response received
      throw {
        message:
          "No response from server. Check if API is running and CORS is configured.",
        type: "network_error",
      };
    } else {
      // Something else went wrong before request was sent
      throw {
        message: error.message || "Unknown error occurred",
        type: "unknown_error",
      };
    }
  }
};

// Get single user by ID
export const getUserById = async (userId, token = null) => {
  try {
    const response = await api.get(`/users/${userId}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });

    if (error.response) {
      throw {
        message: error.response.data?.message || "Failed to fetch user",
        status: error.response.status,
        errors: error.response.data?.errors || null,
        type: "server_error",
      };
    } else if (error.request) {
      throw {
        message: "No response from server. Check if API is running.",
        type: "network_error",
      };
    } else {
      throw {
        message: error.message || "Unknown error occurred",
        type: "unknown_error",
      };
    }
  }
};

// Get all roles
export const getRoles = async (token = null) => {
  try {
    const response = await api.get("/user-role", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    return response.data; //  Return data (or response)
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
};

// Add new user
export const addUsers = async (formData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

// Update user
export const updateUser = async (userId, formData, token) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating user ${userId}:`, error);

    if (error.response) {
      throw {
        message: error.response.data?.message || "Failed to update user",
        status: error.response.status,
        errors: error.response.data?.errors || null,
        type: "server_error",
      };
    } else if (error.request) {
      throw {
        message: "No response from server. Check if API is running.",
        type: "network_error",
      };
    } else {
      throw {
        message: error.message || "Unknown error occurred",
        type: "unknown_error",
      };
    }
  }
};

// Delete user
export async function deleteUser(userId, token) {
  const res = await fetch(`${API_BASE_URL}/usersdelete/${userId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to delete user: ${res.statusText}`);
  }

  return res.json();
}