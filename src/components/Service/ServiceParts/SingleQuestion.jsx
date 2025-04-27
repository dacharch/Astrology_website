import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Header from '../../Header/Header';

const SingleQuestion = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919560111902";
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: isSmallScreen ? '20px 16px' : '40px',
          backgroundColor: '#f9f9f9',
          minHeight: '100vh',
        }}
      >
        <Typography
          variant={isSmallScreen ? 'h5' : 'h4'}
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#333',
          }}
        >
          Single Question Prediction
        </Typography>

        <Box
          sx={{
            backgroundColor: '#fff',
            padding: isSmallScreen ? '20px' : '30px',
            borderRadius: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            width: '100%',
            maxWidth: '850px',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: isSmallScreen ? '120px' : '150px',
              height: isSmallScreen ? '120px' : '150px',
              borderRadius: '50%',
              backgroundImage: 'url(/images/singlequestion.jpg)', // Update with correct path
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              marginBottom: '20px',
              marginX: 'auto',
            }}
          />

          <Typography
            sx={{
              marginBottom: '20px',
              color: '#333',
              maxWidth: '600px',
              marginX: 'auto',
              fontSize: isSmallScreen ? '1rem' : '1.1rem',
            }}
          >
            Do you have a specific question about your career, relationships, finances, health, or any important life decision? Our Single Question Prediction service provides precise astrological insights to help you make the right choices.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: '1.8',
              color: '#555',
              maxWidth: '600px',
              marginBottom: '20px',
              marginX: 'auto',
              fontSize: isSmallScreen ? '0.95rem' : '1rem',
            }}
          >
            Using your birth chart and planetary positions, our expert astrologers analyze the influences affecting your situation. Whether it's about job changes, marriage prospects, financial stability, or personal challenges, you receive a focused and accurate response tailored to your unique circumstances.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: '1.8',
              color: '#555',
              maxWidth: '600px',
              marginBottom: '20px',
              marginX: 'auto',
              fontSize: isSmallScreen ? '0.95rem' : '1rem',
            }}
          >
            Along with your prediction, we provide effective astrological remedies to help you navigate challenges and attract positive results.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: '1.8',
              color: '#555',
              maxWidth: '600px',
              marginBottom: '20px',
              marginX: 'auto',
              fontSize: isSmallScreen ? '0.95rem' : '1rem',
            }}
          >
            Ask your question today and gain the clarity and confidence you need for a better future!
          </Typography>

          <Button
            variant="contained"
            sx={{
              color: 'white',
              padding: isSmallScreen ? '8px 16px' : '10px 20px',
              borderRadius: '10px',
              backgroundColor: '#001533',
              '&:hover': {
                backgroundColor: '#333',
              },
              mt: 2,
            }}
            onClick={handleWhatsAppRedirect}
          >
            Get Started Here
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SingleQuestion;
