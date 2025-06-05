import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Proroute from "./components/Proroute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';



import "./Styles/App.css";

const Dashboard = () => <h2>Dashboard (Protected)</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<Proroute component={Dashboard} />}
          />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}


export default App;
