import React, { useState } from "react";
import Logo from "../../assets/img42.jpg";

export default function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__content">
          {/* Left side menu items */}
          <div className="navbar__menu">
            <a
              href="#about"
              className="navbar__menu-link"
              onClick={(e) => scrollToSection(e, "about")}
            >
              About Us
            </a>
            <a
              href="#services"
              className="navbar__menu-link"
              onClick={(e) => scrollToSection(e, "services")}
            >
              Services
            </a>
            {/* <a href="#stories" className="navbar__menu-link">
              Stories
            </a> */}
          </div>

          <div className="navigation" aria-label="Navigation menu">
            <input
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              type="checkbox"
              className="navigation__checkbox"
              id="navi__toggle"
              aria-label="Toggle navigation"
            />
            <label
              htmlFor="navi__toggle"
              className="navigation__btn"
              aria-controls="navigationMenu"
              aria-label="Toggle navigation menu"
            >
              <span className="navigation__icon">&nbsp;</span>
            </label>

            <nav
              className="navigation__nav"
              id="navigationMenu"
              aria-label="Main navigation"
            >
              <ul
                className="navigation__list"
                aria-label="Main navigation links"
              >
                <li className="navigation__item">
                  <a
                    href="#about"
                    onClick={(e) => {
                      scrollToSection(e, "about");
                      setIsChecked(false);
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li className="navigation__item">
                  <a
                    href="#services"
                    onClick={(e) => {
                      scrollToSection(e, "services");
                      setIsChecked(false);
                    }}
                  >
                    Services
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Logo in center */}
          <div className="navbar__logo">
            <a href="#home">
              <img src={Logo} alt="Focuz Habitat" />
            </a>
          </div>

          {/* Book now button */}
          <div>
            <a
              href="#contact"
              className="navbar__book-button"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Book now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
