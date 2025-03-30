import React from 'react';
import { Box, Container, Typography, useMediaQuery, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Define the slides data
const slides = [
  {
    image: '/images/banner.jpg',
    text: (
      <>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            fontWeight: 'bold',
            textAlign: 'left',
            lineHeight: 1.4,
            px: 2,
          }}
        >
          "Illuminate your life path with astrology. Discover your cosmic blueprint and strike the balance with Vastu. Unlock the secrets of the universe and align your life with celestial energies for harmony and success."
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'yellow',
            fontWeight: 'bold',
            textAlign: 'right',
            mt: 1,
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
          }}
        >
          — By Acharya Reena Sharma
        </Typography>
      </>
    ),
  },
  {
    image: '/images/banner3.jpg',
    text: (
      <>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
            textTransform: 'uppercase',
            lineHeight: 0.9,
          }}
        >
          ACHARYA
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '2.25rem', sm: '2.8125rem', md: '3.4375rem' },
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'yellow',
            textTransform: 'uppercase',
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)',
          }}
        >
          REENA SHARMA
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5625rem', md: '1.875rem' },
            fontWeight: 'bold',
            textAlign: 'left',
            color: 'yellow',
          }}
        >
          • GLOBALLY ACCLAIMED ASTROLOGER
          <br />
          • VASTU CONSULTANT
          <br />
          • LIFE COACH
        </Typography>
      </>
    ),
    textPosition: 'right',
  },
  {
    image: '/images/banner2.jpg',
  },
];

// Create a responsive theme
let theme = createTheme();
theme = responsiveFontSizes(theme);

const HeroSection = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#fffbf2', py: isMobile ? 2 : 4 }}>
        <Container maxWidth="xl" disableGutters>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            style={{ width: '100vw', height: isMobile ? '60vh' : isTablet ? '75vh' : '90vh' }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    width: '100%',
                    height: isMobile ? '60vh' : isTablet ? '75vh' : '90vh',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: slide.text ? (slide.textPosition === 'right' ? 'flex-end' : 'flex-start') : 'center',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />

                  {/* Text Overlay */}
                  {slide.text && (
                    <Box
                      sx={{
                        position: 'absolute',
                        left: slide.textPosition === 'right' ? 'auto' : '5%',
                        right: slide.textPosition === 'right' ? '5%' : 'auto',
                        width: { xs: '90%', sm: '80%', md: '60%' },
                        color: '#fff',
                        padding: { xs: '10px', sm: '20px', md: '30px' },
                        borderRadius: '10px',
                        textAlign: 'left',
                      }}
                    >
                      {slide.text}
                    </Box>
                  )}
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HeroSection;
