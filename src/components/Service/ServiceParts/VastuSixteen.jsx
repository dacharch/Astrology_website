import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from '../../Header/Header';

const VastuSixteen = () => {

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "91956011902"; 
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#f9f9f9',
          minHeight: '100vh',
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
          Vastu 16
        </Typography>
        

        <Box
          sx={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            maxWidth: '800px',
            minWidth: '850px',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              backgroundImage: 'url(/images/vastu16.jpg)', // Update with correct path
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              marginBottom: '20px',
              marginX: 'auto',
            }}
          />

          <Typography
            sx={{
              marginBottom: '20px',
              color: '#333',
              maxWidth: '600px',
              marginX: 'auto',
            }}
          >
           Vastu Shastra divides any space into 16 energy zones, each influencing key aspects of life such as health, wealth, relationships, career, and overall well-being. When these zones are correctly aligned, they create a harmonious and prosperous environment. However, if any zone is imbalanced, it can lead to obstacles, financial struggles, career stagnation, or relationship issues.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: '1.8',
              color: '#555',
              maxWidth: '600px',
              marginBottom: '20px',
              marginX: 'auto',  // Ensures it aligns centrally within the box
            }}
          >
           Our Vastu 16 Gridding Zone service focuses on identifying and correcting these energy imbalances. Each zone emits a specific energy that affects different areas of life, and misalignment can disrupt success and peace. Through expert analysis, we help restore balance and enhance positive energy flow.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: '1.8',
              color: '#555',
              maxWidth: '600px',
              marginBottom: '20px',
              marginX: 'auto',  // Ensures it aligns centrally within the box
            }}
          >
           We use a scientific approach to detect and resolve negative influences without requiring structural modifications. Our remedies are simple yet effective, ensuring long-term stability, prosperity, and happiness. Whether for your home, office, or commercial space, Vastu corrections can create a more productive and peaceful environment.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: '1.8',
              color: '#555',
              maxWidth: '600px',
              marginBottom: '20px',
              marginX: 'auto',  // Ensures it aligns centrally within the box
            }}
          >
           By aligning your space with Vastu’s 16-zone principles, you can experience growth, stability, and a smoother life journey. Transform your surroundings today and welcome positivity and success!
          </Typography>

          

          <Button
            variant="contained"
            sx={{
              
              color: 'white',
              padding: '10px 20px',
              borderRadius: '10px',
               backgroundColor: '#001533',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
            onClick={handleWhatsAppRedirect}
          >
            Get Started Here
          </Button>
        </Box>
      </Box>


    </>

  );
};

export default VastuSixteen  ;