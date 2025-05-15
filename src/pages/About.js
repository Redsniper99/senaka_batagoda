import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { FaMusic, FaUsers, FaCalendarAlt, FaStar } from 'react-icons/fa';

function About() {
  const features = [
    {
      icon: <FaMusic className="text-2xl sm:text-3xl text-red-500" />,
      title: "Live Performances",
      description: "Experience the magic of live music with our talented artists and performers."
    },
    {
      icon: <FaUsers className="text-2xl sm:text-3xl text-red-500" />,
      title: "Community Gathering",
      description: "Join a vibrant community of music lovers and cultural enthusiasts."
    },
    {
      icon: <FaCalendarAlt className="text-2xl sm:text-3xl text-red-500" />,
      title: "Special Events",
      description: "Regular events featuring both established and emerging artists."
    },
    {
      icon: <FaStar className="text-2xl sm:text-3xl text-red-500" />,
      title: "Premium Experience",
      description: "Enjoy world-class facilities and unforgettable moments."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Gurupata Hendewa</title>
        <meta name="description" content="Learn more about Gurupata Hendewa and our mission." />
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
                About Gurupata Hendewa
              </Typography>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-8 sm:mb-12 max-w-3xl mx-auto"
              >
                <Typography variant="body1" className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-center">
                  Welcome to Gurupata Hendewa, where we create extraordinary moments through music and cultural experiences. Our venue is more than just a space – it's a celebration of art, community, and unforgettable memories.
                </Typography>
                <Typography variant="body1" className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-center">
                  With a rich history of hosting exceptional events, we've become a cornerstone of cultural entertainment. Our commitment to excellence ensures that every event is crafted with precision, passion, and attention to detail.
                </Typography>
              </motion.div>

              <Grid container spacing={3} className="mt-6 sm:mt-8 justify-center">
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index} className="flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      className="text-center p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300 w-full max-w-xs"
                    >
                      <div className="mb-3 sm:mb-4 flex justify-center">{feature.icon}</div>
                      <Typography variant="h6" className="text-white font-semibold mb-2 text-base sm:text-lg">
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" className="text-gray-300 text-sm sm:text-base">
                        {feature.description}
                      </Typography>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 sm:mt-12 text-center max-w-2xl mx-auto"
              >
                <Typography variant="body1" className="text-gray-200 text-sm sm:text-base md:text-lg italic">
                  Join us in creating memories that will last a lifetime. We look forward to welcoming you to Gurupata Hendewa.
                </Typography>
              </motion.div>
            </Paper>
          </motion.div>
        </Container>
      </div>
    </>
  );
}

export default About; 