import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/banner.jpg",
    text: (
      <>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: 10, sm: 14, md: 18 },
            fontWeight: "bold",
            textAlign: "left",
            lineHeight: 1.4,
            px: 2,
          }}
        >
          "Illuminate your life path with astrology. Discover your cosmic blueprint and strike the balance with Vastu. Unlock the secrets of the universe and align your life with celestial energies for harmony and success."
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "yellow",
            fontWeight: "bold",
            textAlign: "right",
            mt: 1,
            fontSize: { xs: 14, sm: 16, md: 18 },
          }}
        >
          — By Acharya Reena Sharma
        </Typography>
      </>
    ),
  },
  {
    image: "/images/banner3.jpg",
    text: (
      <>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: 30, sm: 40, md: 50 },
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
            textTransform: "uppercase",
            lineHeight: 0.9,
          }}
        >
          ACHARYA
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: 35, sm: 45, md: 55 },
            fontWeight: "bold",
            textAlign: "center",
            color: "yellow",
            textTransform: "uppercase",
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)",
          }}
        >
          REENA SHARMA
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: 20, sm: 25, md: 30 },
            fontWeight: "bold",
            textAlign: "left",
            color: "yellow",
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
    textPosition: "right",
  },
  {
    image: "/images/banner2.jpg",
  },
];

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <Box sx={{ backgroundColor: "#fffbf2", py: isMobile ? 2 : 4 }}>
      <Container maxWidth="xl" disableGutters>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          style={{ width: "100vw", height: isMobile ? "60vh" : isTablet ? "75vh" : "90vh" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  width: "100%",
                  height: isMobile ? "35vh" : isTablet ? "75vh" : "90vh",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: slide.text ? (slide.textPosition === "right" ? "flex-end" : "flex-start") : "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill", // No cropping
                  }}
                />

                {/* Text Overlay (Responsive & Adjusts Automatically) */}
                {slide.text && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: slide.textPosition === "right" ? "auto" : "5%",
                      right: slide.textPosition === "right" ? "5%" : "auto",
                      width: { xs: "90%", sm: "80%", md: "60%" },
                      color: "#fff",
                      padding: { xs: "10px", sm: "20px", md: "30px" },
                      borderRadius: "10px",
                      textAlign: "left",
                      background: "rgba(0, 0, 0, 0.5)",
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
  );
};

export default HeroSection;
