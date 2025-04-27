import React from 'react';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const primaryBlue = '#002147';
const darkGray = '#333';
const lightGray = '#f9f9f9';
const softOrange = '#ff8e53';

const TestimonialsContainer = styled(Box)(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  color: darkGray,
  backgroundColor: lightGray,
  padding: '60px 20px',
  display: 'flex',
  flexDirection: 'column',  
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center',
  gap: '40px',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: '40px 10px',
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  maxWidth: '400px',
  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  textAlign: 'center',
  flexShrink: 0, 
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
  width: '80px',
  height: '80px',
  margin: '0 auto',
  marginBottom: '16px',
  border: `3px solid ${softOrange}`,
}));

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Richa Anirudh',
      image: 'images/richa.jpg',
      message: "Life had always felt unpredictable, and I was searching for clarity and guidance. Consulting with Reena Sharma completely changed my perspective. Her insights into my birth chart were not just accurate but deeply meaningful. She helped me understand my strengths, challenges, and even the timing of major life events. With her advice, I gained confidence in my decisions and found a sense of purpose I never thought possible."
    },
    {
      name: 'Lakshya Sharma',
      image: 'images/lakshay.png',
      message: "For years, I found myself stuck in a toxic relationship that drained my energy and left me questioning my self-worth. Meeting Reena Sharma was a turning point in my life. Her astrological insights helped me recognize the patterns that were keeping me trapped and gave me the courage to break free."
    },
    {
      name: 'Bharati Trivedi',
      image: 'images/archana.png',
      message: "I had the pleasure of consulting with Reena Sharma for my astrological needs, and I was truly amazed by her insights and accuracy. Her detailed analysis of my birth chart and the way she explained the planetary influences in my life made everything so clear."
    },
    
    
  ];

  return (
    <TestimonialsContainer>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: primaryBlue }}>
        What Our Customers Say
      </Typography>

      <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <CardContent>
              <TestimonialAvatar src={testimonial.image} alt={testimonial.name} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' ,color:primaryBlue }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.6 }}>
                {testimonial.message}
              </Typography>
            </CardContent>
          </TestimonialCard>
        ))}
      </Box>
    </TestimonialsContainer>
  );
};

export default TestimonialsPage;
