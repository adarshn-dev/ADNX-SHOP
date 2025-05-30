import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Cart.css';

const Cart = ({ cart, removeItem }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <motion.div
      className="cart"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <motion.li
              key={item.id}
              className="cart-item"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="item-details">
                <span>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</span>
              </div>
              <button className="remove-button" onClick={() => removeItem(index)}>
                Remove
              </button>
            </motion.li>
          ))}
        </ul>
      )}
      <div className="total">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
    </motion.div>
  );
};

export default Cart;