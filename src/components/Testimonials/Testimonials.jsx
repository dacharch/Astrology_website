import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/system';

const TestimonialsContainer = styled(Box)(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  color: '#333',
  backgroundColor: '#f9f9f9',
  padding: '60px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  maxWidth: '400px',
  margin: '20px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  textAlign: 'center',
}));

const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
  width: '80px',
  height: '80px',
  margin: '0 auto',
  marginBottom: '16px',
}));



const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Richa Anurdha',
      image: 'images/1.jpeg',
      message: 'This is a great service! Highly recommend it to anyone looking for quality and reliability.',
    },
    {
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/80',
      message: 'Fantastic experience! The team was professional and exceeded all expectations.',
    },
    {
      name: 'Michael Johnson',
      image: 'https://via.placeholder.com/80',
      message: 'I loved working with this company. They truly care about their customers.',
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
              <Typography variant="h6" gutterBottom>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
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
