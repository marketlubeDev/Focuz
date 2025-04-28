import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-container__header">
          <h1>
            Your Gateway to Wellness
            <br />
            and Celebration
          </h1>
        </div>
        <div className="about-us-container__content">
          <div className="about-us-container__content__text">
            <span className="about-us-container__content__text__subtitle">
              Our story
            </span>
            <h2>
              We believe that true hospitality goes beyond offering a
              comfortable stay
            </h2>
            <p>
              It's about creating experiences that nourish the body, mind, and
              soul.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Located amidst the serene beauty of
              Malappuram, Kerala, Focuz Habitat is a unique blend of a premium
              hotel, an authentic Ayurvedic healing center, and a modern
              rehabilitation destination. We are built on a passion for
              wellness, comfort, and care, offering a peaceful sanctuary for
              guests from all walks of life.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Whether you're visiting us for a relaxing
              getaway, a rejuvenating Ayurvedic therapy, or to celebrate life's
              special moments in our banquet hall, every detail at Focuz Habitat
              is thoughtfully designed to make you feel at home. Our team is
              dedicated to offering personalized service with warmth and
              professionalism, ensuring your time with us is as enriching as it
              is memorable.
            </p>
          </div>
          <div className="about-us-container__content__image">
            <img
              src="https://res.cloudinary.com/dznxxalrb/image/upload/v1745847061/15ade1cfbf95e73108e12d82274ccf44d0d83335_1_jmfcvr.jpg"
              alt="Focuz Habitat Building"
            />
          </div>
        </div>
        <div className="about-us-container__highlight">
          <p>
            From the soothing touch of our{" "}
            <span className="about-us-container__highlight__green">
              Ayurveda spa
            </span>{" "}
            to the elegant charm of our rooms and the vibrant energy of our
            events space, Focuz Habitat invites you to reconnect with yourself
            in an environment crafted with heart
          </p>
        </div>
        <div className="about-us-container__imgBanner">
          <img
            src="https://res.cloudinary.com/dznxxalrb/image/upload/v1745678334/0de499da36c56767da78603894504fc7ebd3338a_1_pcq30w.jpg"
            alt="Focuz Habitat Building"
          />
        </div>
        <div className="about-us-container__connect">
          <div className="about-us-container__connect__content">
            <h2>Come, stay with us</h2>
            <p>
              Discover a world where healing, comfort, and joy come together
              beautifully
            </p>
            <a
              href="https://wa.me/c/918592011120"
              target="_blank"
              rel="noopener noreferrer"
              className="about-us-container__connect__button"
            >
              Book now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
