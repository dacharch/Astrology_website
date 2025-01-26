import { Box,Link, Typography } from '@mui/material';
import React from 'react';
import './Header.css';

const Hero = () => {
  return (
    <Box
      component="section"
      position="relative"
      sx={{
        height: '100vh',
        overflow: 'hidden', // Ensures no content overflows the section
      }}
    >
      {/* Background Image */}
      <Box
        component="div"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        <img
          className="background_image"
          src="" // Ensure this path points to your image
          alt="Beautiful view of space with planets"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(50%)', // Darkens image for text visibility
          }}
        />
      </Box>

      {/* Content Container */}
      <Box
        className="content"
        position="absolute"
        sx={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: { xs: '90%', md: '70%' }, 
          padding: { xs: '0 10px', md: '0 20px' },
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '32px', sm: '48px', md: '64px' },
            lineHeight: 1.2,
            background: 'linear-gradient(45deg,rgb(240, 239, 239), #ff8e53)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',

          }}
        >
          
        </Typography>

        <Typography
          component="p"
          sx={{
            fontWeight: 'medium',
            fontSize: { xs: '14px', sm: '18px', md: '20px' },
            background: 'linear-gradient(45deg,rgb(240, 233, 227),rgb(231, 223, 218))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '30px',
            lineHeight: 1.6,
            fontWeight:'bold'
          }}
        >
          
        </Typography>

        {/* Enquiry Button */}
        
      </Box>
    </Box>
  );
};

export default Hero;
