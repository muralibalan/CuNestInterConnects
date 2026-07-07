import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MaintenanceBanner from '../components/MaintenanceBanner';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NextDesignForm from './NextDesignForm';

const Footer = () => {
  return (
    <Box component="footer" className="bg-gradient-to-b from-[#0F3D3E] to-[#0A192F]" sx={{ pt: 12, pb: 6, position: 'relative' }}>

      {/* Contact Form Section - பழைய ஃபார்ம் நீக்கப்பட்டு NextDesignForm சேர்க்கப்பட்டுள்ளது */}
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: 12 }}>
        <NextDesignForm />
      </Container>

      <div className="mb-12">
        <MaintenanceBanner />
      </div>

      {/* Footer Grid */}
      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', pt: 10 }}>
        <Container maxWidth="lg">
          {/* Mobile view-ல் மட்டும் டெக்ஸ்ட் மற்றும் லோகோ சென்டர் ஆவதற்காக textAlign சேர்க்கப்பட்டுள்ளது */}
          <Grid container spacing={{ xs: 8, md: 4 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>

            {/* Column 1: Brand */}
            <Grid item xs={12} md={3}>
              <Box sx={{ transform: { md: 'translateY(-12px)' } }}>
                {/* Mobile-ல் லோகோ கார்டு சென்டரில் இருக்க flex justify-content மாற்றப்பட்டுள்ளது */}
                <Box sx={{ mb: 3, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <div className="inline-block relative p-[2px] rounded-xl bg-gradient-to-r from-[#A66B3F] via-white/50 to-[#A66B3F] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(166,107,63,0.5)] transition-all duration-300">
                    <div className="bg-[#f8f9fa] rounded-[10px] px-5 py-2.5 flex items-center justify-center backdrop-blur-md gap-4">
                      <img
                        src="/logo1_transparent.png"
                        alt="CuNest Logo Icon"
                        style={{
                          height: '52px',
                          width: '52px',
                          objectFit: 'contain'
                        }}
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                        <Typography sx={{
                          fontFamily: '"JetBrains Mono", sans-serif',
                          fontWeight: 800,
                          fontSize: '1.5rem',
                          lineHeight: 1,
                          letterSpacing: '-0.02em',
                          color: '#1E293B'
                        }}>
                          <span style={{ color: '#C5773A' }}>Cu</span>Nest
                        </Typography>
                        <Typography sx={{
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          letterSpacing: '0.02em',
                          color: '#475569',
                          lineHeight: 1,
                          mt: 0.5
                        }}>
                          Interconnects
                        </Typography>
                      </Box>
                    </div>
                  </div>
                </Box>
                <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.8, fontFamily: 'sans-serif' }}>
                  Precision Interconnects for the Next Generation of Computing. Sub-millimeter accuracy for mission-critical hardware.
                </Typography>
              </Box>
            </Grid>

            {/* Column 2: Links */}
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 3, fontFamily: 'sans-serif' }}>
                Products
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <a href="#" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Nest-Grip LGA Sockets</a>
                <a href="#" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Edge-Rate PCIe Slots</a>
                <a href="#" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Micro-Fit Power</a>
                <a href="#" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Custom Spring Probes</a>
              </Box>
            </Grid>

            {/* Column 3: Links */}
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 3, fontFamily: 'sans-serif' }}>
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Link to="/about" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">About Us</Link>
                <a href="#" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Quality Assurance</a>
                <a href="#" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Careers</a>
                <Link to="/contact" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Contact Support</Link>
              </Box>
            </Grid>

            {/* Column 4: Newsletter */}
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 3, fontFamily: 'sans-serif' }}>
                Stay Updated
              </Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, fontFamily: 'sans-serif' }}>
                Subscribe to our newsletter for the latest in interconnect technology.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '320px', mx: { xs: 'auto', md: '0' } }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#112240] border border-white/10 rounded-full px-4 py-2 text-white outline-none focus:border-[#A66B3F] w-full text-sm transition-colors placeholder-white/40"
                />
                <button className="w-full px-6 py-2 rounded-sm bg-transparent border-2 border-[#A66B3F] text-white font-bold uppercase tracking-wider hover:bg-[#A66B3F]/10 hover:scale-[1.02] transition-all duration-300">
                  Subscribe
                </button>
              </Box>
            </Grid>

          </Grid>

          {/* Bottom Copyright Row */}
          <Box sx={{ mt: 10, pt: 4, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#64748b', fontFamily: 'sans-serif', textAlign: 'center' }}>
              &copy; {new Date().getFullYear()} CuNest Interconnects. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <a href="#" className="text-[#64748b] hover:text-white transition-colors duration-300 text-sm no-underline">Privacy Policy</a>
              <a href="#" className="text-[#64748b] hover:text-white transition-colors duration-300 text-sm no-underline">Terms of Service</a>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- Fixed Action Buttons Container (Right Side Stack) --- */}
      <Box
        sx={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          zIndex: 9999,
          // CSS Keyframes Animation for smooth floating effect
          '@keyframes floatAnimation': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-6px)' },
            '100%': { transform: 'translateY(0px)' },
          },
          animation: 'floatAnimation 3s ease-in-out infinite',
        }}
      >
        {/* WhatsApp Button (மேலே) */}
        <IconButton
          component="a"
          href="https://wa.me/917397716747"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#25D366',
            color: '#fff',
            width: '52px',
            height: '52px',
            boxShadow: '0px 4px 15px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#128C7E',
              transform: 'scale(1.1) rotate(8deg)',
            }
          }}
        >
          <WhatsAppIcon sx={{ fontSize: '28px' }} />
        </IconButton>

        {/* Call Button (கீழே) */}
        <IconButton
          component="a"
          href="tel:+917397716747"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#007bff',
            color: '#fff',
            width: '52px',
            height: '52px',
            boxShadow: '0px 4px 15px rgba(0, 123, 255, 0.4)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#0056b3',
              transform: 'scale(1.1) rotate(-8deg)',
            }
          }}
        >
          <PhoneIcon sx={{ fontSize: '24px' }} />
        </IconButton>
      </Box>

    </Box>
  );
};

export default Footer;