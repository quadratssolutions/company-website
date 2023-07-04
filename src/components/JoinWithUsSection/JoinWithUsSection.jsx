import React from "react";
import Form from "./components/Form/Form";
import Details from "./components/Details/Details";

function JoinWithUsSection() {
  return (
    <section id="join-us" className="col align-center">
      <div className="section-container">
        <Details />
        <Form />
      </div>
    </section>
  );
}

export default JoinWithUsSection;
