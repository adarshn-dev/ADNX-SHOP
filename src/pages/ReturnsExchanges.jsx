// src/pages/ReturnsExchanges.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ReturnsExchanges.css';

const ReturnsExchanges = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="returns-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="returns-content">
        <h1 className="returns-title">Returns & Exchanges</h1>
        <p className="returns-subtitle">Our policy to ensure you love your ADNX purchase.</p>

        <section className="returns-section">
          <h2>Return Policy</h2>
          <p>
            We accept returns within 30 days of delivery. Items must be unused, in original packaging, and in the same condition as received. To initiate a return:
          </p>
          <ul>
            <li>Email <a href="mailto:support@adnx.com">support@adnx.com</a> with your order number.</li>
            <li>Pack the item securely and include the original receipt.</li>
            <li>Ship it back to: ADNX Returns, 123 Fashion Lane, Style City, SC 45678.</li>
          </ul>
          <p>Refunds are processed within 7-10 business days of receiving the return.</p>
        </section>

        <section className="returns-section">
          <h2>Exchange Policy</h2>
          <p>
            Want a different size or style? Exchanges are free within 30 days. Contact us at <a href="mailto:support@adnx.com">support@adnx.com</a>, and we’ll guide you through the process.
          </p>
        </section>

        <section className="returns-section">
          <h2>Non-Returnable Items</h2>
          <p>Custom orders, final sale items, and gift cards are not eligible for return or exchange.</p>
        </section>

        <section className="returns-section">
          <h2>Shipping Costs</h2>
          <p>Customers are responsible for return shipping costs unless the item was defective or incorrect.</p>
        </section>

        <section className="returns-section">
          <h2>Need Help?</h2>
          <p>Check our <Link to="/faq">FAQ</Link> or <Link to="/contact">Contact Us</Link> for assistance.</p>
        </section>
      </div>
    </motion.div>
  );
};

export default ReturnsExchanges;