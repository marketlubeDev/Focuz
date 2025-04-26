import React from "react";

export default function About() {
  return (
    <div className="about" id="about">
      <h2 className="about__subtitle">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </h2>
      <h1 className="about__title">Lorem ipsum dolor sit amet.</h1>
      <div className="about__button-group">
        <button className="btn about__button-group-book-now">Book Now</button>
        <button className="btn about__button-group-enquiry">Enquiry</button>
      </div>
    </div>
  );
}
