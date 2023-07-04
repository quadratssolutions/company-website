import React from "react";

import hand_shake from "../../../../assets/hand-shake.png";

function Details() {
  return (
    <section>
      <h1>Join With Us</h1>
      <div className="detail-container reverse-col">
        <p className="detail-text">
          Join the forefront of innovation at QUADRATS, the leading IT company
          specializing in AI and React web projects. With us, you'll be part of
          a dynamic team that thrives on making a real impact and conquering
          thrilling challenges. Whether you're an experienced professional or a
          motivated newcomer, upload your resume and embark on a transformative
          journey. At QUADRATS, we foster a collaborative environment that
          encourages pushing boundaries and unleashing creativity. Be involved
          in groundbreaking projects, contribute to exceptional solutions, and
          shape the future of technology. Join us today and seize the
          opportunity to grow professionally while making a difference in the
          world of AI and React web projects.
        </p>
        <div className="detail-img">
          <img src={hand_shake} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Details;
