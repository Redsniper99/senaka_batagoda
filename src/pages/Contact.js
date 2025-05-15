import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl sm:text-3xl text-red-500" />,
      title: "Phone",
      content: "+94 77 123 4567",
      link: "tel:+94771234567"
    },
    {
      icon: <FaWhatsapp className="text-2xl sm:text-3xl text-[#25D366]" />,
      title: "WhatsApp",
      content: "Chat with us",
      link: "https://wa.me/94771234567"
    },
    {
      icon: <FaEnvelope className="text-2xl sm:text-3xl text-red-500" />,
      title: "Email",
      content: "info@gurupatahendewa.com",
      link: "mailto:info@gurupatahendewa.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl sm:text-3xl text-red-500" />,
      title: "Location",
      content: "Colombo, Sri Lanka",
      link: "https://maps.google.com"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Gurupata Hendewa</title>
        <meta name="description" content="Get in touch with the Gurupata Hendewa team." />
      </Helmet>

      <div className="relative min-h-screen background-image" style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
        <div className="overlay"></div>

        <Container maxWidth="lg" className="relative z-10 h-screen overflow-y-auto py-8 sm:py-16 px-4 pt-32 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Paper className="p-4 sm:p-6 md:p-8 bg-black bg-opacity-50 backdrop-blur-sm">
              <Typography 
                variant="h3" 
                component="h1" 
                className="text-center mb-6 sm:mb-8 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                Contact Us
              </Typography>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-8 sm:mb-12"
              >
                <Typography variant="body1" className="text-gray-200 mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-center">
                  Have questions about our events or want to book a space? We're here to help! Reach out to us through any of the following channels.
                </Typography>
              </motion.div>

              <Grid container spacing={3}>
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      className="block text-center p-4 sm:p-6 bg-black bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="mb-3 sm:mb-4">{info.icon}</div>
                      <Typography variant="h6" className="text-white font-semibold mb-2 text-base sm:text-lg">
                        {info.title}
                      </Typography>
                      <Typography variant="body2" className="text-gray-300 text-sm sm:text-base">
                        {info.content}
                      </Typography>
                    </motion.a>
                  </Grid>
                ))}
              </Grid>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-8 sm:mt-12 text-center"
              >
                <Typography variant="body2" className="text-gray-400 text-sm sm:text-base">
                  We typically respond within 24 hours
                </Typography>
              </motion.div>
            </Paper>
          </motion.div>
        </Container>
      </div>
    </>
  );
}

export default Contact; 