import React from 'react';
import { motion } from 'framer-motion';
import products from '../data/products';
import '../styles/ProductList.css';

const ProductList = ({ addToCart }) => {
  return (
    <motion.div
      className="product-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="product-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span>${product.price.toFixed(2)}</span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductList;