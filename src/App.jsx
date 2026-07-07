import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Box, CircularProgress } from '@mui/material';
import Layout from './components/Layout';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const PcbDesignPage = lazy(() => import('./components/PcbDesignPage'));
const SiPiAnalysisPage = lazy(() => import('./components/SiPiAnalysisPage'));
const IcPackagingPage = lazy(() => import('./components/IcPackagingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
// Creating dummy components for routes requested in Navbar, they can be expanded later
const Products = lazy(() => Promise.resolve({ default: () => <Box sx={{ pt: 20, textAlign: 'center' }}><h2>Products Page (Coming Soon)</h2></Box> }));
const Applications = lazy(() => Promise.resolve({ default: () => <Box sx={{ pt: 20, textAlign: 'center' }}><h2>Applications Page (Coming Soon)</h2></Box> }));
const Quality = lazy(() => Promise.resolve({ default: () => <Box sx={{ pt: 20, textAlign: 'center' }}><h2>Quality Page (Coming Soon)</h2></Box> }));
const Support = lazy(() => Promise.resolve({ default: () => <Box sx={{ pt: 20, textAlign: 'center' }}><h2>Support Page (Coming Soon)</h2></Box> }));
const PcbFabrication = lazy(() => Promise.resolve({ default: () => <Box sx={{ pt: 20, textAlign: 'center' }}><h2>PCB Fabrication (Coming Soon)</h2></Box> }));

const FallbackLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', bgcolor: '#FDF8F3' }}>
    <CircularProgress sx={{ color: '#B87333' }} />
  </Box>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to it with offset for navbar
    // Otherwise, scrolling to top is handled by AnimatePresence onExitComplete
    if (location.hash) {
      // Small delay to allow page transition to complete
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location.pathname, location.hash]);

  return (
    <Layout>
      <AnimatePresence mode="wait" onExitComplete={() => {
        if (!location.hash) {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      }}>
        <Suspense fallback={<FallbackLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/pcb-design" element={<PcbDesignPage />} />
            <Route path="/sipi-analysis" element={<SiPiAnalysisPage />} />
            <Route path="/ic-packaging" element={<IcPackagingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pcb-fabrication" element={<PcbFabrication />} />
            <Route path="/products" element={<Products />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
