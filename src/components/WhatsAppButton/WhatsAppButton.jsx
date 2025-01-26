import React from "react";
import { Box, Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {/* Curved Text */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="80"
        >
          {/* Define the curved path */}
          <path
            id="curvePath"
            d="M30,90 A70,70 0 1,1 170,90"
            fill="transparent"
          />
          {/* Text along the path */}
          <text fontSize="19" fill="#25D366" fontWeight="bold">
            <textPath
              href="#curvePath"
              startOffset="50%"
              textAnchor="middle"
            >
              Contact Us
            </textPath>
          </text>
        </svg>
      </Box> 

      {/* WhatsApp Icon Button */}
      <Fab
        color="success"
        aria-label="contact"
        href="https://wa.me/919560111902"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: "#25D366",
          "&:hover": {
            backgroundColor: "#1DA851",
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Box>
  );
};

export default WhatsAppButton;
