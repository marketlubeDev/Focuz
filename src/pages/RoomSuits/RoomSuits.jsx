import React from "react";

export default function RoomSuits() {
  return (
    <section className="room-suits-section">
      <div className="room-suits-container">
        <div className="room-suits-content">
          <div className="room-suits-image">
            <img
              src="https://res.cloudinary.com/dznxxalrb/image/upload/v1745678334/0de499da36c56767da78603894504fc7ebd3338a_1_pcq30w.jpg"
              alt="Luxury Room"
            />
          </div>
          <div className="room-suits-text">
            <span className="stay-with-us">Stay with us</span>
            <h2 className="room-suits-heading">Room and Suits</h2>
            <p className="room-suits-description">
              Enjoy a comfortable and relaxing experience in our well-appointed
              rooms and suites. Whether you're here for business or leisure, our
              rooms provide the perfect retreat.
            </p>
            <div className="room-suits-buttons">
              <button className="book-now-btn">Book Now</button>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
