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
            <IconButton sx={{ marginLeft: '5px', color: '#1877F2' }}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
            </IconButton>
            
            <IconButton sx={{ marginLeft: '5px', color: '#E4405F' }}>
              <a href="https://www.instagram.com/paramaksha/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
            </IconButton>
            <IconButton sx={{ marginLeft: '5px', color: '#0077B5' }}>
              <a href="https://linkedin.com/in/acharya-reena-sharma-abb50a269" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
