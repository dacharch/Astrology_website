import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }
    if (!subject.trim()) newErrors.subject = "Subject is required";
    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendMessage = () => {
    if (!validate()) return;

    const phoneNumber = "919560111902"; // your WhatsApp number
    const text = `Name: ${name}%0ASubject: ${subject}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px - 64px)', // Header + Footer height
          display: 'flex',
          flexDirection: 'column',
          background: "linear-gradient(to right, #dfe9f3 0%, #ffffff 100%)",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            py: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container maxWidth="sm">
            <Box
              sx={{
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
              <Typography variant="h4" gutterBottom color="textPrimary">
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
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                fullWidth
                label="Your Contact Number"
                variant="outlined"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                error={!!errors.phone}
                helperText={errors.phone}
                inputProps={{ maxLength: 10 }}
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                error={!!errors.subject}
                helperText={errors.subject}
              />
              <TextField
                fullWidth
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={!!errors.message}
                helperText={errors.message}
              />
              <Button
                variant="contained"
                fullWidth
                onClick={handleSendMessage}
                sx={{
                  py: 1.5,
                  fontSize: "1rem",
                  backgroundColor: "#001533",
                  "&:hover": {
                    backgroundColor: "#002b6b",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default Contact;
