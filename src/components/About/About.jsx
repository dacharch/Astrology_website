import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const AboutPage = () => {
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
          display: 'flex',
          flexDirection: 'column', // Stack image and text vertically
          alignItems: 'center', // Center image horizontally
          maxWidth: '1200px',
          width: '100%',
          padding: '40px',
          borderRadius: '15px',
          overflow: 'hidden',
          backgroundColor: '#fff',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Centered Image at the top */}
        <Box
          component="img"
          src="/images/face.jpeg"
          alt="Reena Sharma"
          sx={{
            width: '150px', // Image size
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #fff',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px', // Space between image and text
          }}
        />

        {/* Text content starts below the image */}
        <Box
          sx={{
            textAlign: 'left',
            width: '100%', // Ensure text occupies full width
          }}
        >
          <Typography variant="body1" sx={{ lineHeight: '1.8', color: '#555' }}>
            <strong>Namashkar All,</strong>
            <br />
            <br />
            I am sure as humans, we are always curious to know about the people we interact with. 
            So, here I am, sharing my journey into this mystic world.
            <br />
            <br />
            As a child, I was always looking for answers to all the **"Why's"** and **"How's"**, 
            and that curiosity led me to explore the language of the stars. I discovered that 
            **"Stars illuminate the paths we walk."**
            <br />
            <br />
            I started reading Astrology books as a hobby while pursuing my **Bachelor’s in Psychology** 
            and **Master’s in English**. Then came a time when **Vedic Astrology** called me to explore 
            its depths at the world-renowned **Bhartiya Vidya Bhavan**, under the guidance of my Guru, 
            <strong>Shri K. N. Rao Ji</strong>. There, I completed my education in **Jyotish Alankar** 
            and **Jyotish Acharya**.
            <br />
            <br />
            Later, I further honed my skills through **Jyotish Research Classes** from **I.C.A.S**, 
            a well-known institution in the field of Astrology in India.
            <br />
            <br />
            <strong>Finally, I found "My Calling"…</strong>
            <br />
            This deep curiosity about understanding people and places led me to dive further into 
            this divine science. My innate **intuitive powers** helped me discover solutions to 
            many life problems.
            <br />
            <br />
            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2, mb: 1, color: '#333' }}>
              My Mission
            </Typography>
            My mission is to bring **Clarity, Insight, and Empowerment** to those seeking answers 
            through the **cosmic language of Astrology**.
            <br />
            <br />
            I am a dedicated **Vedic Astrologer, Vastu Consultant, Numerologist, Lal Kitaab Expert,** 
            and a **Life Coach** with **over 20 years of experience**. I combine ancient wisdom 
            with a modern approach to help individuals navigate life’s complexities.
            <br />
            <br />
            Whether you’re exploring **Career Options, Relationships, or Personal Growth**, Astrology 
            provides powerful tools for **self-discovery and transformation**.
            <br />
            <br />
            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2, mb: 1, color: '#333' }}>
              What I Offer
            </Typography>
            I am committed to providing **accurate and personalized insights** using various 
            Astrological Techniques, including:
            <ul>
              <li>**Natal Horoscope Readings**</li>
              <li>**Dynamic Astrology Analysis**</li>
              <li>**Predictive Astrology**</li>
              <li>**Compatibility Analysis**</li>
              <li>**Balancing Energies**</li>
              <li>**Patent Remedies & More…**</li>
            </ul>
            <br />
            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2, mb: 1, color: '#333' }}>
              Join Me on This Journey
            </Typography>
            At **<a href="https://www.rsvastrology.com" target="_blank" style={{ color: '#0073e6', textDecoration: 'none' }}>www.rsvastrology.com</a>**, 
            we are your companions on this path. My goal is to provide a **supportive space** where 
            you can gain wisdom and inspiration, backed by my knowledge and compassion.
            <br />
            <br />
            I feel **I am one of God's chosen mediums**, guiding people toward **aligning their Karma** 
            and discovering their **life’s true purpose**. And as I help others, I continue aligning 
            my own **Karma** while upholding the highest **Professional Ethics** and adhering to **Astro-Vastu classics**.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutPage;
