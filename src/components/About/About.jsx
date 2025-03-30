import React from 'react';
import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';

const AboutPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          position: 'relative',
          maxWidth: '900px',
          width: '100%',
          padding: '40px',
          borderRadius: '15px',
          backgroundColor: '#fff',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
          textAlign: 'left',
        }}
      >
        {/* Responsive Image */}
        <Box
          component="img"
          src="/images/aboutimage.jpg"
          alt="Reena Sharma"
          sx={{
            position: isSmallScreen ? 'relative' : 'absolute',
            top: isSmallScreen ? '0' : '20px',
            right: isSmallScreen ? 'auto' : '20px',
            marginBottom: isSmallScreen ? '20px' : '0',
            width: isSmallScreen ? '100%' : '350px',
            height: isSmallScreen ? 'auto' : '300px',
            objectFit: 'cover',
            borderRadius: '10px',
            border: '3px solid #000',
            boxShadow: '0px 4px 10px rgba(17, 13, 13, 0.1)',
          }}
        />

        {/* Text Content */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', mb: 2, textAlign: isSmallScreen ? 'center' : 'left' }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
          <strong>Namashkar All,</strong>
          <br />
          I am sure as humans, we are always curious to know <br/> about the people we interact with. So, here I am, sharing my <br/> journey into this mystic world.
          <br />
          As a child, my endless curiosity about **"Why's"** and **"How's"** <br/>led me to explore the language of the stars. <br/>I discovered that **"Stars illuminate the paths we walk."**
          <br />
          I started reading Astrology books as a hobby while <br/> pursuing my **Bachelor’s in Psychology** and <br/> **Master’s in English**. Then, **Vedic Astrology** called me to its <br/> depths at **Bhartiya Vidya Bhavan**, where <br/> I studied under my Guru, <strong>Shri K. N. Rao Ji</strong>, completing **Jyotish Alankar** and **Jyotish Acharya**.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 3, mb: 1, color: '#333', textAlign: isSmallScreen ? 'center' : 'left' }}>
          My Mission
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
          My goal is to bring **Clarity, Insight, and Empowerment** through the **cosmic language of Astrology**.
          <br />
          As a **Vedic Astrologer, Vastu Consultant, Numerologist, Lal Kitaab Expert,** and **Life Coach** with **20+ years of experience**, I blend ancient wisdom with a modern perspective to guide individuals through life’s complexities.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 3, mb: 1, color: '#333', textAlign: isSmallScreen ? 'center' : 'left' }}>
          What I Offer
        </Typography>
        <Typography component="ul" sx={{ lineHeight: '1.6', color: '#555', paddingLeft: isSmallScreen ? '20px' : '40px' }}>
          <li>**Natal Horoscope Readings**</li>
          <li>**Dynamic Astrology Analysis**</li>
          <li>**Predictive Astrology**</li>
          <li>**Compatibility Analysis**</li>
          <li>**Energy Balancing**</li>
          <li>**Remedies & More…**</li>
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 3, mb: 1, color: '#333', textAlign: isSmallScreen ? 'center' : 'left' }}>
          Join Me on This Journey
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
          Visit **<a href="https://www.rsvastrology.com" target="_blank" style={{ color: '#0073e6', textDecoration: 'none' }}>www.rsvastrology.com</a>**, where we guide you on your path. My goal is to provide a **supportive space** where wisdom and inspiration lead to transformation.
          <br />
          I believe **I am one of God's chosen mediums**, helping people **align their Karma** and uncover their **life’s purpose**.
        </Typography>
      </Paper>
    </Box>
  );
};

export default AboutPage;
