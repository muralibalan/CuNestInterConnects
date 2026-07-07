import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Semiconductor',
    desc: 'We design and manufacture advanced semiconductor components for a wide range of industries, ensuring high performance and energy efficiency in all applications.',
    image: '/semiconductor.png'
  },
  {
    name: 'Automotive',
    desc: 'Our innovative technologies support the automotive industry, from vehicle electronics to advanced driver-assistance systems (ADAS), ensuring safety and reliability on the road.',
    image: '/automotive.png'
  },
  {
    name: 'Health Care',
    desc: 'We provide cutting-edge solutions for the healthcare industry, enabling advanced medical devices and diagnostic equipment.',
    image: '/healthcare.png'
  }
];

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          border: '1px solid #F3F4F6',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
            borderColor: '#E5E7EB',
          }
        }}
      >
        <Box sx={{ height: 240, overflow: 'hidden' }}>
          <img 
            src={product.image} 
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ color: '#0A1628', fontWeight: 700, mb: 1, fontFamily: '"JetBrains Mono", sans-serif' }}>
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: '#4B5563', mb: 3, flexGrow: 1, fontFamily: '"JetBrains Mono", sans-serif', lineHeight: 1.6 }}>
            {product.desc}
          </Typography>
          <Typography 
            component="a" 
            href="#"
            sx={{ 
              color: '#B87333', 
              fontWeight: 600, 
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'color 0.2s',
              '&:hover': { color: '#8B5E2B' }
            }}
          >
            Learn More <span style={{ marginLeft: '4px', fontSize: '1.2em' }}>&rarr;</span>
          </Typography>
        </Box>
      </Paper>
    </motion.div>
  );
};

const ProductGrid = () => {
  return (
    <Box sx={{ pt: { xs: 10, md: '140px' }, pb: { xs: 10, md: 20 }, bgcolor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="h3" sx={{ color: '#0A1628', mb: 2, fontFamily: '"JetBrains Mono", sans-serif', fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' } }}>
              Industries we work with!
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748B', maxWidth: '600px', mx: 'auto' }}>
              We provide cutting-edge solutions across major tech sectors.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <ProductCard product={product} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductGrid;
