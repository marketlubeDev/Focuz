import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__content">
          {/* Left side menu items */}
          <div className="navbar__menu">
            <a href="#about-us" className="navbar__menu-link">
              About us
            </a>
            <a href="#services" className="navbar__menu-link">
              Services
            </a>
            <a href="#stories" className="navbar__menu-link">
              Stories
            </a>
          </div>

          {/* Logo in center */}
          <div className="navbar__logo">
            <a href="#home">
              <img src="/path-to-your-focuz-logo.png" alt="Focuz Habitat" />
            </a>
          </div>

          {/* Book now button */}
          <div>
            <a href="#book-now" className="navbar__book-button">
              Book now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
