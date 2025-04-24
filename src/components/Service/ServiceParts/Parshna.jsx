import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Header from '../../Header/Header';

const Parshna = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "91956011902";
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  const handleGetStartedRedirect = () => {
    // You can redirect this to another page or a form section
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          Prashna Kundli
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
              backgroundImage: 'url(/images/prashna.jpg)',
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
            Don’t know your birth time or birth chart? No worries! Prashna Kundli is here to give you answers based on the moment you ask your question.
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
            This ancient Vedic astrology technique is perfect for urgent or confusing situations. Whether it's love, career, money, or personal matters—ask now and let the universe reveal its signs through the Prashna chart.
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
            Even without your full birth details, our astrologers analyze the planetary positions at the time of your question to give you a detailed and insightful answer.
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
            Ask now and receive a clear path forward with spiritual and practical remedies tailored for you.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', gap: 2, justifyContent: 'center', mt: 3 }}>
            <Button
              variant="contained"
              onClick={handleWhatsAppRedirect}
              sx={{
                color: 'white',
                padding: isSmallScreen ? '8px 16px' : '10px 20px',
                borderRadius: '10px',
                backgroundColor: '#001533',
                '&:hover': {
                  backgroundColor: '#333',
                },
              }}
            >
              Ask Your Question
            </Button>

            <Button
              variant="outlined"
              onClick={handleGetStartedRedirect}
              sx={{
                color: '#001533',
                borderColor: '#001533',
                padding: isSmallScreen ? '8px 16px' : '10px 20px',
                borderRadius: '10px',
                '&:hover': {
                  borderColor: '#333',
                  color: '#333',
                },
              }}
            >
              Get Started Soon
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Parshna;
