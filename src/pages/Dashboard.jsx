// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Dashboard.css';

const Dashboard = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="dashboard-wrapper">
      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section className="dashboard-hero" variants={itemVariants}>
          <h1 className="dashboard-title">Welcome to Your ADNX Journey</h1>
          <p className="dashboard-subtitle">
            Discover exclusive dresses, track your orders, and enjoy a personalized shopping experience.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/shop" className="shop-now-btn">Shop Now</Link>
          </motion.div>
        </motion.section>

        {/* Profile Teaser */}
        <motion.section className="dashboard-profile" variants={itemVariants}>
          <div className="profile-card">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/24/20/58/girl-738303_1280.jpg"
              alt="Profile placeholder"
              className="profile-img"
            />
            <div className="profile-info">
              <h2>Hello, [User Name]!</h2>
              <p>Email: example@adnx.com</p>
              <p>Member since: March 2025</p>
            </div>
          </div>
        </motion.section>

        {/* Featured Dresses */}
        <motion.section className="dashboard-featured" variants={itemVariants}>
          <h2 className="section-title">Featured Dresses</h2>
          <div className="dress-grid">
            <motion.div className="dress-card" whileHover={{ scale: 1.05 }}>
              <img
                src="https://cdn.pixabay.com/photo/2021/04/16/07/23/ao-dai-6182846_1280.jpg"
                alt="Dress 1"
                className="dress-img"
              />
              <p>Elegant Evening Gown</p>
              <span>$129.99</span>
            </motion.div>
            <motion.div className="dress-card" whileHover={{ scale: 1.05 }}>
              <img
                src="https://cdn.pixabay.com/photo/2020/10/22/06/09/woman-5674995_1280.jpg"
                alt="Dress 2"
                className="dress-img"
              />
              <p>Floral Summer Dress</p>
              <span>$89.99</span>
            </motion.div>
            <motion.div className="dress-card" whileHover={{ scale: 1.05 }}>
              <img
                src="https://cdn.pixabay.com/photo/2021/07/26/14/30/woman-6494461_1280.jpg"
                alt="Dress 3"
                className="dress-img"
              />
              <p>Classic Black Dress</p>
              <span>$99.99</span>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section className="dashboard-cta" variants={itemVariants}>
          <h2 className="cta-title">Ready to Explore More?</h2>
          <p>Check out your cart or browse our full collection!</p>
          <div className="cta-buttons">
            <Link to="/cart" className="cart-btn">View Cart</Link>
            <Link to="/" className="home-btn">Back to Home</Link>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Dashboard;