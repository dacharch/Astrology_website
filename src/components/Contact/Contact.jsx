import React, { useState } from "react";
import { Box, Stack, TextField, Button, Typography, Card } from "@mui/material";
import { styled } from "@mui/system";

const AppointmentContainer = styled(Box)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  color: "#333",
  fontWeight: 300,
  padding: "40px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
}));

const AppointmentCard = styled(Card)(({ theme }) => ({
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Enhanced shadow for better aesthetics
  width: "100%",
  maxWidth: "700px", // Increased width for a more spacious form
  padding: "25px",
  borderRadius: "10px",
  backgroundColor: "#fff",
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(to right, #000000, #434343)", // Black gradient
  color: "white", // White text color
  borderRadius: "5px",
  padding: "12px 24px",
  fontWeight: 500,
  "&:hover": {
    background: "linear-gradient(to right, #434343, #000000)", // Hover effect with reversed gradient
  },
}));

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let whatsappUrl = `https://wa.me/9560111902?text=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nMessage: ${formData.message}`
    )}`;
    window.open(whatsappUrl, "_blank").focus();
    setFormData({ name: "", email: "", phone: "", date: "", time: "", message: "" });
  };

  return (
    <AppointmentContainer>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={4} justifyContent="center" alignItems="center">
          <AppointmentCard>
            <Typography variant="h4" gutterBottom textAlign="center">
              Book an Appointment
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required />
                <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} required />
                <TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
                <TextField fullWidth type="date" name="date" value={formData.date} onChange={handleChange} required />
                <TextField fullWidth type="time" name="time" value={formData.time} onChange={handleChange} required />
                <TextField fullWidth label="Message" name="message" value={formData.message} onChange={handleChange} multiline rows={3} />
                <SubmitButton type="submit" fullWidth>
                  Book Now
                </SubmitButton>
              </Stack>
            </form>
          </AppointmentCard>
        </Stack>
      </Box>
    </AppointmentContainer>
  );
};

export default AppointmentForm;
