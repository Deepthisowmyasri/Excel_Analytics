import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

export const registerUser = (data) => API.post("/register", data);

export const loginUser = async (credentials) => {
  try {
    const res = await API.post("/login", credentials);
    return res.data; // { token, user }
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
