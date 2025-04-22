import React from 'react';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    image: '/images/banner.jpg',
    text: (
      <Box sx={{ maxWidth: '90%', mx: 'auto' }}>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '16px', sm: '20px', md: '24px' },
            fontWeight: 'bold',
            lineHeight: 1.4,
            color: 'white',
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
            mt: 2,
            fontSize: { xs: '16px', sm: '18px', md: '20px' },
          }}
        >
          — By Acharya Reena Sharma
        </Typography>
      </Box>
    ),
    textPosition: 'right',
  },
  {
    image: '/images/banner3.jpg',
    text: (
      <Box sx={{ maxWidth: '90%', mx: 'auto' }}>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '32px', sm: '40px', md: '48px' },
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            lineHeight: 1,
            textAlign: 'center',
          }}
        >
          ACHARYA
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '36px', sm: '45px', md: '55px' },
            fontWeight: 'bold',
            color: 'yellow',
            textTransform: 'uppercase',
            textAlign: 'center',
            textShadow: '.1875rem .1875rem .375rem rgba(0, 0, 0, 0.7)',
          }}
        >
          REENA SHARMA
        </Typography>

        <Box sx={{ mt: 2 }}>
          {['GLOBALLY ACCLAIMED ASTROLOGER', 'VASTU CONSULTANT', 'LIFE COACH'].map((line, i) => (
            <Typography
              key={i}
              sx={{
                color: 'yellow',
                fontWeight: 'bold',
                fontSize: { xs: '20px', sm: '25px', md: '30px' },
                textAlign: 'center',
              }}
            >
              {line}
            </Typography>
          ))}
        </Box>
      </Box>
    ),
    textPosition: 'center',
  },
];

let theme = createTheme();
theme = responsiveFontSizes(theme);

const HeroSection = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const height = isMobile ? '30vh' : '100vh';  // Full height for mobile as well

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ py: 0, marginBottom: '10px' }}>
        <Container maxWidth="xl" disableGutters>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            style={{ width: '100vw', height }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    width: '100%',
                    height,
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 0, // Remove any bottom margin
                  }}
                >
                  {/* Background image */}
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: isMobile ? 'contain' : 'cover',
                      objectPosition: 'top',
                    }}
                  />

                  {/* Text directly over the image - only for non-mobile */}
                  {!isMobile && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: 'white',
                        p: 2,
                        width: '100%',
                        maxWidth: '90%',
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
      {/* Features Section */}
      <Box sx={{ marginBottom: '10px' }}>
        {/* Add your features section content here */}
      </Box>
    </ThemeProvider>
  );
};

export default HeroSection;
