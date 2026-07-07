import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import DiamondIcon from '@mui/icons-material/Diamond';
import SecurityIcon from '@mui/icons-material/Security';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ShieldIcon from '@mui/icons-material/Shield';

const values = [
  {
    title: 'Precision Quality',
    description: 'We enforce stringent signal integrity analysis and zero-defect fabrication standards to deliver interconnects that perform flawlessly under extreme technological demands.',
    icon: <DiamondIcon sx={{ fontSize: '3rem', color: '#CD7F32' }} />,
    delay: 0.1
  },
  {
    title: 'Absolute Confidentiality',
    description: 'Your proprietary blueprints and architectural designs are secured under industry-leading protocols, ensuring complete intellectual property protection from concept to mass production.',
    icon: <SecurityIcon sx={{ fontSize: '3rem', color: '#CD7F32' }} />,
    delay: 0.2
  },
  {
    title: 'Agile Engineering',
    description: 'We seamlessly adapt our design methodologies, material selections, and manufacturing processes to align precisely with your most complex project constraints.',
    icon: <SyncAltIcon sx={{ fontSize: '3rem', color: '#CD7F32' }} />,
    delay: 0.3
  },
  {
    title: 'Mission-Critical Reliability',
    description: 'From high-speed data centers to advanced automotive systems, our interconnect solutions are rigorously stress-tested for consistent, uncompromising, long-term dependability.',
    icon: <ShieldIcon sx={{ fontSize: '3rem', color: '#CD7F32' }} />,
    delay: 0.4
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#FBF8F1] font-sans relative overflow-hidden">
      {/* Background Decor */}
      <Box 
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(205,127,50,0.1) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box textAlign="center" mb={12} mt={4}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="overline" sx={{ color: '#CD7F32', letterSpacing: '3px', fontWeight: 700, mb: 2, display: 'block' }}>
              ABOUT CUNEST
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: '"JetBrains Mono", sans-serif', fontWeight: 800, color: '#0F3D3E', mb: 3 }}>
              Our Core Pillars
            </Typography>
            <Typography variant="body1" sx={{ color: '#666666', maxWidth: '700px', mx: 'auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
              We are defined by our relentless pursuit of engineering excellence. These core values serve as the blueprint for every schematic we design and every harness we manufacture.
            </Typography>
          </motion.div>
        </Box>

        {/* Values Grid */}
        <Grid container spacing={4}>
          {values.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 4, md: 6 },
                    height: '100%',
                    borderRadius: '24px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 40px rgba(15, 61, 62, 0.08)',
                      borderColor: 'rgba(205,127,50,0.3)'
                    }
                  }}
                >
                  <Box sx={{ mb: 3, p: 2, backgroundColor: 'rgba(205,127,50,0.05)', borderRadius: '16px', display: 'inline-block', width: 'fit-content' }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h4" sx={{ fontFamily: '"JetBrains Mono", sans-serif', fontWeight: 700, color: '#0F3D3E', mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666666', lineHeight: 1.7, fontSize: '1.05rem' }}>
                    {item.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AboutPage;
