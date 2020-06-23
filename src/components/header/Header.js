import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header-title">
        Black Lives Matter Timeline
      </Link>
      <p className="header-tagline">
        ~ Keep fighting for justice. It's working. ~
      </p>
    </div>
  );
}

export default Header;
