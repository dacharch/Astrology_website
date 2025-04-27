import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Header from '../../Header/Header';

const Vastu = () => {
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
          Astro Vastu Consultancy
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
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundImage: 'url(/images/vastu.jpeg)',
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
            Everything is varying energies... surround yourself with happy ones
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
            Have happy and harmonious energies settle upon your habitat. Let bliss and growth prevail through Vastu.
            <br /><br />
            Supportive energy is a pre-requisite for balance and prosperity in any plot of space and time. Twining the wisdom of Astrology with the prudence of Vastu Shastra, you can orient your home or workspace about elevating forces which support life optimally.
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
            Resorting to a personalised Astro Vastu session, you may optimize your surroundings with energies which synthesise good health, loving relationships, success, peace, and prosperity.
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

export default Vastu;
