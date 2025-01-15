import React from 'react';
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  return (
    <IconButton
      href="https://wa.me/919560111902"  // Replace with your WhatsApp number
      target="_blank"
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366', // WhatsApp color
        '&:hover': {
          backgroundColor: '#128C7E', // Hover color
        },
        borderRadius: '50%',
        padding: '15px', // Increased padding to make the icon appear bigger
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <WhatsAppIcon sx={{ color: 'white', fontSize: '40px' }} /> {/* Increased font size */}
    </IconButton>
  );
};

export default WhatsAppButton;
