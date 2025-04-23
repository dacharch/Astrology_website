import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Header from '../../Header/Header';

const TarotCardPage = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "91956011902";
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
          Face is the index of mind.
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
              backgroundImage: 'url(/images/face.jpeg)', // Update with correct path
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
            A sophisticated biometric, our face records our personal history, personality traits, preferences and the decision making style. The seventh cranial nerve links the brain to the face and through this connection, our face records our karma and other predispositions.
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
            The seventh cranial nerve links the brain to the face and through this connection, our face records our karma and other predispositions. The unique lines, markings, hues, our micro expressions and gestures can be read as our status (physical, mental, emotional and spiritual) report. This is the science of physiognomy which allows you to discover the unseen facets of your being that help you benefit of the potential that was so far hidden.
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
            By learning the main components of face, you can use this as a tool to understand the mental element of people which will help you strike win-win deals on your workfront. Striving to execute the belief that a lit candle can illuminate innumerable more, training entrepreneurs, ones in corporate arena and other structured organizations, it assures me that I am able to share my knowledge which surely will become handy at some point.
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
            I strongly advocate for having a hang of the basic principles of face reading as it would not only save time and energy about selecting one's team but also it would have reliable and accountable people surrounding you towards optimal results.
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

export default TarotCardPage;
