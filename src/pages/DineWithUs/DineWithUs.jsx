import React from "react";

export default function DineWithUs() {
  return (
    <div className="dine-with-us-container">
      <div className="dine-with-us-content">
        <div className="dine-with-us-text">
          <span className="dine-with-us-label">Dine with us</span>
          <h2 className="dine-with-us-heading">Food and Drink</h2>
          <p className="dine-with-us-description">
            Enjoy a variety of delicious dishes made from fresh, locally sourced ingredients in a serene and welcoming atmosphere. 
            From traditional Kerala cuisine to international favorites, our restaurant caters to every palate.
          </p>
          <div className="dine-with-us-buttons">
            <button className="contact-btn">Contact</button>
          </div>
        </div>
        <div className="dine-with-us-image">
          <img src="https://media.istockphoto.com/id/1385185506/photo/side-view-of-luxury-hotel-room-with-two-beds-chair-and-potted-plant.jpg?s=612x612&w=0&k=20&c=sO6nXqY-aFsST-dLFLiP3fzlsDOU-R1hQ-PetQ-_kKI=" alt="Restaurant Interior" />
        </div>
      </div>
    </div>
  );
}
