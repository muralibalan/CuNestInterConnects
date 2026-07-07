import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ from, to, duration, suffix = '', formatFn }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = (formatFn ? formatFn(value) : value.toFixed(0)) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, suffix, isInView, formatFn]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
};

const stats = [
  { value: 25, suffix: '+', label: 'Years of Excellence', duration: 2 },
  { value: 1.2, suffix: ' Billion', label: 'Pins Connected', duration: 2.5, formatFn: (v) => v.toFixed(1) },
  { value: 98.7, suffix: '%', label: 'First-Pass Yield', duration: 2, formatFn: (v) => v.toFixed(1) },
];

const Stats = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: '#F5E1C4', borderTop: '1px solid #E8B884' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 12 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontFamily: '"JetBrains Mono", sans-serif',
                    fontWeight: 800, 
                    mb: 2,
                    background: 'linear-gradient(45deg, #8B5E2B, #E8B884)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  <AnimatedCounter 
                    from={0} 
                    to={stat.value} 
                    duration={stat.duration} 
                    suffix={stat.suffix} 
                    formatFn={stat.formatFn} 
                  />
                </Typography>
                <Typography variant="h6" sx={{ color: '#5C3A1A', fontWeight: 500, fontFamily: '"JetBrains Mono", sans-serif' }}>
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Trust Badges */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 4, md: 6 }, flexWrap: 'wrap', color: '#0A1628', opacity: 0.7 }}>
          {/* ISO 9001 */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8 M8 12h8" />
            </svg>
            <Typography sx={{ fontWeight: 600, fontFamily: '"JetBrains Mono", sans-serif' }}>ISO 9001</Typography>
          </Box>
          {/* RoHS Compliant */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 8c0-3.3-2.7-6-6-6H9C5.7 2 3 4.7 3 8v8c0 3.3 2.7 6 6 6h6c3.3 0 6-2.7 6-6V8z" />
              <circle cx="12" cy="12" r="4" />
            </svg>
            <Typography sx={{ fontWeight: 600, fontFamily: '"JetBrains Mono", sans-serif' }}>RoHS Compliant</Typography>
          </Box>
          {/* IPC Certified */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <Typography sx={{ fontWeight: 600, fontFamily: '"JetBrains Mono", sans-serif' }}>IPC Certified</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Stats;
