import React from 'react';
import { motion } from 'framer-motion';

const MaintenanceBanner = () => {
  return (
    <div className="bg-[#0F3D3E] text-white py-16 relative overflow-hidden border-t border-[#A66B3F]/20">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-0 left-[-10%] w-[400px] h-[400px] rounded-full bg-[#00E5FF]/5 blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[#A66B3F]/10 blur-[60px] pointer-events-none"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center justify-center space-x-4 mb-6">
          <motion.div 
            className="bg-[#A66B3F]/20 p-3 rounded-full"
            animate={{ boxShadow: ['0px 0px 10px rgba(166,107,63,0.4)', '0px 0px 30px rgba(166,107,63,1)', '0px 0px 10px rgba(166,107,63,0.4)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-8 h-8 text-[#A66B3F]" style={{ filter: 'drop-shadow(0px 0px 8px rgba(166,107,63,0.9))' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white drop-shadow-md">
            SITE UNDER MAINTENANCE
          </h2>
        </div>
        
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-sans font-medium">
          Pardon our dust! We are actively upgrading CuNest to bring you a better experience. Some sections or features may be incomplete or temporarily unavailable.
        </p>
      </div>
    </div>
  );
};

export default MaintenanceBanner;
