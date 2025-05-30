// pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css'; // Assuming your global styles are here

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could add API call to submit form data
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <h1 
        style={{ 
          textAlign: 'center', 
          marginBottom: '40px', 
          color: '#333',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        Contact ADNX Dress Shop
      </h1>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '40px', 
        justifyContent: 'center' 
      }}>
        {/* Contact Form */}
        <motion.div
          className="contact-form"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          style={{ 
            flex: '1', 
            minWidth: '300px', 
            background: '#fff',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          {submitted ? (
            <div style={{ 
              textAlign: 'center', 
              color: '#28a745',
              fontSize: '1.2em'
            }}>
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label 
                  htmlFor="name" 
                  style={{ display: 'block', marginBottom: '5px', color: '#666' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '1em'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label 
                  htmlFor="email" 
                  style={{ display: 'block', marginBottom: '5px', color: '#666' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '1em'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label 
                  htmlFor="message" 
                  style={{ display: 'block', marginBottom: '5px', color: '#666' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    minHeight: '100px',
                    fontSize: '1em'
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  background: '#ff6b6b',
                  color: 'white',
                  padding: '12px 30px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1.1em',
                  transition: 'background 0.3s'
                }}
                onMouseOver={(e) => e.target.style.background = '#ff8787'}
                onMouseOut={(e) => e.target.style.background = '#ff6b6b'}
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          style={{ 
            flex: '1', 
            minWidth: '300px', 
            padding: '30px'
          }}
        >
          <h2 style={{ color: '#333', marginBottom: '20px' }}>Get in Touch</h2>
          <p style={{ marginBottom: '15px', color: '#666' }}>
            Have questions about our dresses? We're here to help!
          </p>
          <div style={{ marginBottom: '15px' }}>
            <strong>Email:</strong> support@adnxshop.com
          </div>
          <div style={{ marginBottom: '15px' }}>
            <strong>Phone:</strong> +1 (555) 123-4567
          </div>
          <div style={{ marginBottom: '15px' }}>
            <strong>Address:</strong> 123 Fashion Street, Style City, FC 12345
          </div>
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ color: '#333', marginBottom: '10px' }}>Store Hours</h3>
            <p style={{ color: '#666' }}>Mon-Fri: 9 AM - 6 PM</p>
            <p style={{ color: '#666' }}>Sat: 10 AM - 4 PM</p>
            <p style={{ color: '#666' }}>Sun: Closed</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;