import React from "react";

export default function About() {
  return (
    <div className="about" id="about">
      <h2 className="about__subtitle">
        Your Journey to Wellness and Comfort Awaits
      </h2>
      <h1 className="about__title">Book Your Stay at Focuz Habitat Today</h1>
      <div className="about__button-group">
        <a
          href="https://wa.me/c/918592011120"
          target="_blank"
          rel="noopener noreferrer"
          className="btn about__button-group-book-now"
        >
          Book Now
        </a>
        <a
          href="#contact"
          className="btn about__button-group-enquiry"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Enquiry
        </a>
      </div>
    </div>
  );
}
