import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = ({ cart }) => {
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0, 0);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-logo">
        <img
          src="https://www.pngall.com/wp-content/uploads/13/Louis-Vuitton-Logo-PNG-Images.png"
          alt="ADNX logo"
          className="navbar-icon"
        />
        <h1>ADNX</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart ({itemCount})</Link>
        <Link to="/login">Login</Link> {/* Added */}
        <Link to="/signup">Sign Up</Link> {/* Added */}
      </div>
    </motion.nav>
  );
};

export default Navbar;