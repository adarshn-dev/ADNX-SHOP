import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="About ADNX"
    >
      <motion.img
        src="https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_1280.jpg"
        alt="ADNX fashion showcase"
        className="about-image"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <h2>About Us</h2>
      <div className="about-content">
        <p>
          Welcome to ADNX, where luxury and fashion come together to redefine elegance. Founded in 2025, our mission is to bring timeless style and unparalleled quality to every wardrobe.
        </p>
        <p>
          We offer a curated selection of high-end dresses, clothing, and accessories, designed to empower you with confidence and sophistication. From casual chic to evening glamour, ADNX has it all.
        </p>
      </div>
      <div className="about-footer">
        Luxury fashion, redefined.
      </div>
    </motion.div>
  );
};

export default About;