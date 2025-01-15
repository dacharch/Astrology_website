import React from 'react';
import { Box, Stack, TextField, Button, Typography, Card } from '@mui/material';
import { styled } from '@mui/system';
import { Instagram } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactContainer = styled(Box)(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  marginTop:20,
  color: '#8d97ad',
  fontWeight: 300,
  padding: '60px 0',

  backgroundPosition: 'center top',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ContactCard = styled(Card)(({ theme }) => ({
  boxShadow: '0px 0px 30px rgba(115, 128, 157, 0.1)',
  height:690
}));

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundImage: 'url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)',
  color: 'white',
  padding: theme.spacing(4),
  height:690,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(to right, #ff4d7e 0%, #ff6a5b 100%)',
  color: 'white',
  borderRadius: '4px',
  padding: '12px 24px',
  fontWeight: 500,
  '&:hover': {
    background: 'linear-gradient(to right, #ff6a5b 0%, #ff4d7e 100%)',
  },
}));

const ContactUs = () => {
  return (
    <ContactContainer id="contact" sx={{ backgroundImage: 'url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg)' }}>
      <Box sx={{ maxWidth: '1200px', width: '100%' }}>
        <Stack spacing={4}>
          <ContactCard>
            <Stack direction={{ xs: 'column', md: 'row' }}>
              <Box flex={1} p={4}>
                <Typography variant="h4" gutterBottom sx={{ marginTop: '60px', textAlign: 'center' }}>
                  Contact Us
                </Typography>
                <form>
                  <Stack spacing={3} alignItems="center">
                    <TextField fullWidth label="Name" variant="outlined" />
                    <TextField fullWidth label="Email" variant="outlined" />
                    <TextField fullWidth label="Phone" variant="outlined" />
                    <TextField fullWidth label="Location" variant="outlined" />
                    <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
                    <GradientButton type="submit">
                      Submit Now
                    </GradientButton>
                  </Stack>
                </form>
              </Box>
              <BackgroundBox flex={1}>
                
                
              </BackgroundBox>
            </Stack>
          </ContactCard>
        </Stack>
      </Box>
    </ContactContainer>
  );
};

export default ContactUs;
