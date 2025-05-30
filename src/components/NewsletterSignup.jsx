import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsSubmitted(true);
    } else {
      alert('Please enter a valid email address!');
    }
  };

  return (
    <motion.div
      className="newsletter-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="newsletter-content">
        <h2 className="newsletter-heading">Stay Updated!</h2>
        <p className="newsletter-subheading">
          Sign up for exclusive deals, updates, and promotions.
        </p>
        {isSubmitted ? (
          <motion.div
            className="newsletter-thank-you"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p>Thank you for subscribing!</p>
            <button
              className="newsletter-reset-btn"
              onClick={() => {
                setIsSubmitted(false);
                setEmail('');
              }}
            >
              Subscribe again
            </button>
          </motion.div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default NewsletterSignup;