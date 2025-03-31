import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from '../../Header/Header';

const TarotCardPage = () => {
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
          Birth Journal 
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
              backgroundImage: 'url(/images/birth.jpeg)', // Update with correct path
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
            Unlock the secrets of life's journey through an insightful analysis of your birth journal (kundli).
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
           The celestial bodies (planets and stars) effect your life at every step. Decoding their position and alignment at the time of birth will help you understand the underlying cause of your circumstances - both good and challenging. With profound insights, you decipher the narrative and motive of your life which helps
           you sail smooth.
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
          Astrology is about discovering your strengths which come of cosmic influences as you allow clarity upon your mind and direction towards your actions.
          This lets you better and mindful decisions.
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
            In a personalised session, your horoscope is vividly studied and discussed followed by an explanation of appropriate and effective remedies. You get to express your concerns and leave with a bagful of hope and faith.
          </Typography>

          

          <Button
            variant="contained"
            sx={{
              color: 'white',
              padding: '10px 20px',
              borderRadius: '10px',
              backgroundColor: 'red' ,
              '&:hover': {
                backgroundColor: '#333',
              },
              
            }}
          >
            Get Started Here
          </Button>
        </Box>
      </Box>


    </>

  );
};

export default TarotCardPage;
