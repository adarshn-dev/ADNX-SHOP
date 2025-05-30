// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="privacy-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="privacy-content">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-subtitle">Last Updated: March 02, 2025</p>

        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to ADNX, your premier online dress shop. We are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or make a purchase.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, billing/shipping address, and payment details when you create an account or place an order.</li>
            <li><strong>Non-Personal Information:</strong> Browsing data, IP address, device type, and preferences via cookies and analytics tools.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <p>Your information is used to:</p>
          <ul>
            <li>Process and fulfill your orders.</li>
            <li>Communicate with you about your account, orders, or promotions.</li>
            <li>Improve our website, products, and services.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share it with:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> Payment processors, shipping companies, or analytics providers who assist us in operating ADNX.</li>
            <li><strong>Legal Authorities:</strong> If required by law or to protect our rights.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. Cookies and Tracking</h2>
          <p>
            We use cookies to enhance your experience, track usage, and serve personalized content. You can manage cookie preferences via your browser settings.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to:
          </p>
          <ul>
            <li>Access, correct, or delete your personal data.</li>
            <li>Opt out of marketing communications.</li>
            <li>Request data portability.</li>
          </ul>
          <p>Contact us at <a href="mailto:support@adnx.com">support@adnx.com</a> to exercise these rights.</p>
        </section>

        <section className="privacy-section">
          <h2>7. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your data, but no system is completely secure. Please safeguard your account credentials.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted here with an updated “Last Updated” date.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Contact Us</h2>
          <p>
            For questions or concerns about this Privacy Policy, reach out to us at:
          </p>
          <p>Email: <a href="mailto:support@adnx.com">support@adnx.com</a></p>
          <p>Address: ADNX Headquarters, 123 Fashion Lane, Style City, SC 45678</p>
        </section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;