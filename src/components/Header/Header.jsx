import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCall = () => {
    window.location.href = "tel:+919560111902"; // Opens dialer
  };

  const handleEmail = () => {
    window.location.href = "mailto:paramakshaastrology@gmail.com"; // Opens email client
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        zIndex: 10,
        padding: "10px 20px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo and Brand Name */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="/images/logo.png"
            alt="Logo"
            sx={{
              height: "70px",
              width: "auto",
              cursor: "pointer",
            }}
          />
          <Box sx={{ ml: "10px", display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "700",
                fontSize: "30px",
                color: "#C08D5D",
                textTransform: "capitalize",
                letterSpacing: "1px",
              }}
            >
              Paramaksha Astrology
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "11px",
                fontWeight: "700",
                color: "#777",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                paddingLeft: 2,
              }}
            >
              Astro Coach • Vastu Coach • Life Coach
            </Typography>
          </Box>
        </Box>

        {/* Navigation Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                component={RouterLink}
                to={item.path}
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#333",
                  textDecoration: "none",
                  "&:hover": { color: "#C08D5D" },
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Consult Now Button with Contact Options */}
            <Box>
              <Button
                variant="contained"
                onClick={handleMenuOpen}
                endIcon={<ArrowDropDownIcon />}
                sx={{
                  backgroundColor: "#C08D5D",
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "white",
                  padding: "8px 20px",
                  textTransform: "none",
                  borderRadius: "25px",
                  "&:hover": { backgroundColor: "#A76F47" },
                }}
              >
                Consult Now
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleCall}>
                  <PhoneIcon sx={{ marginRight: 1, color: "#C08D5D" }} />
                  Call: +91 9560111902
                </MenuItem>
                <MenuItem onClick={handleEmail}>
                  <EmailIcon sx={{ marginRight: 1, color: "#C08D5D" }} />
                  Email: paramakshaastrology@gmail.com
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <Box>
            <IconButton onClick={handleMenuOpen} sx={{ color: "#333" }}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              {menuItems.map((item) => (
                <MenuItem key={item.label} onClick={handleMenuClose}>
                  <Link
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      fontFamily: "Roboto",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#333",
                      textDecoration: "none",
                      "&:hover": { color: "#C08D5D" },
                    }}
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              ))}

              {/* Direct Call and Email on Mobile */}
              <MenuItem onClick={handleCall}>
                <PhoneIcon sx={{ marginRight: 1, color: "#C08D5D" }} />
                Call Now
              </MenuItem>
              <MenuItem onClick={handleEmail}>
                <EmailIcon sx={{ marginRight: 1, color: "#C08D5D" }} />
                Email Us
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
