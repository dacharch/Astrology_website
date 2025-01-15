import React from 'react';
import { Box, Grid, Typography, Paper, Avatar } from '@mui/material';

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
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '1200px',
          padding: '30px',
          borderRadius: '15px',
          backgroundColor: '#fff',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Grid container spacing={4}>
          {/* Left Side: Image */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/images/about.jpg)', // Image path for the person
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
              }}
            />
          </Grid>

          {/* Right Side: About Content */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#333',
                textAlign: 'left',
              }}
            >
              About Reena Sharma
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: '1.8',
                color: '#555',
                textAlign: 'left',
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
                textAlign: 'left',
                marginTop: '20px',
              }}
            >
              With a deep passion for astrology, Reena believes in the power of understanding one's stars as a
              tool for personal growth and transformation. Her readings are not just about predicting the future
              but helping individuals understand their strengths, challenges, and the opportunities ahead.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AboutPage;
