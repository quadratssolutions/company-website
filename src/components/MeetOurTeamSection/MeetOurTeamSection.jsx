import React from "react";
import ashen from "../../assets/members/ashen.png";
import kasun from "../../assets/members/kasun.jpg";
import hasaranga from "../../assets/members/hasaranga.jpeg";
import rajith from "../../assets/members/rajith.jpeg";
import nipun from "../../assets/members/nipun.png";
import malaka from "../../assets/members/malaka.png";
import ravidu from "../../assets/members/ravidu.png";

import MemberCard from "./components/MemberCard";

function MeetOurTeamSection() {
  const members = [
    {
      image: nipun,
      name: "Nipun Dabare",
      position: "Co-Founder of Quadrats",
      description:
        "Nipun Dabare is the Founder of Quadrats. With a passion for innovation and a keen eye for details, Nipun leads our team with a vision for creating groundbreaking solutions. He brings years of experience and expertise in technology and business development, ensuring that Quadrats stays at the forefront of industry advancements.",
      facebook: "https://www.facebook.com/nipun.dabare",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      image: malaka,
      name: "Malaka Dulantha",
      position: "Co-founder of Quadrats",
      description:
        "Malaka Dulantha, the Co-founder of Quadrats, is a driving force behind our success. His relentless commitment to excellence and his ability to turn ideas into reality make him a crucial part of our team. Malaka combines a strong technical background with a creative mindset to drive our projects forward.",
      facebook: "https://www.facebook.com/malaka.dulantha",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      image: ravidu,
      name: "Ravindu Wijekoon",
      position: "Co-Founder & Head of Research and Development",
      description:
        "Ravindu Navanjana, the Co-founder of Quadrats, is a driving force behind our success. His relentless commitment to excellence and his ability to turn ideas into reality make him a crucial part of our team. Malaka combines a strong technical background with a creative mindset to drive our projects forward.",
      facebook: "https://www.facebook.com/ravindu.nawa3",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      image: kasun,
      name: "Kasun Dulara",
      position: "Full Stack Developer",
      description:
        "Kasun Dulara serves as our Full Stack Developer, contributing to the core of our technical operations. His proficiency in both front-end and back-end development allows us to build seamless and efficient applications. With a dedication to code quality and performance, Kasun plays a pivotal role in our team's success.",
      facebook: "https://www.facebook.com/kasundularaam/",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      image: rajith,
      name: "Rajith Lahiru",
      position: "Backend Developer",
      description:
        "Rajith Lahiru, our Backend Developer, ensures that the infrastructure supporting our applications is robust and secure. With a deep understanding of server-side technologies and data management, Rajith guarantees that our systems run smoothly. His problem-solving skills are invaluable to our team.",
      facebook: "https://www.facebook.com/rajith.lahiru.52",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      image: hasaranga,
      name: "Bhanu Hasaranga",
      position: "Frontend Developer",
      description:
        "Bhanu Hasaranga, our Frontend Developer, is responsible for creating the user interfaces that capture our users' hearts. With an eye for design and a passion for user experience, Bhanu crafts intuitive and visually appealing interfaces. His work bridges the gap between technology and user satisfaction.",
      facebook: "https://www.facebook.com/bhanu.hasaranga.5",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      image: ashen,
      name: "Ashen Prabhath",
      position: "UI/UX Designer",
      description:
        "Ashen Prabhath is our UI/UX Designer, shaping the visual identity and user experience of our products. With a focus on aesthetics, usability, and user-centric design, Ashen ensures that our applications are not only functional but also visually engaging. His creative talents bring our projects to life.",
      facebook: "https://www.facebook.com/ashen.prabath.1",
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
