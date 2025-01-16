import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Stack } from '@mui/material';
import { styled } from '@mui/system';

const TestimonialsContainer = styled(Box)(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  color: '#333',
  backgroundColor: '#f9f9f9',
  padding: '60px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)', // Adjusted shadow to match service section
  borderRadius: '10px',
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center',
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  maxWidth: '400px',
  margin: '20px',
  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)', // Adjusted shadow to match service section
  borderRadius: '10px',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 15px 50px rgba(0, 0, 0, 0.15)', // Stronger shadow on hover
  },
}));

const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
  width: '80px',
  height: '80px',
  margin: '0 auto',
  marginBottom: '16px',
  border: '3px solid #ff8e53', // Border around the avatar to make it pop
}));

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Richa Anurdha',
      image: 'images/1.jpeg',
      message: "Life had always felt unpredictable, and I was searching for clarity and guidance. Consulting with Reena Sharma completely changed my perspective. Her insights into my birth chart were not just accurate but deeply meaningful. She helped me understand my strengths, challenges, and even the timing of major life events. With her advice, I gained confidence in my decisions and found a sense of purpose I never thought possible. Astrology with Reena Sharma is not just about predictions; it's about self-awareness and growth. I highly recommend her to anyone seeking guidance in life.'"
    },
    {
      name: 'Lakshya Sharma',
      image: 'images/2.png',
      message: "For years, I found myself stuck in a toxic relationship that drained my energy and left me questioning my self-worth. Meeting Reena Sharma was a turning point in my life. Her astrological insights helped me recognize the patterns that were keeping me trapped and gave me the courage to break free.Reena’s compassionate guidance not only brought me clarity but also helped me rediscover my inner strength. Today, I feel lighter, happier, and more aligned with my true self. I am incredibly grateful for her support during one of the most challenging phases of my life. She truly changed my perspective and gave me the confidence to embrace a brighter future.",
    },
    {
      name: 'Archana Chandra',
      image: 'images/3.png',
      message: "I had the pleasure of consulting with Reena Sharma for my astrological needs, and I was truly amazed by her insights and accuracy. Her detailed analysis of my birth chart and the way she explained the planetary influences in my life made everything so clear. She has a remarkable ability to connect with her clients and provide guidance that is not only practical but also deeply insightful. I left the session feeling more confident and aligned with my life's path. Highly recommend Reena for anyone looking for astrological guidance!"
    },
  ];

  return (
    <TestimonialsContainer>
      <Typography variant="h4" sx={{ marginBottom: '40px', fontWeight: 'bold' }}>
        What Our Customers Say
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <CardContent>
              <TestimonialAvatar src={testimonial.image} alt={testimonial.name} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.6 }}>
                {testimonial.message}
              </Typography>
            </CardContent>
          </TestimonialCard>
        ))}
      </Stack>
    </TestimonialsContainer>
  );
};

export default TestimonialsPage;
