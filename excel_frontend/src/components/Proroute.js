import React from "react";
import { Navigate } from "react-router-dom";

function Proroute({ component: Component }) {
  const token = localStorage.getItem("token");

  return token ? <Component /> : <Navigate to="/" />;
}

export default Proroute;
