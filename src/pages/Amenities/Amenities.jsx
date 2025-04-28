import React from "react";
import { FaRegCircle } from "react-icons/fa";

export default function Amenities() {
  return (
    <div className="amenities-container">
      <div className="amenities-content">
        <div className="amenities-text">
          <span className="stay-with-us">Stay with us</span>
          <h2 className="amenities-heading">Amenities</h2>
          <p className="amenities-description">
            Offering a perfect blend of luxury and convenience. Our
            well-appointed rooms and suites are designed to cater to all your
            needs, ensuring a restful stay. Enjoy world-class amenities and
            rejuvenating services, making your time with us truly memorable.ds,
            ensuring a restful stay. Enjoy world-class amenities and
            rejuvenating services, making your time with us truly memorable.
          </p>
          <a
            href="https://wa.me/918592011120"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            Contact
          </a>
        </div>

        <div className="amenities-list">
          <div className="list-column">
            <ul>
              <li>
                <FaRegCircle className="circle-icon" /> Spa
              </li>
              <li>
                <FaRegCircle className="circle-icon" /> Swimming Pool
              </li>
              <li>
                <FaRegCircle className="circle-icon" /> Gym
              </li>
              <li>
                <FaRegCircle className="circle-icon" /> Restaurant
              </li>
              <li>
                <FaRegCircle className="circle-icon" /> Indoor Games
              </li>
            </ul>
          </div>
          <div className="list-column">
            <ul>
              <li>
                <FaRegCircle className="circle-icon" /> Fireplace
              </li>
              <li>
                <FaRegCircle className="circle-icon" /> Jungle Safari
              </li>
              <li>
                <FaRegCircle className="circle-icon" /> Kids Play Area
              </li>
              <li>
                <FaRegCircle className="circle-icon" /> Lounge
              </li>
              <li>
                <FaRegCircle className="circle-icon" /> Steam and Sauna
              </li>
            </ul>
          </div>
          <div className="list-column">
            <ul>
              <li>
                <FaRegCircle className="circle-icon" /> Yoga
              </li>
              <li>
                <FaRegCircle className="circle-icon" /> Car Parking
              </li>
              <li>
                <FaRegCircle className="circle-icon" /> 24×7 Power Backup
              </li>
              <li>
                <FaRegCircle className="circle-icon" /> CCTV Covered Premises
              </li>
              <li>
                <FaRegCircle className="circle-icon" /> 24×7 Security
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
