// src/pages/SummerCollection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CategoryPage.css';

const SummerCollection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const dresses = [
    { name: 'Sunny Floral Dress', price: '$79.99', image: 'https://cdn.pixabay.com/photo/2018/02/06/16/26/folk-3135134_1280.jpg' },
    { name: 'Breezy White Maxi', price: '$89.99', image: 'https://cdn.pixabay.com/photo/2018/02/09/14/04/portrait-3141651_1280.jpg' },
    { name: 'Tropical Shift Dress', price: '$69.99', image: 'https://cdn.pixabay.com/photo/2019/12/20/03/29/woman-4707545_1280.jpg' },
  ];

  return (
    <motion.div
      className="category-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="category-content">
        <motion.h1 className="category-title" variants={itemVariants}>
          Summer Collection
        </motion.h1>
        <motion.p className="category-subtitle" variants={itemVariants}>
          Light, vibrant dresses perfect for warm days and sunny vibes.
        </motion.p>

        <motion.div className="dress-grid" variants={containerVariants}>
          {dresses.map((dress, index) => (
            <motion.div key={index} className="dress-card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <img src={dress.image} alt={dress.name} className="dress-img" />
              <h3>{dress.name}</h3>
              <p>{dress.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SummerCollection;