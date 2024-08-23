import React from "react";

import facebookLogo from "../../../assets/social/facebook.png";
import linkedinLogo from "../../../assets/social/linkedin.png";
import githubLogo from "../../../assets/social/github.png";

export default function MemberCard(props) {
  const { image, name, position, description, facebook, github, linkedin } =
    props.member;
  return (
    <div className="member-card">
      <img src={image} alt={name} className="avatar" />
      <div className="body">
        <h2 className="">{name}</h2>
        <h3>{position}</h3>
        <small>{description}</small>
        {/* <div>
          <a href={facebook} target="blank">
            <img src={facebookLogo} alt="" className="icon" />
          </a>
          <a href={github} target="blank">
            <img src={githubLogo} alt="" className="icon" />
          </a>
          <a href={linkedin} target="blank">
            <img src={linkedinLogo} alt="" className="icon" />
          </a>
        </div> */}
      </div>
    </div>
  );
}
