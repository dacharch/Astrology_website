import { Container, Stack, Typography, Button, Box } from "@mui/material";

const HeroSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
        {/* Left Side - Text Content */}
        <Box flex={1}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Astro-Vastu Harmony
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Align your space with cosmic energy for health, love, success, and prosperity. Experience the power of Astrology and Vastu in creating a balanced and harmonious environment.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Book a Session
          </Button>
        </Box>
        
        {/* Right Side - Image */}
        <Box flex={1} display="flex" justifyContent="center">
          <img
            src="/images/face.jpeg"
            alt="Astro Vastu"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroSection;
