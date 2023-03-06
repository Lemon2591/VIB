import React from "react";
import Logo from "../assets/img/logo.png";

function NavHome() {
  return (
    <div className="nav-home-container">
      <div className="nav-home-content">
        <div className="logo-img">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default NavHome;
