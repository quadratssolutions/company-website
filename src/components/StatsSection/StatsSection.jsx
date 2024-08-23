import React from "react";

export default function StatsSection() {
  return (
    <section id="stats">
      <div className="section-container stats-container">
        <div className="stat-card">
          <div className="inner-box">
            <h1>25+</h1>
            <p>Completed projects</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="inner-box">
            <h1>20+</h1>
            <p>Satisfied Clients</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="inner-box">
            <h1>500+</h1>
            <p>User Comments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
