import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import "./Header.css"

const Hero = () => {
  return (
    <Box component="section" position="relative" sx={{ height: "100vh" }}>
      {/* Background Image */}
      <Box component="div" sx={{ position: "absolute", width: "100%", height: "100%" }}>
        <img
          className="background_image"
          src='/images/planet.jpg' // Update this to your desired high-quality hero image
          alt="Hero"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(50%)', // Optionally darken the image for better text visibility
          }}
        />
      </Box>

      {/* Content Container */}
      <Box className="content" position="absolute" sx={{
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        textAlign: "center", width: "100%", padding: "0 20px"
      }}>
        <Typography sx={{
          color: "transparent",
          fontWeight: "bold",
          fontSize: { xs: "30px", sm: "40px", md: "50px" },
          background: "linear-gradient(45deg, #ff6f00, #ff8e53)", // Add a beautiful gradient color
          WebkitBackgroundClip: "text", // This is the key property to apply the gradient to text
          backgroundClip: "text"
        }}>
          Astro with Reena Sharma
        </Typography>

        <Typography component="p" sx={{
          color: "transparent",
          fontWeight: 'bold',
          fontSize: { xs: "14px", sm: "18px", md: "20px" },
          marginTop: "10px",
          background: "linear-gradient(45deg, #ff6f00, #ff8e53)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text"
        }}>
          The stars above hold the map to your soul <br /> unlock their secrets and discover your true destiny.
        </Typography>

        {/* Enquiry Button with Linear Gradient */}
        <Button sx={{
          background: "linear-gradient(45deg, #ff6f00, #ff8e53)", // Gradient button
          color: "#fff", 
          borderRadius: "10px", 
          padding: "12px 25px", 
          marginTop: "20px",
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
          '&:hover': { 
            background: "linear-gradient(45deg, #ff8e53, #ff6f00)" // Reverse gradient on hover
          }
        }}>
          Enquiry
        </Button>
      </Box>
    </Box>
  )
}

export default Hero;
