import React, { useState } from 'react';
import { AppBar, Box, IconButton, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu, setMenuOpen } from '../store/uiSlice';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/#expertise' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine active link based on current path
  const activeLink = navLinks.find(l => l.path === location.pathname)?.title || 'Home';

  const Logo = () => (
    <Link
      to="/"
      className="flex items-center no-underline"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }}
    >
      <motion.div
        whileHover={{ scale: 1.02, filter: 'drop-shadow(0px 0px 20px rgba(166,107,63,0.5))' }}
        whileTap={{ scale: 0.98 }}
        className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#A66B3F] via-white/50 to-[#A66B3F] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      >
        <div className="bg-[#f8f9fa] rounded-[10px] px-5 py-2.5 flex items-center justify-center backdrop-blur-md gap-4">
          <img
            src="/logo1_transparent.png"
            alt="CuNest Logo Icon"
            style={{
              height: '50px',
              width: '50px',
              objectFit: 'contain'
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
      </motion.div>
    </Link>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(27, 74, 56, 0.9)',
          zIndex: 9999,
        }}
        className="w-full border-b border-white/10 shadow-none backdrop-blur-sm"
      >
        {/* Subtle circuit-grid pattern background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex items-center">
            {/* The Mechanical Divider (Crucial) */}
            <div className="hidden md:block h-10 w-px bg-[#A66B3F]/30 mx-6"></div>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              {navLinks.map((link) => (
                <div
                  key={link.title}
                  className="relative px-5 py-2 cursor-pointer transition-colors duration-300"
                  onMouseEnter={() => setHoveredLink(link.title)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    to={link.path}
                    className="no-underline relative z-10 block"
                    onClick={() => {
                      if (link.path === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                  >
                    <motion.span
                      whileHover={{ x: 2, color: '#FFFFFF' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`font-medium block transition-colors ${activeLink === link.title ? 'text-white' : 'text-white/80'}`}
                    >
                      {link.title}
                    </motion.span>
                  </Link>

                  {/* Permanent Active Glow Pill */}
                  {activeLink === link.title && (
                    <div className="absolute inset-0 rounded-full bg-[#A66B3F]/20 border border-[#A66B3F]/30 shadow-[0_0_15px_rgba(166,107,63,0.3)] pointer-events-none" />
                  )}

                  {/* Gliding Underline for Hover Interaction */}
                  {(hoveredLink || activeLink) === link.title && (
                    <motion.div
                      layoutId="nav-hover-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A66B3F] shadow-[0_0_8px_rgba(166,107,63,0.8)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </div>
              ))}

            </Box>

            {/* Mobile Menu Icon */}
            <motion.div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#A66B3F] p-2"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <MenuIcon fontSize="large" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </AppBar>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[10000] bg-[#142D22]/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 text-white hover:text-[#A66B3F] transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <CloseIcon fontSize="large" />
            </motion.button>

            {/* Logo */}
            <div className="absolute top-6 left-6">
              <Logo />
            </div>

            {/* Staggered Links */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="flex flex-col items-center gap-8 w-full px-6"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.title}
                  variants={{
                    hidden: { x: 50, opacity: 0 },
                    visible: { x: 0, opacity: 1 }
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (link.path === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="no-underline block"
                  >
                    <motion.span
                      whileHover={{ x: 10, color: '#FFFFFF' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="text-4xl font-bold text-white block transition-colors"
                      style={{ fontFamily: '"Space Mono", "JetBrains Mono", monospace' }}
                    >
                      {link.title}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
