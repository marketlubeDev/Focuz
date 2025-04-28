import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <span className="get-in-touch">Get in touch</span>
        <h2 className="contact-heading">Contact Us Today</h2>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3 className="info-heading">Get in touch</h3>
          <div className="info-item">
            <FaPhone className="icon" />
            <p>
              <a href="tel:+918592011120">+91 85920 11120</a>
            </p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>
              <a href="mailto:info@focuz.com">enquiry.focuzhabitat@gmail.com</a>
            </p>
          </div>

          <h3 className="info-heading">Location</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d978.8816357523366!2d76.077036869611!3d11.074079815451494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64bc0aa73aed3%3A0xe7d4428d5884c412!2sFocuz%20Habitat!5e0!3m2!1sen!2sin!4v1745660846668!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Focuz Habitat Location"
            ></iframe>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>
              <input type="tel" id="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Mail ID</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
