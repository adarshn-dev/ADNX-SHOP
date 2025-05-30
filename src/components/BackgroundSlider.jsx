import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/BackgroundSlider.css';

const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slides = [
    { image: 'https://cdn.pixabay.com/photo/2010/12/13/09/51/jeans-1751_1280.jpg', text: 'Elegant Bridal Dresses' },
    { image: 'https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_1280.jpg', text: 'Stunning Evening Gowns' },
    { image: 'https://cdn.pixabay.com/photo/2016/11/19/15/42/woman-1839955_1280.jpg', text: 'Casual Everyday Looks' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-slider" aria-live="polite">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}
      <div className="overlay" />
      <motion.h2
        className="slider-text"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {slides[currentImageIndex].text}
      </motion.h2>
    </div>
  );
};

export default BackgroundSlider;