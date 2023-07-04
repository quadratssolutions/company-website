import React from "react";
import ashen from "../../assets/members/ashen.png";
import kasun from "../../assets/members/kasun.png";
import hasaranga from "../../assets/members/hasaranga.png";
import rajith from "../../assets/members/rajith.png";
import nipun from "../../assets/members/nipun.png";

import MemberCard from "./components/MemberCard";

function MeetOurTeamSection() {
  const members = [
    {
      image: nipun,
      name: "Allen Mark",
      position: "Co Founder of Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis tincidunt ligula, eget maximus felis interdum nec. Sed varius lobortis ligula id consequat. Vestibulum aliquet nisl in felis facilisis, nec tincidunt tellus alique",
      facebook: "https://facebook.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      image: kasun,
      name: "Jenny Ortega",
      position: "Full Stack Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis tincidunt ligula, eget maximus felis interdum nec. Sed varius lobortis ligula id consequat. Vestibulum aliquet nisl in felis facilisis, nec tincidunt tellus alique",
      facebook: "https://facebook.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      image: rajith,
      name: "Jhon Marston",
      position: "DevOps Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis tincidunt ligula, eget maximus felis interdum nec. Sed varius lobortis ligula id consequat. Vestibulum aliquet nisl in felis facilisis, nec tincidunt tellus alique",
      facebook: "https://facebook.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      image: hasaranga,
      name: "Mark Jhones",
      position: "Co Founder of Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis tincidunt ligula, eget maximus felis interdum nec. Sed varius lobortis ligula id consequat. Vestibulum aliquet nisl in felis facilisis, nec tincidunt tellus alique",
      facebook: "https://facebook.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      image: ashen,
      name: "Sophia Jenifer",
      position: "UI/UX Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis tincidunt ligula, eget maximus felis interdum nec. Sed varius lobortis ligula id consequat. Vestibulum aliquet nisl in felis facilisis, nec tincidunt tellus alique",
      facebook: "https://facebook.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <section id="about-us">
      <div className="section-container">
        <h1>Meet Our Team</h1>
        <div className="members-container">
          {members.map((member) => (
            <MemberCard member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetOurTeamSection;
