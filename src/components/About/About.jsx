import React from 'react';
import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

const AboutPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Header />

      <Box
        sx={{
          minHeight: 'calc(100vh - 64px - 64px)', // Header (64px) + Footer (64px) assumed
          display: 'flex',
          flexDirection: 'column',
          background: "linear-gradient(to right, #dfe9f3 0%, #ffffff 100%)",
        }}
      >
        <Box
          sx={{
            flexGrow: 1, // take available space to push Footer to the bottom if needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 20px',
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
              I am sure as humans, we are always curious to know <br /> about the people we interact with. So, here I am, sharing my <br /> journey into this mystic world.
              <br />
              As a child, my endless curiosity about "Why's" and "How's" <br /> led me to explore the language of the stars. <br /> I discovered that "Stars illuminate the paths we walk."
              <br />
              I started reading Astrology books as a hobby while <br /> pursuing my Bachelor’s in Psychology and <br /> Master’s in English. Then, Vedic Astrology called me to its <br /> depths at Bhartiya Vidya Bhavan, where <br /> I studied under my Guru, <strong>Shri K. N. Rao Ji</strong>, completing Jyotish Alankar and Jyotish Acharya.
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 3, mb: 1, color: '#333', textAlign: isSmallScreen ? 'center' : 'left' }}>
              My Mission
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
              My goal is to bring Clarity, Insight, and Empowerment through the cosmic language of Astrology.
              <br />
              As a Vedic Astrologer, Vastu Consultant, Bhrigu Nandi Nadi (BNN) Expert around with 20 years of experience, I blend ancient wisdom with a modern perspective to guide individuals through life’s complexities.
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 3, mb: 1, color: '#333', textAlign: isSmallScreen ? 'center' : 'left' }}>
              What I Offer
            </Typography>
            <Typography component="ul" sx={{ lineHeight: '1.6', color: '#555', paddingLeft: isSmallScreen ? '20px' : '40px' }}>
              <li>Natal Horoscope Readings</li>
              <li>Dynamic Astrology Analysis</li>
              <li>Predictive Astrology</li>
              <li>Compatibility Analysis</li>
              <li>Energy Balancing</li>
              <li>Remedies & More…</li>
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 3, mb: 1, color: '#333', textAlign: isSmallScreen ? 'center' : 'left' }}>
              Join Me on This Journey
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
              Life is a beautiful journey of discovery, learning, and growth. Through the ancient wisdom of Astrology, I aim to illuminate your path with clarity, hope, and strength.
              <br /><br />
              Whether you are seeking answers, healing, or simply a deeper understanding of your life’s purpose, you are warmly invited to walk this journey with me.
              <br /><br />
              Explore more about our work and inspirations on 
              {' '}
              <a href="https://www.rsvastrology.com" target="_blank" style={{ color: '#0073e6', textDecoration: 'none' }}>
                www.rsvastrology.com
              </a>, connect with us on 
              {' '}
              <a href="https://www.instagram.com/paramaksha/" target="_blank" style={{ color: '#0073e6', textDecoration: 'none' }}>
                www.instagram.com
              </a>, and join our soulful community on 
              {' '}
              <a href="https://www.youtube.com/@AcharyaReenaSharma05/" target="_blank" style={{ color: '#0073e6', textDecoration: 'none' }}>
                www.youtube.com
              </a>.
              <br /><br />
              Let’s walk together — learning, growing, and unfolding the beautiful mysteries of the Universe.
            </Typography>
          </Paper>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default AboutPage;
