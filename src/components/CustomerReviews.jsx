import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import reviews from '../data/reviews';

const ReviewContainer = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #f36f6f;
  margin-bottom: 30px;
`;

const ReviewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const ReviewCard = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex: 1 1 300px;
  max-width: 350px;
  text-align: center;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ReviewerName = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 5px;
`;

const Rating = styled.div`
  margin-bottom: 10px;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  position: relative;
  padding: 0 20px;

  &:before {
    content: '“';
    position: absolute;
    left: 0;
    top: 0;
    font-size: 2rem;
    color: #f36f6f;
  }

  &:after {
    content: '”';
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 2rem;
    color: #f36f6f;
  }
`;

const CustomerReviews = () => {
  return (
    <ReviewContainer>
      <Title>What Our Customers Are Saying</Title>
      <ReviewsWrapper>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Avatar src={review.avatar} alt={review.name} loading="lazy" />
            <ReviewerName>{review.name}</ReviewerName>
            <Rating aria-label={`${review.rating} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < review.rating ? '#FFD700' : '#ddd'} />
              ))}
            </Rating>
            <ReviewText>{review.reviewText}</ReviewText>
          </ReviewCard>
        ))}
      </ReviewsWrapper>
    </ReviewContainer>
  );
};

export default CustomerReviews;