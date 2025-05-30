import React, { useState } from 'react';
import { motion } from 'framer-motion';
import newArrivals from '../data/newArrivals';
import '../styles/NewArrivals.css';

const NewArrivals = ({ addToCart }) => {
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (dress) => {
    addToCart(dress);
    setAddedId(dress.id);
    setTimeout(() => setAddedId(null), 1000);
  };

  return (
    <motion.section
      className="new-arrivals"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="title">New Arrivals</h2>
      <div className="dresses-container">
        {newArrivals.map((dress) => (
          <motion.div
            key={dress.id}
            className="dress-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={dress.image} alt={dress.name} className="dress-image" loading="lazy" />
            <div className="dress-info">
              <h3 className="dress-name">{dress.name}</h3>
              <p className="dress-price">${dress.price.toFixed(2)}</p>
              <button
                className={`btn-add-to-cart ${addedId === dress.id ? 'added' : ''}`}
                onClick={() => handleAddToCart(dress)}
                aria-label={`Add ${dress.name} to cart`}
              >
                {addedId === dress.id ? 'Added!' : 'Add to Cart'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default NewArrivals;