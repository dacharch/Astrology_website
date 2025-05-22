import React from "react";
import { Box, Typography, Link } from "@mui/material";

const PodcastHome = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        marginTop: "30px",
        marginBottom: "30px",
        marginX: "auto",
        maxWidth: "1200px",
      }}
    >
      <Typography sx={{ fontSize: "25px", fontWeight: "bold", marginBottom: "20px",color:'#002147' }}>
        Podcast
      </Typography>

      {/* Video Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 2, // Spacing between items
          padding: "10px",
        }}
      >
        <iframe
          width="100%"
          height="250"
        
          src="https://www.youtube.com/embed/EE1kKWQBYWA"
          title="2025 में कुंभ, मकर और  मीन राशि पर क्या पड़ेगा असर? जानें बड़े बदलाव और उपाय! Part - 4 #astrology"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/Ng8aEEMG_Zs"
          title="2025 में सिंह, कन्या और कर्क राशि पर क्या पड़ेगा असर? जानें बड़े बदलाव और उपाय! Part -2  #astrology"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/_kNcdBg8yWY"
          title="2025 Aur Number 9: Rashiyon Par Hone Wale Prabhav Ko Samjhiye! #astrology"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/K0cb9fjjzCU"
          title="2025 में मेष, मिथुन और वृषभ राशि पर क्या पड़ेगा असर? जानें बड़े बदलाव और उपाय! | Part -1 |#astrology"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Box>

      {/* Explore All Videos Button */}
      <Link
        href="https://www.youtube.com/@AcharyaReenaSharma05/videos"
        target="_blank"
        sx={{
          marginTop: "30px",
          padding: "12px 30px",
          marginRight:'15px',
        
          color: "#fff",
          fontSize: "18px",
          borderRadius: "25px",
          "&:hover": {
            backgroundColor: "#303f9f",
          },
          textDecoration: "none",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s, box-shadow 0.3s",
          display: "inline-block", 
          backgroundColor: '#001533' // Proper block for alignment
        }}
      >
        View YouTube Channel
      </Link>

      <Link
        href="https://www.instagram.com/paramaksha/"
        target="_blank"
        sx={{
          marginTop: "30px",
          padding: "12px 30px",
        
          color: "#fff",
          fontSize: "18px",
          borderRadius: "25px",
          "&:hover": {
            backgroundColor: "#303f9f",
          },
          textDecoration: "none",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s, box-shadow 0.3s",
          display: "inline-block", 
          backgroundColor: '#001533' // Proper block for alignment
        }}
      >
        View Instagram Page
      </Link>
    </Box>
  );
};

export default PodcastHome;
