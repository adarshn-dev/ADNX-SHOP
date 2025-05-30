// src/pages/CasualWear.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CategoryPage.css';

const CasualWear = () => {
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
    { name: 'Denim Day Dress', price: '$59.99', image: 'https://cdn.pixabay.com/photo/2017/06/06/16/48/woman-2377742_1280.jpg' },
    { name: 'Cotton Striped Tee Dress', price: '$49.99', image: 'https://cdn.pixabay.com/photo/2021/11/25/12/48/woman-6823526_1280.jpg' },
    { name: 'Casual Linen Shift', price: '$69.99', image: 'https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617_1280.jpg' },
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
          Casual Wear
        </motion.h1>
        <motion.p className="category-subtitle" variants={itemVariants}>
          Effortless style for everyday comfort and chic looks.
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

export default CasualWear;