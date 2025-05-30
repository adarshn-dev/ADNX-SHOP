// src/pages/FAQ.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // For internal links
import { motion } from 'framer-motion';
import '../styles/FAQ.css';

const FAQ = () => {
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
    <div>
      {/* Test heading outside motion.div to ensure base rendering */}
      {/* <h1>Test FAQ Page</h1> */} {/* Remove or comment this out once confirmed working */}
      <motion.div
        className="faq-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="faq-content">
          <motion.h1 className="faq-title" variants={itemVariants}>
            Frequently Asked Questions
          </motion.h1>
          <motion.p className="faq-subtitle" variants={itemVariants}>
            Find answers to common questions about shopping with ADNX.
          </motion.p>

          {/* FAQ Sections */}
          <motion.section className="faq-section" variants={itemVariants}>
            <h2>Q: How do I place an order?</h2>
            <p>
              A: Browse our <Link to="/shop">Shop</Link> page, select your dress, choose your size, and click “Add to Cart.” Proceed to checkout, enter your shipping and payment details, and confirm your purchase.
            </p>
          </motion.section>

          <motion.section className="faq-section" variants={itemVariants}>
            <h2>Q: What payment methods do you accept?</h2>
            <p>
              A: We accept Visa, MasterCard, American Express, PayPal, and ADNX gift cards. All transactions are secure and encrypted.
            </p>
          </motion.section>

          <motion.section className="faq-section" variants={itemVariants}>
            <h2>Q: Can I change or cancel my order?</h2>
            <p>
              A: Yes, you can modify or cancel your order within 1 hour of placement. Email us at <a href="mailto:support@adnx.com">support@adnx.com</a> with your order number as soon as possible.
            </p>
          </motion.section>

          <motion.section className="faq-section" variants={itemVariants}>
            <h2>Q: How long does shipping take?</h2>
            <p>
              A: Shipping times vary by option: Standard (5-7 business days), Express (2-3 business days), or Overnight (1 business day). See our <Link to="/shipping">Shipping Info</Link> page for details.
            </p>
          </motion.section>

          <motion.section className="faq-section" variants={itemVariants}>
            <h2>Q: How do I track my order?</h2>
            <p>
              A: Once your order ships, you’ll receive a tracking number via email. Log in to your <Link to="/dashboard">Dashboard</Link> to check the status anytime.
            </p>
          </motion.section>

          <motion.section className="faq-section" variants={itemVariants}>
            <h2>Q: What is your return policy?</h2>
            <p>
              A: We accept returns within 30 days of delivery for unused items in original condition. Visit our <Link to="/returns">Returns & Exchanges</Link> page for instructions.
            </p>
          </motion.section>

          <motion.section className="faq-section" variants={itemVariants}>
            <h2>Q: Do you ship internationally?</h2>
            <p>
              A: Currently, we ship only within the United States. International shipping is in the works—stay tuned for updates!
            </p>
          </motion.section>

          <motion.section className="faq-section" variants={itemVariants}>
            <h2>Q: How do I care for my dress?</h2>
            <p>
              A: Care instructions are included with each dress. Generally, we recommend dry cleaning or gentle hand washing—check the label for specifics.
            </p>
          </motion.section>

          <motion.section className="faq-section" variants={itemVariants}>
            <h2>Q: Can I use multiple discounts on one order?</h2>
            <p>
              A: Only one discount code can be applied per order. Choose the best offer at checkout!
            </p>
          </motion.section>

          <motion.section className="faq-section" variants={itemVariants}>
            <h2>Q: What if I have more questions?</h2>
            <p>
              A: We’re here to help! Email us at <a href="mailto:support@adnx.com">support@adnx.com</a> or visit our <Link to="/contact">Contact Us</Link> page.
            </p>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;