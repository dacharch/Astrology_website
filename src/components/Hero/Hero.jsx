import React from 'react';
import {
  Box,
  Container,
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
  { image: '/images/banner.jpg' },
  { image: '/images/banner2.jpg' },
  { image: '/images/banner3.jpg' },
  {image:'/images/banner4.png'}
];

let theme = createTheme();
theme = responsiveFontSizes(theme);

const HeroSection = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const height = isMobile ? '30vh' : '100vh';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ py: 0, mb: '10px' }}>
        <Container maxWidth={false} disableGutters>
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
                    width: '100vw',
                    height,
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
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
                      objectPosition: 'center',
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
                    }}
                  />
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
