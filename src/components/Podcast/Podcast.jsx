import React from 'react';
import './Podcast.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Box, Typography, Link } from '@mui/material';

const Podcast = () => {
  return (
    <div>
      <Header />
      <Box
        component="section"
        sx={{
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: '#fff',
          marginTop: '30px',
          marginBottom: '30px',
          marginX: 'auto',
          maxWidth: '1200px',
        }}
      >
        <Typography sx={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '20px', color: '#002147' }}>
          Podcast
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 2,
            padding: '10px',
          }}
        >
          {[
            'https://www.youtube.com/embed/bqTHSXGUfRQ',
            'https://www.youtube.com/embed/K0cb9fjjzCU',
            'https://www.youtube.com/embed/EE1kKWQBYWA',
            'https://www.youtube.com/embed/WmxKRC2Q5g4',

            'https://www.youtube.com/embed/lvCPgz1e8Lk',
            'https://www.youtube.com/embed/0iB4iWPNqmU',

            'https://www.youtube.com/embed/bkvEnHP15t0',
            'https://www.youtube.com/embed/AVcwy_H43bI',


            'https://www.youtube.com/embed/nVaJDAH0eMA',


            'https://www.youtube.com/embed/eCO1OWgF7Nk',
            'https://www.youtube.com/embed/_kNcdBg8yWY',
            'https://www.youtube.com/embed/Ng8aEEMG_Zs',


          ].map((src, index) => (
            <iframe
              key={index}
              width="100%"
              height="250"
              src={src}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </Box>

        <Link
          href="https://www.youtube.com/@AcharyaReenaSharma05/videos"
          target="_blank"
          sx={{
            marginTop: '30px',
            padding: '12px 30px',
            marginRight: '15px',
            color: '#fff',
            fontSize: '18px',
            borderRadius: '25px',
            '&:hover': {
              backgroundColor: '#303f9f',
            },
            textDecoration: 'none',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, box-shadow 0.3s',
            display: 'inline-block',
            backgroundColor: '#001533',
          }}
        >
          View YouTube Channel
        </Link>
      </Box>
      <Footer />
    </div>
  );
};

export default Podcast;
