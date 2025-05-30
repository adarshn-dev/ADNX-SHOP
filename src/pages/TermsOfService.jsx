// src/pages/TermsOfService.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/TermsOfService.css';

const TermsOfService = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="terms-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="terms-content">
        <h1 className="terms-title">Terms of Service</h1>
        <p className="terms-subtitle">Last Updated: March 02, 2025</p>
        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the ADNX website...</p>
          {/* ... rest of the content ... */}
        </section>
        {/* ... additional sections ... */}
      </div>
    </motion.div>
  );
};

export default TermsOfService;