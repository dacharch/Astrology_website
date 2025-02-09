import { Container, Stack, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate() ;

  

  return (
    <Box
      sx={{
        backgroundColor: "#fffbf2",
        color: "#333", 
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
        >
          {/* Left Side - Text Content */}
          <Box flex={1} textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ color: "#222" }}>
              Welcome to Paramaksha Astrology
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ opacity: 0.9 }}>
              Let the stars guide your journey, the planets shape your destiny, and cosmic energies bring harmony to your life. Unlock the wisdom of Astrology and Vastu for a prosperous and balanced existence.
            </Typography>
            <Button
              onClick={()=>navigate("/contact")}
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3, px: 4, fontSize: "1.2rem" }}
            >
              Book a Session
            </Button>
          </Box>

          {/* Right Side - Image */}
          <Box flex={1} display="flex" justifyContent="center">
            <img
              src="/images/face.jpeg"
              alt="Astro Vastu"
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "20px",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
