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
          Face is the index of mind.

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
              backgroundImage: 'url(/images/face.jpeg)', // Update with correct path
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
           A sophisticated biometric, our face records our personal history, personality traits, preferences and the decision making style.The seventh cranial nerve links the brain to the face and through this connection, our face records our karma and other predispositions.
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
           The seventh cranial nerve links the brain to the face and through this connection, our face records our karma and other predispositions.The unique lines, markings, hues, our micro expressions and gestures can be read as our status (physical, mental, emotional and spiritual) report. This is the science of physiognomy which allows you to discover the unseen facets of your being that help you benefit of the potential that was so far hidden.
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
            By learning the main components of face, you can use this as a tool to understand the mental 
            element of people which will help you strike win - win deals on your workfront.Striving to execute the belief that a 
            lit candle can illuminate innumerable more, training entrepreneurs, ones in corporate arena and other structured organizations,
             it assures me that I am able to share my knowledge which surely will become handy at some point.
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
            I strongly advocate for having a hang of the basic principles of face reading as it would not only save time and energy about selecting one's team but also it would have reliable and accountable people surrounding you towards optimal results.

          </Typography>

          <Button
            variant="contained"
            sx={{
           
              color: 'white',
              padding: '10px 20px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#333',
              },
              backgroundColor: '#001533' 
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
