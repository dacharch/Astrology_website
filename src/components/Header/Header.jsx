import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import { Link, Menu, MenuItem } from '@mui/material';
import "./Header.css";

const navItems = ['Home',  'About', 'Contact us'];

function DrawerAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleMenuToggle = (event) => {
    setAnchorEl(event.currentTarget);
    setMobileOpen(!mobileOpen);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMobileOpen(false);
  };

  return (
    <Box position="relative" sx={{ display: 'flex' }}>

      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#fff", color: '#000' }}>
        <Toolbar>
          {/* Box for Image and Text alignment */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
           <Link href="/">
           <img className="image-container" src="/images/astrology.png" alt="Logo" style={{ width: '40px', height: '40px' }} />
           </Link>
          
            <span style={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'Montserrat, sans-serif' }}>
              Astrology by Reena Sharma
            </span>
          </Box>

          {/* Spacer to push the menu icon to the right */}
          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={handleMenuToggle}
            sx={{ ml: 2, display: { sm: 'none' } }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link sx={{ textDecoration: 'none', color: '#000', marginRight: 2, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }} href="/">
              Home
            </Link>
            <Link sx={{ textDecoration: 'none', color: '#000', marginRight: 2, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }} href="/about">
              About
            </Link>
            <Link sx={{ textDecoration: 'none', color: '#000', marginRight: 2, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }} href="/contact">
              Contact us
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        {navItems.map((item) => (
          <MenuItem key={item} onClick={handleCloseMenu}>
            <Link sx={{ textDecoration: 'none', color: '#000', fontFamily: 'Montserrat, sans-serif' }} href={`/${item.toLowerCase().replace(' ', '')}`}>
              {item}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default DrawerAppBar;
