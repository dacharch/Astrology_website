import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, useMediaQuery, useTheme, Menu, MenuItem } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'white', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        zIndex: 10,
        padding: isMobile ? '5px' : '10px',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        {/* Left side: Phone number and email */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <IconButton sx={{ color: '#333' }}>
            <PhoneIcon />
          </IconButton>
          {!isMobile && (
            <Typography variant="body1" sx={{ color: '#333', marginLeft: '8px' }}>
              +91 9560111902
            </Typography>
          )}

          <IconButton sx={{ color: '#333', marginLeft: isMobile ? '5px' : '20px' }}>
            <EmailIcon />
          </IconButton>
          {!isMobile && (
            <Typography variant="body1" sx={{ color: '#333', marginLeft: '8px' }}>
              paramakshaastrology@gmail.com
            </Typography>
          )}
        </Box>

        {/* Right side: Social Media Hamburger Menu */}
        {isMobile ? (
          <Box>
            <IconButton onClick={handleMenuOpen} sx={{ color: '#333' }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                  <FacebookIcon sx={{ color: '#1877F2', marginRight: '10px' }} /> Facebook
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                  <TwitterIcon sx={{ color: '#1DA1F2', marginRight: '10px' }} /> Twitter
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                  <InstagramIcon sx={{ color: '#E4405F', marginRight: '10px' }} /> Instagram
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                  <LinkedInIcon sx={{ color: '#0077B5', marginRight: '10px' }} /> LinkedIn
                </a>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box>
            <IconButton 
              sx={{ 
                marginLeft: '5px', 
                color: '#1877F2', 
                backgroundColor: '#1877F2', 
                borderRadius: '50%', 
                padding: '6px', 
                width: '35px', 
                height: '35px',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.1s ease',
                  backgroundColor: '#1877F2', // Ensure background color remains the same
                }
              }}
            >
              <a href="https://www.facebook.com/people/Paramaksha-Astrology/100076400913764/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon sx={{ color: 'white', fontSize: '18px' }} />
              </a>
            </IconButton>
            
            <IconButton 
              sx={{ 
                marginLeft: '5px', 
                color: '#E4405F', 
                backgroundColor: '#E4405F', 
                borderRadius: '50%', 
                padding: '6px', 
                width: '35px', 
                height: '35px',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.1s ease',
                  backgroundColor: '#E4405F', // Ensure background color remains the same
                }
              }}
            >
              <a href="https://www.instagram.com/paramaksha/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ color: 'white', fontSize: '18px' }} />
              </a>
            </IconButton>
            <IconButton 
              sx={{ 
                marginLeft: '5px', 
                color: '#0077B5', 
                backgroundColor: '#0077B5', 
                borderRadius: '50%', 
                padding: '6px', 
                width: '35px', 
                height: '35px',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.1s ease',
                  backgroundColor: '#0077B5', // Ensure background color remains the same
                }
              }}
            >
              <a href="https://linkedin.com/in/acharya-reena-sharma-abb50a269" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ color: 'white', fontSize: '18px' }} />
              </a>
            </IconButton>
            <IconButton 
              sx={{ 
                marginLeft: '5px', 
                color: '#1DA1F2', 
                backgroundColor: '#1DA1F2', 
                borderRadius: '50%', 
                padding: '6px', 
                width: '35px', 
                height: '35px',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.1s ease',
                  backgroundColor: '#1DA1F2', // Ensure background color remains the same
                }
              }}
            >
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon sx={{ color: 'white', fontSize: '18px' }} />
              </a>
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
