import { useState, useEffect, useCallback } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    headline: 'Protecting the Core. Powering the Future.',
    subtext: 'Advanced IC packaging that protects chip integrity and drives next-gen performance.',
  },
  {
    id: 2,
    headline: 'Precision Engineering. Unmatched Quality.',
    subtext: 'Our rigorous testing ensures every interconnect meets the highest standards.',
  },
  {
    id: 3,
    headline: 'Innovation Driven by Design.',
    subtext: 'From concept to production, we engineer the future of electronics.',
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(/pcb_background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Particle Background */}
      <ParticlesProvider init={particlesInit}>
        <Particles
          id="tsparticles"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.8,
                    color: "#B87333"
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#B87333",
              },
              links: {
                color: "#B87333",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "square",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </ParticlesProvider>

      {/* Main Content Container */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', pt: { xs: 12, md: 0 } }}>
        
        {/* Dynamic Sliding Text Area */}
        <Box sx={{ minHeight: { xs: '240px', md: '280px' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', mb: 6 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2.5rem', md: '4rem' },
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: '#FFFFFF',
                  fontFamily: '"JetBrains Mono", sans-serif',
                  lineHeight: 1.1,
                  mb: 3,
                  textShadow: 'none',
                  maxWidth: '900px',
                  mx: 'auto'
                }}
              >
                {slides[currentSlide].headline}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.4rem' },
                  color: '#FFFFFF',
                  fontFamily: '"JetBrains Mono", sans-serif',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                {slides[currentSlide].subtext}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Fixed CTA Buttons (Do not slide) */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: { xs: 2, sm: 3 } 
          }}
        >
          <Link to="/#expertise" className="w-full sm:w-auto">
            <button className="w-full px-10 py-4 rounded-full bg-transparent border-2 border-[#CD7F32] text-white font-bold uppercase tracking-widest hover:bg-[#CD7F32] transition-all duration-300 hover:scale-105">
              Explore Services
            </button>
          </Link>
          
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="w-full px-10 py-4 rounded-full bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#07090C] transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </Link>
        </Box>

      </Container>
    </Box>
  );
}

export default HeroSection;
