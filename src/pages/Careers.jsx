// src/pages/Careers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Careers.css';

const Careers = () => {
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

  return (
    <motion.div
      className="careers-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="careers-content">
        <motion.h1 className="careers-title" variants={itemVariants}>
          Careers at ADNX
        </motion.h1>
        <motion.p className="careers-subtitle" variants={itemVariants}>
          Join our team and help shape the future of luxury fashion.
        </motion.p>

        {/* Company Overview */}
        <motion.section className="careers-section" variants={itemVariants}>
          <h2>About ADNX</h2>
          <p>
            At ADNX, we’re passionate about delivering exceptional dresses that empower confidence and style. Our team is a blend of creative minds, fashion enthusiasts, and dedicated professionals working together to redefine online shopping. We’re looking for talented individuals to join us on this exciting journey.
          </p>
        </motion.section>

        {/* Job Listings */}
        <motion.section className="careers-section" variants={itemVariants}>
          <h2>Open Positions</h2>
          <div className="job-listings">
            <div className="job-card">
              <h3>Fashion Designer</h3>
              <p><strong>Location:</strong> Style City, SC (Hybrid)</p>
              <p><strong>Description:</strong> Design innovative dress collections that align with ADNX’s luxury aesthetic.</p>
              <motion.button
                className="apply-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </div>
            <div className="job-card">
              <h3>E-commerce Specialist</h3>
              <p><strong>Location:</strong> Remote</p>
              <p><strong>Description:</strong> Optimize our online store, manage product listings, and enhance customer experience.</p>
              <motion.button
                className="apply-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </div>
            <div className="job-card">
              <h3>Customer Support Lead</h3>
              <p><strong>Location:</strong> Style City, SC (On-site)</p>
              <p><strong>Description:</strong> Lead our support team to deliver exceptional service to ADNX customers.</p>
              <motion.button
                className="apply-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section className="careers-cta" variants={itemVariants}>
          <h2>Ready to Join Us?</h2>
          <p>
            If you don’t see a role that fits but believe you’d be a great addition to ADNX, send us your resume and a cover letter!
          </p>
          <Link to="/contact" className="contact-btn">Contact Us</Link>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Careers;