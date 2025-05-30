// src/pages/EveningGowns.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CategoryPage.css';

const EveningGowns = () => {
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
    { name: 'Elegant Black Gown', price: '$129.99', image: 'https://cdn.pixabay.com/photo/2016/06/16/16/17/girl-1461624_1280.jpg' },
    { name: 'Velvet Midnight Dress', price: '$149.99', image: 'https://cdn.pixabay.com/photo/2021/03/14/10/13/girl-6093779_1280.jpg' },
    { name: 'Satin Red Gown', price: '$139.99', image: 'https://cdn.pixabay.com/photo/2022/02/15/18/04/woman-7015406_1280.jpg' },
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
          Evening Gowns
        </motion.h1>
        <motion.p className="category-subtitle" variants={itemVariants}>
          Stunning dresses for unforgettable nights and special occasions.
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

export default EveningGowns;