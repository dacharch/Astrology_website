import React from 'react';
import { Box, Typography, Link } from '@mui/material';

import './Service.css';
import { useNavigate } from 'react-router-dom';

const services = [
  { 
    img: '/images/married.jpg', 
    title: 'Birth Journal', 
    desc: "Unlock the secrets of life's journey through an insightful analysis of your birth journal.", 
    href:"/services/journal"
  },

  { 
    img: '/images/education.jpg', 
    title: 'Astro Vastu Consultancy', 
    desc: 'Everything is varying energies....surround yourself with happy ones',
    href:"/services/vastu"
  },

  { 
    img: '/images/business.jpeg', 
    title: 'Face reading',
    desc: 'Face reading empowers you with better decision making wisdom. Learn to read face and claim on charisma.',
    href:"/services/reading"

  },

  { 
    img: '/images/wealth.jpg',
    title: 'Tarot Card Reading', 
    desc: 'Sometimes, a question irks you. Getting answered through Tarot, you are about clarity and towards calmness.',
    href:"/services/tarrot",

  },

  { 
    img: '/images/health.jpg', 
    title: 'Life Style Coach',
    desc: 'To harness Power, Peace and Prosperity, coach yourself towards style and substance.',
    href:'/services/coach'

  },
  
  { 
    img: '/images/relationship.jpg',
    title: 'Palmistry', 
    desc: "Your hands hold your future. Discover what's in for you and tread towards bliss.",
    href:'/services/palmistry'
  },

 
];

const Service = () => {
  const navigate = useNavigate() ;
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
        cursor:'pointer'
      }}
    >
      <Typography sx={{ fontSize: { xs: '20px', sm: '25px' }, fontWeight: 'bold', marginBottom: '20px' }}>
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
                borderRadius: '50%', 
                marginBottom: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', 
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', 
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
            <Typography sx={{ fontSize: { xs: '14px', sm: '18px' }, fontWeight: 'bold', marginBottom: '10px' }}>
              {service.title}
            </Typography>
            <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, marginBottom: '10px' }}>
              {service.desc}
            </Typography>

           
          
            <Link
              onClick ={()=>navigate(service.href)}
              sx={{
                textDecoration: 'none',
                backgroundColor: 'black',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'inline-block',
              }}
            >
              Get Started Here
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Service;
