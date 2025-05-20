import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/system';

const primaryBlue = '#002147';
const darkGray = '#333';
const lightGray = '#f9f9f9';
const softOrange = '#ff8e53';

const TestimonialsContainer = styled(Box)({
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
});

const TestimonialCard = styled(Card)({
  height: '100%',
  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const TestimonialAvatar = styled(Avatar)({
  width: '80px',
  height: '80px',
  margin: '0 auto 16px',
  border: `3px solid ${softOrange}`,
});

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Richa Anirudh',
      image: 'images/richa.jpg',
      message:
        "Life had always felt unpredictable, and I was searching for clarity and guidance. Consulting with Reena Sharma completely changed my perspective. Her insights into my birth chart were not just accurate but deeply meaningful. She helped me understand my strengths, challenges, and even the timing of major life events. With her advice, I gained confidence in my decisions and found a sense of purpose I never thought possible.",
    },
    {
      name: 'Lakshya Sharma',
      image: 'images/lakshay.png',
      message:
        "For years, I found myself stuck in a toxic relationship that drained my energy and left me questioning my self-worth. Meeting Reena Sharma was a turning point in my life. Her astrological insights helped me recognize the patterns that were keeping me trapped and gave me the courage to break free. I’ve since rebuilt my confidence and am living a life filled with positivity.",
    },
    {
      name: 'Bharati Trivedi',
      image: 'images/archana.png',
      message:
        "I had the pleasure of consulting with Reena Sharma for my astrological needs, and I was truly amazed by her insights and accuracy. Her detailed analysis of my birth chart and the way she explained the planetary influences in my life made everything so clear. I walked away feeling empowered, informed, and ready to face what lies ahead.",
    },
    {
      name: 'Sanjeev Anjan',
      image: '',
      message:
        "Today, I interacted with smt Reena Sharma jee and I must say that way she listen and pointed out the problems was awesome. She is very wise knowledgeable and of course very kind and i also must say how patiently she listen my problem with accurate remeby was wonderful Full satisfied with her suggestions  and counselling. Thanks mam",
    },
    {
      name: 'Cueta',
      image: '',
      message:
        "Namaste, The talk with Reenaji was very good. She is very knowledgable straight forward honest and a pure soul. Her remedies are easy to do and her ways of putting things to place are truely wise. You can feel her utmost desire to help and guide people in the right way so that  life gets easier and smooth to live. I am extermely thankful, grateful,grateful  and blessed to connect  with a guide as Reenaji Stay abudant god bless always",
    },
    {
      name: 'Amrita',
      image: '',
      message:
        'I wanted to take a moment to thank you sincerely for the insightful and empowering astrology and consultation. Your guidances has provided me with valuable clarity and a deeper understanding of myself and my path. I truly appreciate the time and care you took to answer my questions, and the wisdom you shared has been incredibily helpful. Thank you once again for you support and for sharing your expertise with me. It has been a rewarding experience , and I feel more aligned and confident moving forward.',
    },
    {
      name: 'Shilpi Singh',
      image: '',
      message:
        'I recently had a consultation with MS Reena Sharma and I watned to share my experience. from the moment the session began. I felt at ease with her warm and professional demeanor. Ms Reena was very insightful and provided a detailed analysis and provided a detailed analysis based on my birth chart. She was able to address my questions and concerns in a way that felt genuine and personalized. What stood out to me was her ability to provide clarity and persepective on various aspects of my life, including career, relationships, health, etc. The advice given was practical and thought-provoking and I left the session feeling more empowered to make informed decisions moving forwar.',
    },
    {
      name: 'Vishvang thaker',
      image: '',
      message:
        'This is vishvant thaker. I have consulted Reena ji. Her predictions and reading the chart is very accurate. I was given and appointment within  one week for WhatsApp call and share ensure to answer call of questions in details. I am very much satisfied and will recommend to everyone whom I know.',
    },
    {
      name:'Layla Patel',
      image:'',
      message:'The birt chart reading with Reena ji was a truly enlightening experience. She has a remarkable ability to explain complex astrological concepts in a clear and understandable way. I was impressed by the depth of her knowledge and her intuitive insights into my personaility and life path. The reading provided me with a deeper understanding of myself and my potential. Reenaji is not only a skilled astrologer but also a compassionate and supportive guide. She gave her time sufficiently to my satisfaction. I have already started with remedies she has recommended, which are easily doable remedies. I wholeheartedly recommend her services. lots of love and light.'
    }
  ];

  return (
    <TestimonialsContainer>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: primaryBlue }}>
        What Our Customers Say
      </Typography>

      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <TestimonialCard>
              <CardContent sx={{ padding: '24px' }}>
                {testimonial.image && (
                  <TestimonialAvatar src={testimonial.image} alt={testimonial.name} />
                )}
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: primaryBlue }}>
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: darkGray,
                    lineHeight: 1.6,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {testimonial.message}
                </Typography>
              </CardContent>
            </TestimonialCard>
          </Grid>
        ))}
      </Grid>
    </TestimonialsContainer>
  );
};

export default TestimonialsPage;
