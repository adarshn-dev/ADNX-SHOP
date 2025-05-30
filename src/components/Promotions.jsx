import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PromotionsContainer = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
})`
  background-color: #fff;
  padding: 40px;
  text-align: center;
  border-radius: 8px;
  margin: 30px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #f36f6f;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
`;

const Countdown = styled.div`
  font-size: 1.5rem;
  color: #f36f6f;
  font-weight: bold;
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: #f36f6f;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e45a5a;
  }
`;

const Promotions = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const endTime = new Date('2025-02-28T23:59:59');
    const now = new Date();
    const difference = endTime - now;
    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };
    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const { hours, minutes, seconds } = timeLeft;

  return (
    <PromotionsContainer>
      <Title>Limited-Time Offer!</Title>
      <Description>Get 20% off all dresses! Hurry, this offer won't last long!</Description>
      <Countdown aria-live="polite">
        {hours > 0 || minutes > 0 || seconds > 0
          ? `Offer ends in: ${hours}h ${minutes}m ${seconds}s`
          : 'Offer has ended!'}
      </Countdown>
      <Button to="/shop">Shop Now</Button>
    </PromotionsContainer>
  );
};

export default Promotions;