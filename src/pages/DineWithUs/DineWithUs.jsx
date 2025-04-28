import React from "react";

export default function DineWithUs() {
  return (
    <div className="dine-with-us-container">
      <div className="dine-with-us-content">
        <div className="dine-with-us-text">
          <span className="dine-with-us-label">Dine with us</span>
          <h2 className="dine-with-us-heading">Food and Drink</h2>
          <p className="dine-with-us-description">
            Enjoy a variety of delicious dishes made from fresh, locally sourced
            ingredients in a serene and welcoming atmosphere. From traditional
            Kerala cuisine to international favorites, our restaurant caters to
            every palate.
          </p>
          <div className="dine-with-us-buttons">
            <a
              href="https://wa.me/918592011120"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="dine-with-us-image">
          <img
            src="https://res.cloudinary.com/dznxxalrb/image/upload/v1745678206/bcec42cf6a1f238398b69d60b42418a6066ced83_1_iwizax.jpg"
            alt="Restaurant Interior"
          />
        </div>
      </div>
    </div>
  );
}
