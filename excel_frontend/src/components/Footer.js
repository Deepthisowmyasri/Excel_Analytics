import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Excel Analytics Platform. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
