import React, { useState } from "react";
import { registerUser } from "../services/api";
import "../Styles/Form.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrorMsg(""); // clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      setModalOpen(true);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg("Registration failed. Please try again.");
      }
    }
  };

  const handleLoginRedirect = () => {
    setModalOpen(false);
    navigate("/login");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        {errorMsg && <p className="error">{errorMsg}</p>}
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <select name="role" value={form.role} onChange={handleChange} required>
          <option value="" disabled>Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Registration Successful!</h3>
            <p>Now you can log in.</p>
            <button onClick={handleLoginRedirect}>Go to Login</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
