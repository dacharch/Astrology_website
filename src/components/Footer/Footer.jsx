import React from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000', color: 'white', padding: '40px 0' }}>
      <Container>
        <Box 
          display="flex" 
          flexDirection={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between" 
          alignItems="flex-start" 
          gap={4}
        >
          {/* Left Section: Contact Information */}
          <Box flex={1}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              <strong>Phone:</strong> +91 9560111902
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              <strong>Email:</strong> paramakshaastrology@gmail.com
            </Typography>
          </Box>

          {/* Middle Section: Navigation Links */}
          <Box flex={1}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Typography variant="body1">
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
                Home
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>
                About
              </a>
            </Typography>
            <Typography variant="body1">
              <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                Contact
              </a>
            </Typography>
          </Box>

          {/* Right Section: Social Media */}
          <Box flex={1} textAlign="center">
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Follow Us
            </Typography>
            <Box display="flex" justifyContent="center" gap={2}>
              <IconButton href="https://www.facebook.com/people/Paramaksha-Astrology/100076400913764/" target="_blank">
                <Facebook sx={{ color: '#1877F2' }} />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank">
                <Twitter sx={{ color: '#1DA1F2' }} />
              </IconButton>
              <IconButton href="https://www.instagram.com/paramaksha/" target="_blank">
                <Instagram sx={{ color: '#E4405F' }} />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/acharya-reena-sharma-abb50a269/" target="_blank">
                <LinkedIn sx={{ color: '#0077B5' }} />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Copyright Section */}
        <Box sx={{ padding: '20px 0', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
            © 2025 Your Company | All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
