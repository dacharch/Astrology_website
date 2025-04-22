import React from "react";
import { Container, Box, Typography, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();  // Ensure use of theme from Material-UI
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));  // Check if the screen size is mobile

  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        backgroundColor: "#002147",
        color: "white",
        py: { xs: 4, sm: 6 }, // Adjust padding for mobile
        px: 2,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={5}
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "flex-start" }} // Center items for mobile
        >
          {/* Contact Info */}
          {!isMobile && ( // Hide contact info on mobile
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Contact Us
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px", mb: 1 }}>
                <strong>Phone:</strong> +91 9560111902
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px" }}>
                <strong>Email:</strong> paramakshaastrology@gmail.com
              </Typography>
            </Box>
          )}

          {/* Navigation Links */}
          <Box textAlign={{ xs: "center", sm: "left" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {["Home", "About", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`/${label.toLowerCase()}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    position: "relative",
                    fontSize: "16px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFD700";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "white";
                  }}
                >
                  {label}
                </a>
              ))}
            </Stack>
          </Box>

          {/* Social Media */}
          <Box textAlign={{ xs: "center", sm: "right" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Follow Us
            </Typography>
            <Stack
              direction="row"
              justifyContent={{ xs: "center", sm: "flex-end" }}
              spacing={2}
            >
              {[
                {
                  icon: <Facebook />,
                  color: "#1877F2",
                  link: "https://www.facebook.com/people/Paramaksha-Astrology/100076400913764/",
                },
                {
                  icon: <Instagram />,
                  color: "#E4405F",
                  link: "https://www.instagram.com/paramaksha/",
                },
                {
                  icon: <LinkedIn />,
                  color: "#0077B5",
                  link: "https://www.linkedin.com/in/acharya-reena-sharma-abb50a269/",
                },
              ].map(({ icon, color, link }, idx) => (
                <IconButton
                  key={idx}
                  href={link}
                  target="_blank"
                  sx={{
                    color,
                    fontSize: 36,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.2)",
                      boxShadow: `0 4px 12px ${color}88`,
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Stack>

        {/* Copyright */}
        <Box sx={{ mt: 5, textAlign: "center", borderTop: "1px solid #444", pt: 3 }}>
          <Typography variant="body2" sx={{ fontSize: "14px", color: "#aaa" }}>
            © 2025 Paramaksha Astrology | All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
