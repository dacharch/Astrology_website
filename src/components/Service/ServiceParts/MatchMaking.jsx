import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MatchMaking = () => {

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919560111902";
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Box
      sx={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: { xs: '20px', sm: '40px' },
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#002147', mb: 4 }}>
        Match Making Astrology
      </Typography>

      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: 4,
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: 3,
          width: '100%',
          maxWidth: '800px',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.15)',
          }
        }}
      >
        <Box
          component="img"
          src="/images/singlequestion.jpg"
          alt="Match Making"
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            objectFit: 'cover',
            mb: 2,
            border: '4px solid #fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}
        />
        <Typography variant="h6" sx={{ color: '#002147', fontWeight: 600, mb: 2 }}>
          Match Making
        </Typography>
        <Typography variant="body2" sx={{ color: '#444', mb: 4 }}>
          Find compatibility and harmony in your relationships with expert astrological matchmaking. Our unique approach helps you understand your cosmic compatibility based on your birth charts and planetary positions.
        </Typography>

        <Typography variant="body2" sx={{ color: '#444', mb: 4 }}>
          Matchmaking astrology is based on the concept of **Janam Kundali** (birth chart) and **Guna Milan** (matching the 36 gunas). By analyzing the placement of planets, their aspects, and their impact on both individuals' charts, we can determine whether a relationship will be harmonious and fulfilling.
        </Typography>

        <Typography variant="body2" sx={{ color: '#444', mb: 4 }}>
          This service provides a comprehensive analysis of compatibility in key areas such as love, communication, health, and career. Whether you're seeking a life partner or simply want to understand your relationship better, our astrology experts are here to provide you with insightful guidance.
        </Typography>

        <Button
          onClick={handleWhatsAppRedirect}
          variant="contained"
          sx={{
            backgroundColor: '#002147',
            borderRadius: '30px',
            paddingX: 3,
            paddingY: 1,
            '&:hover': {
              backgroundColor: '#001533',
            },
            minWidth: '200px',
            textAlign: 'center',
          }}
        >
          Get Started Here
        </Button>
      </Box>
    </Box>
  );
};

export default MatchMaking;
