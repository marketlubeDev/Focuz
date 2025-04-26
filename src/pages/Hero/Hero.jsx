import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://res.cloudinary.com/dznxxalrb/image/upload/v1745664552/asdfghjk_kyz0kf.jpg",
  "https://res.cloudinary.com/dznxxalrb/image/upload/v1745664552/asdfghj_xnh5ca.jpg",
  "https://res.cloudinary.com/dznxxalrb/image/upload/v1745664552/sdfghjk_sb9lg5.jpg",
  "https://res.cloudinary.com/dznxxalrb/image/upload/v1745664552/wertyuiop_aoq83f.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === images.length) {
      // When we reach the cloned slide
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(0);
      }, 800); // Wait till transition finishes
    } else {
      setIsAnimating(true);
    }
  }, [currentIndex, images.length]);

  return (
    <div className="hero-slider">
      <div
        className="hero-slider__track"
        ref={trackRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? "transform 0.8s ease-in-out" : "none",
        }}
      >
        {images.map((img, index) => (
          <div key={index} className="hero-slider__slide">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {/* Clone first slide at end */}
        <div className="hero-slider__slide">
          <img src={images[0]} alt="Slide 1 clone" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
