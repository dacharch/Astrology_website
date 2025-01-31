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
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger screens
          alignItems: 'center',
          maxWidth: '1200px',
          padding: '30px',
          borderRadius: '15px',
          backgroundColor: '#fff',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Left Side: Image */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' }, // Full width on small screens, 50% on larger
            height: '100%',
            minHeight: '300px',
            backgroundImage: 'url(/images/about.jpg)', // Image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
          }}
        />

        {/* Right Side: About Content */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' }, // Full width on small screens, 50% on larger
            padding: { xs: '20px', md: '40px' },
            textAlign: 'left',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#333',
            }}
          >
            About Reena Sharma
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: '1.8',
              color: '#555',
            }}
          >
            Reena Sharma is a highly skilled astrologer with over 15 years of experience in guiding individuals
            through the complexities of life. Her expertise in reading birth charts, understanding planetary
            influences, and offering astrological insights has helped thousands of people find clarity, make
            important decisions, and discover their true purpose.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: '1.8',
              color: '#555',
              marginTop: '20px',
            }}
          >
            With a deep passion for astrology, Reena believes in the power of understanding one's stars as a
            tool for personal growth and transformation. Her readings are not just about predicting the future
            but helping individuals understand their strengths, challenges, and the opportunities ahead.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutPage;
