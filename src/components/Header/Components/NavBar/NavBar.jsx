import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../../../assets/logo.png";

export default function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <div className="nav-container">
      <img className="mobile-logo" src={logo} alt="" />
      <nav ref={navRef}>
        <a href="#offers" onClick={showNavbar}>
          Offers
        </a>
        <a href="#services" onClick={showNavbar}>
          Services
        </a>
        <img src={logo} alt="" className="desktop-logo" />
        <a href="#join-us" onClick={showNavbar}>
          Join Us
        </a>
        <a href="#about-us" onClick={showNavbar}>
          About Us
        </a>
        <button className="nav-btn close" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn open" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}
