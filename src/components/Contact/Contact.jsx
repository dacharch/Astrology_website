import React, { useState } from 'react';
import { Box, Stack, TextField, Button, Typography, Card } from '@mui/material';
import { styled } from '@mui/system';

const ContactContainer = styled(Box)(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  color: '#8d97ad',
  fontWeight: 300,
  padding: '20px', // Reduced padding for smaller contact section
  background: 'linear-gradient(to right, #ffffff 0%, #f4f4f4 100%)', // White gradient background
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh', // Make sure it takes full height of the screen without scrolling
}));

const ContactCard = styled(Card)(({ theme }) => ({
  boxShadow: '0px 0px 20px rgba(115, 128, 157, 0.1)', // Subtle shadow for a clean look
  width: '100%',
  maxWidth: '500px', // Increased width for a more spacious form
  padding: '20px', // Reduced padding for a compact form
  borderRadius: '10px',
  backgroundColor: '#fff', // White background for the card
  marginTop: '50px', // Added top margin for space above the form
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
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data (e.g., send to an API or display a message)

    let whatsupurl=`https://wa.me/9560111902?text=${formData}`;


    window.open(whatsupurl,'_blank').focus();
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      message: '',
    });
  };

  return (
    <ContactContainer id="contact" sx={{ marginTop: '30px' }}>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={4} justifyContent="center" alignItems="center">
          <ContactCard>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: '20px' }}>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  size="small"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  size="small"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  size="small"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Location"
                  variant="outlined"
                  size="small"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={3}
                  size="small"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <GradientButton type="submit" fullWidth>
                  Submit Now
                </GradientButton>
              </Stack>
            </form>
          </ContactCard>
        </Stack>
      </Box>
    </ContactContainer>
  );
};

export default ContactUs;
