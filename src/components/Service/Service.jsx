import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const services = [
  { 
    img: '/images/vastu.jpeg', 
    title: 'Astro Vastu Consultancy', 
    desc: 'Everything is varying energies....surround yourself with happy ones',
    href: "/services/vastu"
  },
  { 
    img: '/images/face.jpeg', 
    title: 'Face reading',
    desc: 'Face reading empowers you with better decision-making wisdom. Learn to read face and claim on charisma.',
    href: "/services/reading"
  },
  { 
    img: '/images/card.jpg',
    title: 'Tarot Card Reading', 
    desc: 'Sometimes, a question irks you. Getting answered through Tarot, you are about clarity and towards calmness.',
    href: "/services/tarrot",
  },
  { 
    img: '/images/life.jpg', 
    title: 'Life Style Coach',
    desc: 'To harness Power, Peace and Prosperity, coach yourself towards style and substance.',
    href: '/services/coach'
  },
  { 
    img: '/images/palmistry.jpg',
    title: 'Palmistry', 
    desc: "Your hands hold your future. Discover what's in for you and tread towards bliss.",
    href: '/services/palmistry'
  },
  {
    img: '/images/completkundli.jpg',
    title: 'Complete Kundli',
    desc: 'Discover the cosmic blueprint of your life with our Complete Kundli Service. From detailed birth chart analysis to career, marriage, health, and finance predictions',
    href: '/services/completeKundli'
  },
  {
    img: '/images/varshikrashifal.jpg',
    title: 'Varshik Rashifal',
    desc: 'Varshik Rashifal provides insights into your career, relationships, health, and finances based on planetary movements.',
    href: "/services/varshik"
  },
  {
    img: '/images/singlequestion.jpg',
    title: 'Single Question Prediction',
    desc: 'Have a pressing question about your career, relationships, finances, or health?',
    href: "/services/singlequestion"
  },
  {
    img: '/images/vastu16.jpg',
    title: "Vastu 16",
    desc: "Vastu Shastra divides any space into 16 energy zones, each influencing key aspects of life such as health, wealth, relationships, career, and overall well-being.",
    href: "/services/vastu16"
  }
];

const Service = () => {
  const navigate = useNavigate();
  return (
    <Box
      id="service"
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
        cursor: 'pointer'
      }}
    >
      <Typography 
        sx={{ 
          fontSize: { xs: '20px', sm: '25px' }, 
          fontWeight: 'bold', 
          marginBottom: '20px',
          color: '#002147' // Dark blue color
        }}
      >
        Featured Services
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
              },
              textAlign: 'center',
              padding: '20px',
              height: '100%',
            }}
          >
            <img
              className="service_image"
              src={service.img}
              alt={service.title}
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '50%', // Circle shape
                marginBottom: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                border: '5px solid white', // White border
                padding: '5px', // Padding inside the border
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.3)';
              }}
            />
            <Typography 
              sx={{ 
                fontSize: { xs: '14px', sm: '18px' }, 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#002147' // Dark blue color
              }}
            >
              {service.title}
            </Typography>
            <Typography 
              sx={{ 
                fontSize: { xs: '12px', sm: '14px' }, 
                marginBottom: '10px',
                color: '#002147' // Dark blue color
              }}
            >
              {service.desc}
            </Typography>

            <Link
              onClick={() => navigate(service.href)}
              sx={{
                textDecoration: 'none',
                backgroundColor: '#002147', // Dark blue background
                color: '#fff', // White text
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'inline-block',
                '&:hover': {
                  backgroundColor: '#001533' // Darker blue on hover
                }
              }}
            >
              Book a Session
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Service;
