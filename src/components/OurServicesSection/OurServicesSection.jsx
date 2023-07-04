import React from "react";
import radioactive from "../../assets/radioactive.png";
import robot from "../../assets/robot.png";

function OurServicesSection() {
  return (
    <section id="services">
      <div className="section-container">
        <h1>Our Services</h1>
        <div className="articles-container">
          <article>
            <img src={radioactive} alt="" />
            <h2>React Projects</h2>
            <p>
              Our company specializes in offering top-notch React projects,
              providing cutting-edge solutions that leverage the power of this
              popular JavaScript library to create dynamic and engaging user
              interfaces.
            </p>
            <p>
              <a href="google.com">Learn More</a>
            </p>
          </article>
          <article>
            <img src={robot} alt="" />
            <h2>AI Based Projects</h2>
            <p>
              Our company excels in AI-based projects, leveraging cutting-edge
              technologies to deliver transformative solutions that automate
              processes, extract insights, and drive business growth.
            </p>
            <p>
              <a href="google.com">Learn More</a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default OurServicesSection;
