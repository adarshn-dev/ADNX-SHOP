// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="footer-content">
        {/* Top Section: Tagline */}
        <div className="footer-top">
          <p className="footer-tagline">Discover luxury fashion at ADNX – Your style, our passion.</p>
        </div>

        {/* Horizontal Line */}
        <hr className="footer-divider" />

        {/* Middle Section: Logo and Links */}
        <div className="footer-middle">
          <div className="footer-logo">
            <img
              src="https://www.pngall.com/wp-content/uploads/13/Louis-Vuitton-Logo-PNG-Images.png"
              alt="ADNX logo"
              className="footer-icon"
            />
            <h1>ADNX</h1>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Shop</h3>
              <Link to="/shop">All Dresses</Link>
              <Link to="/shop/summer">Summer Collection</Link>
              <Link to="/shop/evening">Evening Gowns</Link>
              <Link to="/shop/casual">Casual Wear</Link>
            </div>
            <div className="footer-column">
              <h3>Customer Service</h3>
              <Link to="/contact">Contact Us</Link>
              <Link to="/returns">Returns & Exchanges</Link>
              <Link to="/shipping">Shipping Info</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="footer-column">
              <h3>About ADNX</h3>
              <Link to="/about">Our Story</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/privacy-policy">Privacy Policy</Link> {/* Updated to match route */}
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="footer-divider" />

        {/* Bottom Section: Socials and Copyright */}
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path fill="#fff" d="M22 12c0-5.5-4.5-10-10-10s-10 4.5-10 10c0 5 3.6 9.2 8.4 9.9v-7h-2.5v-2.9h2.5v-2.2c0-3.3 2.2-5.1 5.3-5.1 1.5 0 2.8.1 3.2.2v3.5h-2.2c-1.7 0-2.1.8-2.1 2v2.6h4.2l-.5 2.9h-3.7v7c4.8-.7 8.4-4.9 8.4-9.9z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path fill="#fff" d="M22.46 6.004c-.81.36-1.68.61-2.59.72 1.25-.74 2.2-1.9 2.65-3.29-.76.44-1.6.77-2.48.95-.72-.76-1.74-1.23-2.88-1.23-2.18 0-3.95 1.77-3.95 3.95 0 .31.04.62.1.91-3.28-.16-6.19-1.73-8.13-4.1-.34.58-.53 1.25-.53 1.96 0 1.35.69 2.53 1.72 3.23-.64-.02-1.26-.2-1.8-.49v.05c0 1.89 1.34 3.47 3.13 3.82-.33.09-.68.14-1.03.14-.25 0-.5-.02-.74-.07.5 1.56 1.94 2.7 3.65 2.73-1.34 1.05-3.02 1.67-4.83 1.67-.31 0-.62-.02-.93-.07 1.72 1.1 3.77 1.75 5.97 1.75 7.16 0 11.09-5.94 11.09-11.09 0-.17 0-.34-.02-.51.76-.55 1.42-1.24 1.96-2.02z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path fill="#fff" d="M22.23 0h-20.46c-1.03 0-1.87.84-1.87 1.87v20.27c0 1.03.84 1.87 1.87 1.87h20.46c1.03 0 1.87-.84 1.87-1.87v-20.27c0-1.03-.84-1.87-1.87-1.87zm-14.75 20.45h-3.93v-12.8h3.93v12.8zm-1.97-14.67c-1.26 0-2.28-1.02-2.28-2.28s1.02-2.28 2.28-2.28 2.28 1.02 2.28 2.28-1.02 2.28-2.28 2.28zm15.62 14.67h-3.93v-6.3c0-1.5-.03-3.44-2.09-3.44-2.1 0-2.42 1.64-2.42 3.34v6.4h-3.93v-12.8h3.78v1.7h.05c.52-.98 1.79-2.02 3.68-2.02 3.93 0 4.65 2.58 4.65 5.93v7.2z"/>
              </svg>
            </a>
          </div>
          <p>© {new Date().getFullYear()} ADNX LIMITED EDITION. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;