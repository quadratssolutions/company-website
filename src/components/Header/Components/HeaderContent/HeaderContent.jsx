import React from "react";

import name from "../../../../assets/name.png";
import Button from "../../../global/Button/Button";
import { Link } from "react-router-dom";

function HeaderContent() {
  return (
    <div className="header-content">
      <img src={name} alt="" />
      <h1>
        Transforming <span className="highlight">Ideas</span> into Digital{" "}
        <span className="highlight">Excellence</span>
      </h1>

      <Link
        to="https://calendly.com/kasundularaam/30min"
        className="no-decorations"
      >
        <Button text={"Schedule a meeting"} />
      </Link>

      <h2>What is our company</h2>
      <p>
        Quadrats Solutions is a tech startup that develops web sites and mobile
        applications. We use React.js and AI-based technologies to create
        innovative and user-friendly solutions for our clients.
      </p>
    </div>
  );
}

export default HeaderContent;
