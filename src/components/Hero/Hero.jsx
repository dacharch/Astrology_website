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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          width: '100%',
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
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
            mt: 2,
            fontSize: { xs: '16px', sm: '18px', md: '20px' },
          }}
        >
          — By Acharya Reena Sharma
        </Typography>
      </Box>
    ),
    textPosition: 'left',
  },
  {
    image: '/images/banner3.jpg',
    text: (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: '32px', sm: '40px', md: '48px' },
              fontWeight: 'bold',
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
              fontSize: { xs: '36px', sm: '45px', md: '55px' },
              fontWeight: 'bold',
              color: 'yellow',
              textTransform: 'uppercase',
              textShadow: '.1875rem .1875rem .375rem rgba(0, 0, 0, 0.7)',
            }}
          >
            REENA SHARMA
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <Box sx={{ textAlign: 'left', pr: { xs: 2, sm: 4, md: 6 } }}>
            {[
              'GLOBALLY ACCLAIMED ASTROLOGER',
              'VASTU CONSULTANT',
              'LIFE COACH',
            ].map((line, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <Typography
                  sx={{
                    color: 'yellow',
                    fontWeight: 'bold',
                    fontSize: { xs: '20px', sm: '25px', md: '30px' },
                    width: '1.5rem',
                    minWidth: '1.5rem',
                    textAlign: 'right',
                  }}
                >
                  •
                </Typography>
                <Typography
                  sx={{
                    color: 'yellow',
                    fontWeight: 'bold',
                    fontSize: { xs: '20px', sm: '25px', md: '30px' },
                    pl: 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {line}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    ),
    textPosition: 'right',
  },
  {
    image: '/images/banner2.jpg',
  },
];

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
            style={{
              width: '100vw',
              height: isMobile ? '60vh' : isTablet ? '75vh' : '90vh',
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    width: '100%',
                    height: isMobile ? '50vh' : isTablet ? '65vh' : '90vh',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: slide.text
                      ? slide.textPosition === 'right'
                        ? 'flex-end'
                        : 'flex-start'
                      : 'center',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'fill',
                    }}
                  />

                  {slide.text && (
                    <Box
                      sx={{
                        position: 'absolute',
                        left: slide.textPosition === 'right' ? 'auto' : '5%',
                        right: slide.textPosition === 'right' ? '5%' : 'auto',
                        width: { xs: '90%', sm: '80%', md: '60%' },
                        color: '#fff',
                        padding: { xs: '.625rem', sm: '1.25rem', md: '1.875rem' },
                        borderRadius: '.625rem',
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
