import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from '../../Header/Header';

const VarshikRashiFal = () => {
  
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
          Varshik Rashi Fal
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
              backgroundImage: 'url(/images/varshikrashifal.jpg)', // Update with correct path
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
             Varshik Rashifal provides insights into your career, relationships, health, and finances based on planetary movements. It serves as a roadmap for the year ahead, helping you understand the opportunities and challenges that await you
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
           By analyzing planetary transits, dashas, and yogas in your horoscope, this yearly prediction offers a clear vision of how different aspects of your life will unfold. Whether you are looking for professional growth, stability in relationships, or better health, Varshik Rashifal provides valuable guidance to make informed decisions.
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
           Each zodiac sign experiences unique shifts influenced by celestial alignments. Understanding these influences helps you plan ahead, take advantage of favorable periods, and implement effective remedies to overcome obstacles.
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
           Prepare yourself for the year ahead with expert astrological insights and personalized solutions for a successful and fulfilling journey!
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
            onClick={handleWhatsAppRedirect}
          >
            Get Started Here
          </Button>
        </Box>
      </Box>


    </>

  );
};

export default VarshikRashiFal;
