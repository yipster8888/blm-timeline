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
      <div className="footer-links">
        <Link to="/community-guidelines" className="footer-link">
          Community Guidelines
        </Link>
        <a href="https://forms.gle/c2JcBGzrpKdzuLct9" className="footer-link">Feedback</a>
      </div>
    </div>
  );
}

export default Footer;
