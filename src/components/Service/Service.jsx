import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import './Service.css';

const Service = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)', // Subtle shadow to distinguish the section
        padding: '20px', // Padding inside to create space for the shadow
        borderRadius: '10px', // Rounded corners for a softer look
        backgroundColor: '#fff', // White background for distinction
        marginTop: '30px', // Space above the section
        marginBottom: '30px', // Space below the section
        marginX: 'auto', // Center horizontally
        height:'450px',
        maxWidth: '1200px', // Limiting the width to avoid excess stretching
      }}
    >
      <Typography sx={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '20px' }}>
        Services
      </Typography>

      {/* Service Grid using Stack for responsive layout */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ flexWrap: 'wrap' }}
      >
        {/* Service 1 */}
        <Box
          sx={{
            width: { xs: '100%', sm: '45%', md: '22%' },
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Adding shadow to the service box
            borderRadius: '8px', // Slightly rounded corners for individual cards
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effect
            '&:hover': {
              transform: 'scale(1.05)', // Slight scaling effect on hover
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
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
                height: '200px', // Fixed height for consistency
                objectFit: 'cover', // Maintain aspect ratio and fill the space
              }}
            />
            <Typography padding="10px">
              Want a Happy Married life? Our matchmaking analysis can predict what's right just for you.
            </Typography>
          </Box>
        </Box>

        {/* Service 2 */}
        <Box
          sx={{
            width: { xs: '100%', sm: '45%', md: '22%' },
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Adding shadow to the service box
            borderRadius: '8px', // Slightly rounded corners for individual cards
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effect
            '&:hover': {
              transform: 'scale(1.05)', // Slight scaling effect on hover
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
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
                height: '200px', // Fixed height for consistency
                objectFit: 'cover', // Maintain aspect ratio and fill the space
              }}
            />
            <Typography padding="10px">
              Want a Happy Married life? Our matchmaking analysis can predict what's right just for you.
            </Typography>
          </Box>
        </Box>

        {/* Service 3 */}
        <Box
          sx={{
            width: { xs: '100%', sm: '45%', md: '22%' },
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Adding shadow to the service box
            borderRadius: '8px', // Slightly rounded corners for individual cards
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effect
            '&:hover': {
              transform: 'scale(1.05)', // Slight scaling effect on hover
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
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
                height: '200px', // Fixed height for consistency
                objectFit: 'cover', // Maintain aspect ratio and fill the space
              }}
            />
            <Typography padding="10px">
              Want a Happy Married life? Our matchmaking analysis can predict what's right just for you.
            </Typography>
          </Box>
        </Box>

        {/* Service 4 */}
        <Box
          sx={{
            width: { xs: '100%', sm: '45%', md: '22%' },
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Adding shadow to the service box
            borderRadius: '8px', // Slightly rounded corners for individual cards
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effect
            '&:hover': {
              transform: 'scale(1.05)', // Slight scaling effect on hover
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
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
                height: '200px', // Fixed height for consistency
                objectFit: 'cover', // Maintain aspect ratio and fill the space
              }}
            />
            <Typography padding="10px">
              Want a Happy Married life? Our matchmaking analysis can predict what's right just for you.
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Service;
