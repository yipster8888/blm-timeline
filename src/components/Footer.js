import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <p className="footer-copyright">
        Copyright &copy; Tyler Yip, Radu Schirliu, &amp; Alexa Calkhoven{" "}
        {new Date().getFullYear()}. All rights reserved.
      </p>
      <p>
        <a className="link" href="/">
          Timeline
        </a>
        {" • "}
        <a className="link" href="/community-guidelines">
          Community Guidelines
        </a>
      </p>
    </div>
  );
}

export default Footer;
