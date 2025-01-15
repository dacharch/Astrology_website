import React from 'react';
import { Box, IconButton, Typography, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      {/* Social Media Section */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: '15px' }}
      >
        {/* Instagram Icon */}
        <IconButton
          sx={{
            color: '#E1306C', // Instagram real color
            '&:hover': {
              background: 'none', // No background on hover
              color: '#E1306C', // Keep Instagram's color on hover
            },
          }}
          href="https://www.instagram.com/paramaksha/"
          target="_blank"
          aria-label="Instagram"
        >
          <InstagramIcon fontSize="large" />
        </IconButton>

        {/* YouTube Icon */}
        <IconButton
          sx={{
            color: '#FF0000', // YouTube Red color
            '&:hover': {
              background: 'none', // No background on hover
              color: '#FF0000', // Keep YouTube red color on hover
            },
          }}
          href="https://www.youtube.com/@AcharyaReenaSharma05"
          target="_blank"
          aria-label="YouTube"
        >
          <YouTubeIcon fontSize="large" />
        </IconButton>
      </Stack>

      {/* Footer Bottom Section with Right Aligned Phone Number and Centered Copyright */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: '0 20px',
          marginTop: '20px',
          flexWrap: 'wrap', // Allow wrapping on smaller screens
          position: 'relative',
        }}
      >
        {/* Footer Copyright in the Center */}
        <Typography
          sx={{
            fontSize: '14px',
            textAlign: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '5px',
            marginBottom: '5px',
            width: '100%', // Ensure it stretches across full width
          }}
        >
          &copy; 2025 Astrology with Reena Sharma. All Rights Reserved.
        </Typography>

       

   
        
      </Stack>
    </Box>
  );
};

export default Footer;
