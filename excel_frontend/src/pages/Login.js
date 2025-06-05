import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import "../Styles/Form.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const response = await loginUser(form);

      

      if (response && response.token) {
        localStorage.setItem("token", response.token);

        const userRole = response.user.role.toLowerCase();

        if (userRole === "admin") {
          navigate("/admin-dashboard");
        } else if (userRole === "user") {
          navigate("/user-dashboard");
        } else {
          setErrorMsg("Invalid user role.");
        }
      } else {
        setErrorMsg("Invalid credentials. Please try again or register.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg(
        error.response?.data?.message ||
          "Login failed. Invalid Credentials "
      );
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      {errorMsg && <p className="error">{errorMsg}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
