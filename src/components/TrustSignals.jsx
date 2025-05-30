import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCcVisa, FaCcMastercard, FaPaypal, FaLock } from 'react-icons/fa';

const TrustContainer = styled(motion.div).attrs({
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
  margin-bottom: 20px;
`;

const PaymentIconsWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Icon = styled.div`
  color: #555;
  transition: color 0.3s ease;
  svg {
    width: 32px;
    height: 32px;
  }
  &:hover {
    color: #f36f6f;
  }
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #444;
  max-width: 600px;
  margin: 10px auto;
`;

const PaymentIcon = ({ IconComponent, label }) => (
  <Icon aria-label={label}>
    <IconComponent />
  </Icon>
);

const TrustSignals = () => {
  return (
    <TrustContainer>
      <Title>Shop with Confidence</Title>
      <PaymentIconsWrapper>
        <PaymentIcon IconComponent={FaCcVisa} label="Visa payment accepted" />
        <PaymentIcon IconComponent={FaCcMastercard} label="Mastercard payment accepted" />
        <PaymentIcon IconComponent={FaPaypal} label="PayPal payment accepted" />
        <PaymentIcon IconComponent={FaLock} label="Secure SSL encryption" />
      </PaymentIconsWrapper>
      <InfoText>
        Secure payments with PayPal, Visa, Mastercard, and more. All transactions are protected with SSL encryption.
      </InfoText>
      <InfoText>
        Easy returns and exchanges within 30 days. Contact us if you're not satisfied.
      </InfoText>
    </TrustContainer>
  );
};

export default TrustSignals;