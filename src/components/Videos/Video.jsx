import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

const Videos = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // A soft shadow
        padding: "20px", // Padding inside the section to prevent content from touching the edges
        borderRadius: "10px", // Rounded corners for a softer look
        backgroundColor: "#fff", // White background for separation
        marginTop: "30px", // Space above the section
        marginBottom: "30px", // Space below the section
        marginX: "auto", // Centering the section horizontally
        maxWidth: "1200px", // Limiting the width to prevent the shadow from being too wide
      }}
    >
      <Typography sx={{ fontSize: "25px", fontWeight: "bold", marginBottom: "20px" }}>
        Videos
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ padding: "10px" }}>
        <Grid item xs={12} sm={6} md={3}>
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/XmX4VLO83-k"
            title="2025 में कुंभ, मकर और  मीन राशि पर क्या पड़ेगा असर? जानें बड़े बदलाव और उपाय! Part - 4 #astrology"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/LP7LanavZCM"
            title="2025 में सिंह, कन्या और कर्क राशि पर क्या पड़ेगा असर? जानें बड़े बदलाव और उपाय! Part -2  #astrology"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/4P26_p9dG4A"
            title="2025 Aur Number 9: Rashiyon Par Hone Wale Prabhav Ko Samjhiye! #astrology"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/32uMjO6wtgY"
            title="2025 में मेष, मिथुन और वृषभ राशि पर क्या पड़ेगा असर? जानें बड़े बदलाव और उपाय! | Part -1 |#astrology"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Grid>
      </Grid>

      {/* Explore All Videos Button */}
      <Link
        href="https://www.youtube.com/@AcharyaReenaSharma05/videos"
        target="_blank"
        sx={{
          marginTop: "30px",
          padding: "12px 30px", // Padding for the button
          backgroundColor: "#3f51b5", // Blue background
          color: "#fff", // White text color
          fontSize: "18px", // Text size
          borderRadius: "25px", // Rounded corners
          '&:hover': {
            backgroundColor: "#303f9f", // Darker blue on hover
          },
          textDecoration:'none',
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Small and visible shadow for the button
          transition: "background-color 0.3s, box-shadow 0.3s", // Smooth transition for both background and shadow
        }}
      >
        Explore All Videos
      </Link>
    </Box>
  );
};

export default Videos;
