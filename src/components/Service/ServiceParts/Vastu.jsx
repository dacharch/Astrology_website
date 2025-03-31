import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from '../../Header/Header';

const TarotCardPage = () => {
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
          padding: '40px',
          backgroundColor: '#f9f9f9',
          minHeight: '100vh',
        }}
      >
        <Typography
          variant="h4"
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
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            maxWidth: '800px',
            minWidth: '850px',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              backgroundImage: 'url(/images/vastu.jpeg)', // Update with correct path
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
            }}
          >
           Everything is varying energies
           ...surround yourself with happy ones
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: '1.8',
              color: '#555',
              maxWidth: '600px',
              marginBottom: '20px',
              marginX: 'auto',  // Ensures it aligns centrally within the box
            }}
          >
           Have happy and harmonious energies settle upon your habitat. Let bliss and growth prevail through Vastu.

Supportive energy is a pre requisite for balance and prosperity in any plot of space and time. Twining the wisdom of Astrology with the prudence of Vastu Shastra, you can orient your home or work space about elevating forces which support life optimally.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: '1.8',
              color: '#555',
              maxWidth: '600px',
              marginBottom: '20px',
              marginX: 'auto',  // Ensures it aligns centrally within the box
            }}
          >
            Resorting to a personalised Astro Vastu session, you may optimize your surroundings with energies which synthesise good health, loving relationships, success, peace and prosperity.
          </Typography>

          <Button
            variant="contained"
            sx={{
              
              color: 'white',
              padding: '10px 20px',
              borderRadius: '10px',
               backgroundColor: '#001533',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            Get Started Here
          </Button>
        </Box>
      </Box>


    </>

  );
};

export default TarotCardPage;
