import React, { useEffect, useRef, useState } from 'react';

const images = [
  'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg',
  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D',
  'https://media.istockphoto.com/id/517374252/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=mC7RfqWnNBEkmfbem-cHjd7O10XbiZ0SCfJuIZkmfKg=',
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
          transition: isAnimating ? 'transform 0.8s ease-in-out' : 'none',
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
