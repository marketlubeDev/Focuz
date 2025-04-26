import React from "react";

export default function RoomSuits() {
  return (
    <section className="room-suits-section">
    <div className="room-suits-container">
      <div className="room-suits-content">
        <div className="room-suits-image">
          <img src="https://media.istockphoto.com/id/1050564510/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=ZYEso7dgPl889aYddhY2Fj3GOyuwqliHkbbT8pjl_iM=" alt="Luxury Room" />
        </div>
        <div className="room-suits-text">
          <span className="stay-with-us">Stay with us</span>
          <h2 className="room-suits-heading">Room and Suits</h2>
          <p className="room-suits-description">
            Enjoy a comfortable and relaxing experience in our well-appointed rooms and suites. 
            Whether you're here for business or leisure, our rooms provide the perfect retreat.
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
