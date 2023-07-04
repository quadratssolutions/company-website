import React from "react";
import meeting from "../../assets/meeting.png";

function WeOfferSection() {
  return (
    <section id="offers">
      <div className="section-container">
        <h1>We Offer</h1>
        <div className="detail-container">
          <div className="detail-img">
            <img src={meeting} alt="" />
          </div>
          <div className="detail-text">
            <p>We offer a wide range of services, including:</p>
            <ul>
              <li>
                <p>Web development</p>
              </li>
              <li>
                <p>Mobile app development</p>
              </li>
              <li>
                <p>AI based development</p>
              </li>
              <li>
                <p>Custom software development</p>
              </li>
              <li>
                <p>Consulting</p>
              </li>
              <li>
                <p>Training</p>
              </li>
            </ul>
            <p>
              We are always looking for new ways to use technology to solve
              problems and improve people's lives. If you have a project in
              mind, please <a href="google.com">contact us</a> to discuss how we
              can help
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeOfferSection;
