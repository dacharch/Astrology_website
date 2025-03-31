import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from '../../Header/Header';

const CompleteKundli = () => {
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
          Complete Kundli
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
              backgroundImage: 'url(/images/completkundli.jpg)', // Update with correct path
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
            Discover the cosmic blueprint of your life with our Complete Kundli Service. From detailed birth chart analysis to career, marriage, health, and finance predictions,
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
           we provide deep insights based on Vedic astrology. Our service includes Kundli generation, Gun Milan (matchmaking), dosha analysis, dasha & transit effects, and powerful remedies like gemstones, mantras, and pujas.
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
          
          Whether you seek clarity on life’s path or solutions to challenges, our expert-driven Kundli service is your ultimate guide. Get your personalized Kundli today and unlock your true potential! ✨
          </Typography>

        
          

          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#333',
              },
              backgroundColor: '#001533' 
            }}
          >
            Get Started Here
          </Button>
        </Box>
      </Box>


    </>

  );
};

export default CompleteKundli;
