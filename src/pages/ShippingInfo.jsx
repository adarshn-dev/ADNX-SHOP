// src/pages/ShippingInfo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ShippingInfo.css';

const ShippingInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="shipping-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="shipping-content">
        <h1 className="shipping-title">Shipping Information</h1>
        <p className="shipping-subtitle">Everything you need to know about getting your ADNX dresses delivered.</p>

        <section className="shipping-section">
          <h2>Shipping Options</h2>
          <ul>
            <li><strong>Standard Shipping:</strong> 5-7 business days - $5.99 (Free on orders over $100)</li>
            <li><strong>Express Shipping:</strong> 2-3 business days - $15.99</li>
            <li><strong>Overnight Shipping:</strong> 1 business day - $29.99</li>
          </ul>
        </section>

        <section className="shipping-section">
          <h2>Shipping Locations</h2>
          <p>We currently ship within the United States. International shipping is coming soon—stay tuned!</p>
        </section>

        <section className="shipping-section">
          <h2>Processing Time</h2>
          <p>Orders are processed within 1-2 business days. You’ll receive a confirmation email once your order ships, including a tracking number.</p>
        </section>

        <section className="shipping-section">
          <h2>Lost or Delayed Shipments</h2>
          <p>
            If your order hasn’t arrived within the estimated time, contact us at <a href="mailto:support@adnx.com">support@adnx.com</a> with your order number, and we’ll assist you promptly.
          </p>
        </section>

        <section className="shipping-section">
          <h2>Questions?</h2>
          <p>Visit our <Link to="/faq">FAQ</Link> or <Link to="/contact">Contact Us</Link> for more help.</p>
        </section>
      </div>
    </motion.div>
  );
};

export default ShippingInfo;