import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const services = [
  { img: '/images/vastu.jpeg', title: 'Astro Vastu Consultancy', desc: 'Everything is varying energies....surround yourself with happy ones', href: "/services/vastu" },
  { img: '/images/face.jpeg', title: 'Face reading', desc: 'Face reading empowers you with better decision-making wisdom. Learn to read face and claim on...', href: "/services/reading" },
  { img: '/images/life.jpg', title: 'Life Style Coach', desc: 'To harness Power, Peace and Prosperity, coach yourself towards style and substance.', href: '/services/coach' },
  { img: '/images/completkundli.jpg', title: 'Complete Kundli', desc: 'Discover the cosmic blueprint of your life with our Complete Kundli Service.', href: '/services/completeKundli' },
  { img: '/images/varshikrashifal.jpg', title: 'Varshik Rashifal', desc: 'Insights into your career, relationships, health, and finances based on planetary movements.', href: "/services/varshik" },
  { img: '/images/singlequestion.jpg', title: 'Single Question Prediction', desc: 'Have a pressing question about your career, relationships, finances, or health?', href: "/services/singlequestion" },
  { img: '/images/vastu16.jpg', title: "Vastu 16 Zone Gridding", desc: "Vastu Shastra divides any space into 16 energy zones influencing all aspects of life.", href: "/services/vastu16" }
];

const Service = () => {
  const navigate = useNavigate();

  return (
    <Box
      id="service"
      component="section"
      sx={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: { xs: '20px', sm: '40px' },
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#002147', mb: 4 }}>
        Featured Services
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 4,
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr'
          }
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#fff',
              borderRadius: 4,
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.08)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: 3,
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.15)',
              }
            }}
          >
            <Box
              component="img"
              src={service.img}
              alt={service.title}
              sx={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                objectFit: 'cover',
                mb: 2,
                border: '4px solid #fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
            <Typography variant="h6" sx={{ color: '#002147', fontWeight: 600, mb: 1 }}>
              {service.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#444', mb: 2 }}>
              {service.desc}
            </Typography>
            
            {/* Container for Button */}
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Button
                onClick={() => navigate(service.href)}
                variant="contained"
                sx={{
                  backgroundColor: '#002147',
                  borderRadius: '30px',
                  paddingX: 3,
                  paddingY: 1,
                  '&:hover': {
                    backgroundColor: '#001533'
                  },
                  minWidth: '200px', // Ensure the button has enough width
                  textAlign: 'center', // Ensures button text is aligned center
                }}
              >
                Book a Session
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Service;
