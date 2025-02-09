import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';

export default function HeaderWithSidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 200 }}  // You can adjust the width as per your preference
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: 'Home', icon: <HomeIcon />, link: '/' },
          { text: 'Contact', icon: <ContactMailIcon />, link: '/contact' },
          { text: 'About', icon: <InfoIcon />, link: '/about' },
        ].map(({ text, icon, link }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={link}> {/* Use Link here */}
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Handle mouse movement
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientX < 50) {
        setOpen(true); // Open the drawer if the mouse is on the left side
      } else {
        setOpen(false); // Close the drawer when mouse moves away to the right or center
      }
    };

    // Add event listener to detect mouse position
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* The Left Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#fff', // Drawer background color
          },
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
}
