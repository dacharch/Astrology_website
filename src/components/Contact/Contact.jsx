import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const phoneNumber = "91956011902"; 
    const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          p: 4,
          boxShadow: 3,
          borderRadius: 3,
          backgroundColor: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h4" gutterBottom color="primary">
          Get in Touch
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </Typography>
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Your Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Your Contact Number"
          variant="outlined"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          fullWidth
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSendMessage}
          sx={{ py: 1.5, fontSize: "1rem", backgroundColor: '#001533'  }}
         
        >
          Send via WhatsApp
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
