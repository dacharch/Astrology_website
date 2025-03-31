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
          Tarot Card Reading
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
              backgroundImage: 'url(/images/card.jpg)', // Update with correct path
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
            Selecting and reading from peculiar cards which encompass all the facets of the universe, Tarot is a form of guidance
            that helps to gain insight into the past, present, and future.
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
            Communicating symbolically, Tarot employs intricate imagery and evocative illustrations as each card holds a multitude of meanings and invites intuitive interpretation and personal reflection.
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
            In a personalized session of Tarot reading, you get your questions answered, helping you gain clarity about navigating complex situations. Sort your relationships, stay on a steady path, and anchor at the harbor of success in your professional life guided by Tarot cards.
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
          >
            Get Started Here
          </Button>
        </Box>
      </Box>


    </>

  );
};

export default TarotCardPage;
