import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Header from '../../Header/Header';

const BirthJournal = () => {
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
          Birth Journal 
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
              backgroundImage: 'url(/images/birth.jpeg)',
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
            Unlock the secrets of life's journey through an insightful analysis of your birth journal (kundli).
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
            The celestial bodies (planets and stars) affect your life at every step. Decoding their position and alignment at the time of birth will help you understand the underlying cause of your circumstances — both good and challenging. With profound insights, you decipher the narrative and motive of your life which helps you sail smooth.
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
            Astrology is about discovering your strengths which come from cosmic influences as you allow clarity upon your mind and direction towards your actions. This lets you make better and mindful decisions.
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
            In a personalised session, your horoscope is vividly studied and discussed, followed by an explanation of appropriate and effective remedies. You get to express your concerns and leave with a bagful of hope and faith.
          </Typography>

          <Button
            variant="contained"
            sx={{
              color: 'white',
              padding: isSmallScreen ? '8px 16px' : '10px 20px',
              borderRadius: '10px',
              backgroundColor: 'red',
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

export default BirthJournal;
