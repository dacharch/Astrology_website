import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'white', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Box shadow for separation
        zIndex: 10 // Ensure the header is on top of other content
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left side: Phone number and email */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Phone Icon and number */}
          <IconButton sx={{ color: '#333', fontSize: '30px' }}>
            <PhoneIcon />
          </IconButton>
          <Typography variant="body1" sx={{ color: '#333', marginLeft: '8px' }}>
            +1 (234) 567-890
          </Typography>

          {/* Email Icon and email */}
          <IconButton sx={{ color: '#333', fontSize: '30px', marginLeft: '20px' }}>
            <EmailIcon />
          </IconButton>
          <Typography variant="body1" sx={{ color: '#333', marginLeft: '8px' }}>
            contact@example.com
          </Typography>
        </Box>

        {/* Right side: Social Media icons */}
        <Box>
          <IconButton sx={{ marginLeft: '10px', color: '#1877F2', fontSize: '30px' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ marginLeft: '10px', color: '#1DA1F2', fontSize: '30px' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ marginLeft: '10px', color: '#E4405F', fontSize: '30px' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ marginLeft: '10px', color: '#0077B5', fontSize: '30px' }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
