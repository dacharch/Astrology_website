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
  Snackbar,
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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCopy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setSnackbarMsg(`${label} copied to clipboard`);
      setSnackbarOpen(true);
    } catch (err) {
      setSnackbarMsg("Failed to copy");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const scrollToSection = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Follow Us", path: "#footer" },
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
              Parmaksha Astrology
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "13px",
                fontWeight: "bold",
                color: "#777",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                paddingLeft: 2,
              }}
            >
              By Acharya Reena Sharma
            </Typography>
          </Box>
        </Box>

        {/* Navigation Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                component={item.path.startsWith("#") ? "button" : RouterLink}
                onClick={() => {
                  if (item.path.startsWith("#")) {
                    scrollToSection(item.path);
                  }
                }}
                to={item.path.startsWith("#") ? undefined : item.path}
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#333",
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  "&:hover": { color: "#C08D5D" },
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Consult Now Button */}
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
                <MenuItem onClick={() => handleCopy("+919560111902", "Phone number")}>
                  <PhoneIcon sx={{ marginRight: 1, color: "#C08D5D" }} />
                  +91 9560111902
                </MenuItem>
                <MenuItem onClick={() => handleCopy("paramakshaastrology@gmail.com", "Email address")}>
                  <EmailIcon sx={{ marginRight: 1, color: "#C08D5D" }} />
                  paramakshaastrology@gmail.com
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
                <MenuItem
                  key={item.label}
                  onClick={() => {
                    handleMenuClose();
                    if (item.path.startsWith("#")) {
                      scrollToSection(item.path);
                    }
                  }}
                >
                  <Link
                    component={item.path.startsWith("#") ? "button" : RouterLink}
                    to={item.path.startsWith("#") ? undefined : item.path}
                    sx={{
                      fontFamily: "Roboto",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#333",
                      textDecoration: "none",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      "&:hover": { color: "#C08D5D" },
                    }}
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              ))}

              <MenuItem onClick={() => handleCopy("+919560111902", "Phone number")}>
                <PhoneIcon sx={{ marginRight: 1, color: "#C08D5D" }} />
                +91 9560111902
              </MenuItem>
              <MenuItem onClick={() => handleCopy("paramakshaastrology@gmail.com", "Email address")}>
                <EmailIcon sx={{ marginRight: 1, color: "#C08D5D" }} />
                paramakshaastrology@gmail.com
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message={snackbarMsg}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </AppBar>
  );
};

export default Header;
