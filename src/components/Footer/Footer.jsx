import React from "react";

import facebook from "../../assets/social/facebook.png";
import github from "../../assets/social/github.png";
import linkedin from "../../assets/social/linkedin.png";

import top from "../../assets/top.png";

export default function Footer() {
  return (
    <footer>
      <div className="top-container">
        <div className="menu">
          <h3>Location</h3>
          <p>Kaluthara</p>
        </div>
        <div className="menu">
          <h3>Telephone</h3>
          <p>+975485441541</p>
          <p>+975485441541</p>
        </div>
        <div className="menu">
          <h3>Quick Links</h3>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="menu">
          <h3>Email</h3>
          <p>company@gmail.com</p>
        </div>
        <div id="mobile-social" className="menu">
          <h3>Join Our Social Community</h3>
          <div>
            <img src={facebook} alt="" className="icon" />
            <img src={github} alt="" className="icon" />
            <img src={linkedin} alt="" className="icon" />
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom-container">
        <small>Copyright © 2023, QUADRATS.inc</small>
        <div id="desktop-social">
          <img src={facebook} alt="" className="icon" />
          <img src={github} alt="" className="icon" />
          <img src={linkedin} alt="" className="icon" />
        </div>
        <button
          className="to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={top} alt="" className="icon" />
          <small>Back On Top</small>
        </button>
      </div>
    </footer>
  );
}
