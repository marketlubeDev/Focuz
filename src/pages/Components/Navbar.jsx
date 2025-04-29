import React, { useState } from "react";
import Logo from "../../assets/img42.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (path) => {
    setIsChecked(false);
    navigate(path);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "services" } });
    } else {
      scrollToSection(e, "services");
    }
    setIsChecked(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__content">
          {/* Left side menu items */}
          <div className="navbar__menu">
            {/* <a
              href="#about"
              className="navbar__menu-link"
              onClick={(e) => scrollToSection(e, "about")}
            >
              About Us
            </a> */}

            <Link
              to="/about"
              className="navbar__menu-link"
              onClick={() => handleNavigation("/about")}
            >
              About Us
            </Link>
            <a
              href="#services"
              className="navbar__menu-link"
              onClick={handleServicesClick}
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
                  <Link to="/about" onClick={() => handleNavigation("/about")}>
                    About Us
                  </Link>
                </li>
                <li className="navigation__item">
                  <a href="#services" onClick={handleServicesClick}>
                    Services
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Logo in center */}
          <div className="navbar__logo">
            <Link to="/">
              <img src={Logo} alt="Focuz Habitat" />
            </Link>
          </div>

          {/* Book now button */}
          <div>
            <a
              href="https://wa.me/c/918592011120"
              className="navbar__book-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
