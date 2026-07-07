import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import Features from '../sections/Features';
import ProcessSection from '../sections/ProcessSection';
import ProductGrid from '../sections/ProductGrid';
import Stats from '../sections/Stats';
import Footer from '../sections/Footer';

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.98 }
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.5
};

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Hash scrolling is now handled centrally in App.jsx
  }, [location]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-white w-full min-h-screen pt-20"
    >
      <HeroSection />
      <IntroSection />
      <Features />
      <ProductGrid />
      <ProcessSection />
      <Stats />
      <Footer />
    </motion.div>
  );
};

export default Home;
