import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import './Service.css';

const Service = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        marginTop: '30px',
        marginBottom: '30px',
        marginX: 'auto',
        maxWidth: '1200px',
      }}
    >
      <Typography sx={{ fontSize: { xs: '20px', sm: '25px' }, fontWeight: 'bold', marginBottom: '20px' }}>
        Featured Services
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          flexWrap: 'wrap',
          gap: 2, // Adding space between cards
        }}
      >
        {/* Service 1 */}
        <Box
          sx={{
            width: { xs: '100%', sm: '45%', md: '22%' },
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Box>
            <img
              className="service_image"
              src="/images/married.jpg"
              alt="Married life"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            <Typography padding="10px" sx={{ fontSize: { xs: '12px', sm: '14px' } }}>
              Marriage is a sacred bond, and astrology can help strengthen it. Discover compatibility, resolve conflicts, and find the perfect timing for important milestones. Let the stars guide your journey to a happy and harmonious married life.
            </Typography>
          </Box>
        </Box>

        {/* Service 2 */}
        <Box
          sx={{
            width: { xs: '100%', sm: '45%', md: '22%' },
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Box>
            <img
              className="service_image"
              src="/images/education.jpg"
              alt="Education"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            <Typography padding="10px" sx={{ fontSize: { xs: '12px', sm: '14px' } }}>
              Education is the foundation of your future, and astrology can guide your path to success. Discover your strengths, overcome challenges, and choose the right direction for a bright academic journey.
            </Typography>
          </Box>
        </Box>

        {/* Service 3 */}
        <Box
          sx={{
            width: { xs: '100%', sm: '45%', md: '22%' },
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Box>
            <img
              className="service_image"
              src="/images/business.jpeg"
              alt="Business"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            <Typography padding="10px" sx={{ fontSize: { xs: '12px', sm: '14px' } }}>
              We provide business astrology services to help guide your business decisions. By analyzing astrological influences, we offer insights into the best times for growth, investments, and key business choices, ensuring your venture thrives with cosmic support.
            </Typography>
          </Box>
        </Box>

        {/* Service 4 */}
        <Box
          sx={{
            width: { xs: '100%', sm: '45%', md: '22%' },
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Box>
            <img
              className="service_image"
              src="/images/wealth.jpg"
              alt="Wealth"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            <Typography padding="10px" sx={{ fontSize: { xs: '12px', sm: '14px' } }}>
              Our wealth astrology services help you attract prosperity and financial success. By examining your birth chart and the planetary influences on your financial life, we provide guidance on the best times to make investments, save, and grow your wealth. Let astrology pave the way for a prosperous future.
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Service;
