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
          maxWidth: '600px',
          ml: { xs: 4, sm: 'auto', md: 8 },  // Increased left margin on mobile
          mr: { xs: 2, sm: 5, md: 8 },
          textAlign: 'right',
        }}
      >
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '14px', sm: '20px', md: '28px' }, // Smaller text on mobile
            fontWeight: 600,
            lineHeight: 1.6,
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
            mt: 1,
            fontSize: { xs: '14px', sm: '20px', md: '24px' }, // Smaller text on mobile
          }}
        >
          — By Acharya Reena Sharma
        </Typography>
      </Box>
    ),
    textPosition: 'right',
  },
  {
    image: '/images/banner2.jpg',
    text: (
      <Box
        sx={{
          maxWidth: '600px',
          ml: { xs: 0, sm: 5, md: 8 },  // Start text from the left on mobile
          mr: { xs: 4, sm: 'auto', md: 8 },  // Adjust right margin on mobile
          textAlign: 'left',
        }}
      >
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '14px', sm: '20px', md: '28px' }, // Smaller text on mobile
            fontWeight: 600,
            lineHeight: 1.6,
            color: 'white',
          }}
        >
          "Bring positive transformation to your home and life with the ancient wisdom of Vastu Shastra."
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'yellow',
            fontWeight: 'bold',
            mt: 1,
            fontSize: { xs: '14px', sm: '20px', md: '24px' }, // Smaller text on mobile
          }}
        >
          — Trusted by thousands
        </Typography>
      </Box>
    ),
    textPosition: 'left',
  },
  {
    image: '/images/banner3.jpg',
    text: null,
    textPosition: 'center',
  },
];

let theme = createTheme();
theme = responsiveFontSizes(theme);

const HeroSection = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const height = isMobile ? '30vh' : '100vh'; // Dynamically set height

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ py: 0, mb: '10px' }}>
        <Container maxWidth={false} disableGutters sx={{  }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            style={{ width: '100vw', height }}
          >
            <SwiperSlide>
              <Box
                sx={{
                  width: '100vw',
                  height,
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden', // Prevent overflow
                }}
              >
                <img
                  src={slides[0].image}
                  alt="Slide 1"
                  style={{
                    width: '100%', // Full width of the screen
                    height: '100%', // Full height of the screen
                    objectFit: 'fill', // Ensure the image is fully visible without cropping
                    objectPosition: 'center', // Center the image within the container
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)', // Shadow to the image
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    p: 2,
                    width: '100%',
                    maxWidth: '90%',
                  }}
                >
                  {slides[0].text}
                </Box>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box
                sx={{
                  width: '100vw',
                  height,
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden', // Prevent overflow
                }}
              >
                <img
                  src={slides[1].image}
                  alt="Slide 2"
                  style={{
                    width: '100%', // Full width of the screen
                    height: '100%', // Full height of the screen
                    objectFit: 'fill', // Ensure the image is fully visible without cropping
                    objectPosition: 'center', // Center the image within the container
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    p: 2,
                    width: '100%',
                    maxWidth: '90%',
                  }}
                >
                  {slides[1].text}
                </Box>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box
                sx={{
                  width: '100vw',
                  height,
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden', // Prevent overflow
                }}
              >
                <img
                  src={slides[2].image}
                  alt="Slide 3"
                  style={{
                    width: '100%', // Full width of the screen
                    height: '100%', // Full height of the screen
                    objectFit: 'fill', // Ensure the image is fully visible without cropping
                    objectPosition: 'center', // Center the image within the container
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)', // Shadow to the image
                  }}
                />
              </Box>
            </SwiperSlide>
          </Swiper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HeroSection;
