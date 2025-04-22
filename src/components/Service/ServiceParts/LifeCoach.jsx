import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from '../../Header/Header';

const TarotCardPage = () => {

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "91956011902"; 
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };
  
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
          Life Style Coach
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
              backgroundImage: 'url(/images/life.jpg)', // Update with correct path
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
            Air is all around us, but in order to feel it we need to switch the fan on and sit under it. Likewise, the understanding and wisdom lies inside us, but we need someone who can help in the journey inwards and find the treasure of innate power and knowledge. Allow yourself the guidance which helps you claim your might and take control of your endeavours towards success.
           
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
            Each coaching session is targeted towards having you blossom in full bloom - on both personal and professional front.
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
           Aiming to foster holistic well being, I wish to share with you the experience I have gathered over two decades. And as we relay the spark of knowledge, before we know, the mental space is already Illuminated.

          </Typography>

          <Button
            variant="contained"
            sx={{
              
              color: 'white',
              padding: '10px 20px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#333',
              },
              backgroundColor: '#001533' 
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
