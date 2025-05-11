import React from "react";
import {
  Container,
  Box,
  Typography,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material"; // YouTube icon added
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        backgroundColor: "#002147",
        color: "white",
        py: { xs: 4, sm: 6 },
        px: 2,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={5}
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "flex-start" }}
        >
          {/* Contact Info */}
          {!isMobile && (
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
          <Box textAlign="center">
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1} alignItems="center">
              {["Home", "About", "Contact", "Podcast"].map((label) => (
                <Link
                  key={label}
                  to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
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
                </Link>
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
                {
                  icon: <YouTube />,
                  color: "#FF0000",
                  link: "https://www.youtube.com/@AcharyaReenaSharma05/videos", // Replace with your actual YouTube channel URL
                },
              ].map(({ icon, color, link }, idx) => (
                <IconButton
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color,
                    fontSize: { xs: 40, sm: 36 },
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
        <Box
          sx={{
            mt: 5,
            textAlign: "center",
            borderTop: "1px solid #444",
            pt: 3,
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "14px", color: "#aaa" }}>
            © 2025 Paramaksha Astrology | All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
