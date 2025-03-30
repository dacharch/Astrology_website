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

  const menuItems = ["Home", "About", "Services", "Blog", "Contact"];

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
        {/* Left Side: Logo & Brand Name */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Logo */}
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

          {/* Brand Name & Titles */}
          <Box sx={{ ml: "10px", display: "flex", flexDirection: "column" }}>
            {/* Larger Brand Name */}
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "700",
                fontSize: "30px", // Bigger text
                color: "#C08D5D",
                textTransform: "capitalize",
                letterSpacing: "1px",
              }}
            >
              Paramaksha Astrology
            </Typography>

            {/* Smaller Coach Titles */}
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "11px", // Smaller text
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

        {/* Center: Navigation Menu (Desktop) */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
            {menuItems.map((item) => (
              <Typography
                key={item}
                variant="body1"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: "600",
                  fontSize: "18px",
                  cursor: "pointer",
                  color: "#333",
                  "&:hover": { color: "#C08D5D" },
                }}
              >
                {item}
              </Typography>
            ))}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C08D5D",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "18px",
                fontWeight: "700",
                color: "white",
                padding: "8px 20px",
                textTransform: "none",
                borderRadius: "25px", // Rounded button
                "&:hover": { backgroundColor: "#A76F47" },
              }}
            >
              Consult Now
            </Button>
          </Box>
        )}

        {/* Right Side: Mobile Menu with Items & Button */}
        {isMobile && (
          <Box>
            <IconButton onClick={handleMenuOpen} sx={{ color: "#333" }}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              {menuItems.map((item) => (
                <MenuItem key={item} onClick={handleMenuClose}>
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    {item}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#C08D5D",
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "25px", // Rounded button
                    "&:hover": { backgroundColor: "#A76F47" },
                  }}
                >
                  Consult Now
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
