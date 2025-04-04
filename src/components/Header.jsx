import React from "react";
import "./Trip.css";

function Header() {
  return (
    <div className="header">
      <img
        src="./src/components/react-symbol.png"
        alt="logo"
        className="logo"
      />
      <span>my travel journal.</span>
    </div>
  );
}

export default Header;
