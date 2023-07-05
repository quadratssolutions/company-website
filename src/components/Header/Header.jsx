import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeaderContent from "./Components/HeaderContent/HeaderContent";

export default function Header() {
  return (
    <header className="welcome">
      <NavBar />
      <div className="section-container">
        <HeaderContent />
      </div>
    </header>
  );
}
