import React from 'react';
import { Container, Box, Typography, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#002147', color: 'white', py: 5 }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Contact Information */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              <strong>Phone:</strong> +91 9560111902
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              <strong>Email:</strong> paramakshaastrology@gmail.com
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Typography variant="body1">
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            </Typography>
            <Typography variant="body1">
              <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
            </Typography>
            <Typography variant="body1">
              <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'right' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Follow Us
            </Typography>
            <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-end' }} gap={2}>
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
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
            © 2025 Your Company | All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
