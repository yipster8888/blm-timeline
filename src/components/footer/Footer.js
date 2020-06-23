import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer-copyright">
        Copyright &copy;{' '}
        {new Date().getFullYear()}. All rights reserved.
      </p>
      <Link to="/community-guidelines" className="footer-link">
        Community Guidelines
      </Link>
    </div>
  );
}

export default Footer;
