// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundSlider from './components/BackgroundSlider';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import NewArrivals from './components/NewArrivals';
import CustomerReviews from './components/CustomerReviews';
import Promotions from './components/Promotions';
import TrustSignals from './components/TrustSignals';
import NewsletterSignup from './components/NewsletterSignup';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Careers from './pages/Careers';
import TermsOfService from './pages/TermsOfService';
import FAQ from './pages/FAQ';
import ShippingInfo from './pages/ShippingInfo';
import ReturnsExchanges from './pages/ReturnsExchanges';
import SummerCollection from './pages/SummerCollection'; // New import
import EveningGowns from './pages/EveningGowns'; // New import
import CasualWear from './pages/CasualWear'; // New import
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (index) => {
    const item = cart[index];
    if (item.quantity > 1) {
      setCart(
        cart.map((cartItem, i) =>
          i === index ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
    } else {
      setCart(cart.filter((_, i) => i !== index));
    }
  };

  return (
    <Router>
      <div className="app">
        <Navbar cart={cart} />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <BackgroundSlider />
                  <ProductList addToCart={addToCart} />
                  <Promotions />
                  <NewArrivals addToCart={addToCart} />
                  <CustomerReviews />
                  <TrustSignals />
                  <NewsletterSignup />
                </>
              }
            />
            <Route path="/shop" element={<ProductList addToCart={addToCart} />} />
            <Route path="/shop/summer" element={<SummerCollection />} /> {/* New Route */}
            <Route path="/shop/evening" element={<EveningGowns />} /> {/* New Route */}
            <Route path="/shop/casual" element={<CasualWear />} /> {/* New Route */}
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart cart={cart} removeItem={removeItem} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/shipping" element={<ShippingInfo />} />
            <Route path="/returns" element={<ReturnsExchanges />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;