import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const processSteps = [
  {
    title: "CONCEPT & DESIGN",
    description: "We collaborate with you to engineer precise schematics and 3D models for your high-performance interconnects.",
    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 64, color: '#8C5A2B' }} />
  },
  {
    title: "PRECISION FABRICATION",
    description: "Our advanced manufacturing processes bring your blueprints to life with unmatched accuracy and durability.",
    icon: <SettingsOutlinedIcon sx={{ fontSize: 64, color: '#8C5A2B' }} />
  },
  {
    title: "RELIABILITY TESTING",
    description: "Every harness and cable undergoes exhaustive SI/PI analysis and physical stress tests to guarantee performance.",
    icon: <VerifiedOutlinedIcon sx={{ fontSize: 64, color: '#8C5A2B' }} />
  }
];

const ProcessSection = () => {
  return (
    <Box sx={{ pt: { xs: '80px', md: '140px' }, pb: { xs: 12, md: 20 }, position: 'relative', bgcolor: '#FDF8F3' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={10}>
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#5C3A1A', 
                mb: 2, 
                fontFamily: '"JetBrains Mono", sans-serif', 
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              How We Engineer Success.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, md: 8 }} justifyContent="center">
            {processSteps.map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center', px: { xs: 2, md: 3 } }}>
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                    {step.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontFamily: '"JetBrains Mono", sans-serif', 
                      fontWeight: 700, 
                      color: '#333333', 
                      mb: 2, 
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px' 
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#4B5563', 
                      lineHeight: 1.8,
                      fontSize: '1.05rem'
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProcessSection;
