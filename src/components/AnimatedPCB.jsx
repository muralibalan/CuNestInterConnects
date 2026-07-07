import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPCB = () => {
  // SVG animation variants for the traces
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.2, type: "spring", duration: 2, bounce: 0 },
        opacity: { delay: i * 0.2, duration: 0.5 },
      }
    })
  };

  // Pulsing animation for the inner chip
  const pulse = {
    initial: { scale: 1, opacity: 0.7 },
    animate: { 
      scale: [1, 1.05, 1], 
      opacity: [0.7, 1, 0.7],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[500px] bg-[#070B14] rounded-2xl overflow-hidden relative flex items-center justify-center p-8 shadow-[0_0_40px_rgba(205,127,50,0.15)] border border-white/5">
      
      {/* High-tech dotted grid background */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'radial-gradient(#CD7F32 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }}
      />

      {/* SVG Circuit Traces */}
      <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute inset-0 z-0">
        <g stroke="#CD7F32" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          
          {/* Main Traces */}
          <motion.path d="M 200 140 L 200 60 L 120 60" variants={draw} custom={1} initial="hidden" animate="visible" />
          <motion.path d="M 260 200 L 340 200 L 340 280" variants={draw} custom={2} initial="hidden" animate="visible" />
          <motion.path d="M 200 260 L 200 340 L 120 340" variants={draw} custom={3} initial="hidden" animate="visible" />
          <motion.path d="M 140 200 L 60 200 L 60 120" variants={draw} custom={4} initial="hidden" animate="visible" />
          
          {/* Diagonal Traces */}
          <motion.path d="M 150 150 L 90 90 L 50 90" variants={draw} custom={1.5} initial="hidden" animate="visible" />
          <motion.path d="M 250 250 L 310 310 L 350 310" variants={draw} custom={2.5} initial="hidden" animate="visible" />
          <motion.path d="M 250 150 L 310 90 L 350 90" variants={draw} custom={3.5} initial="hidden" animate="visible" />
          <motion.path d="M 150 250 L 90 310 L 50 310" variants={draw} custom={4.5} initial="hidden" animate="visible" />

          {/* Solder Pads / Nodes */}
          <motion.circle cx="120" cy="60" r="5" fill="#CD7F32" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2 }} />
          <motion.circle cx="340" cy="280" r="5" fill="#CD7F32" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.4 }} />
          <motion.circle cx="120" cy="340" r="5" fill="#CD7F32" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.6 }} />
          <motion.circle cx="60" cy="120" r="5" fill="#CD7F32" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.8 }} />
          
          <motion.rect x="46" y="86" width="8" height="8" fill="#CD7F32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} />
          <motion.rect x="346" y="306" width="8" height="8" fill="#CD7F32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7 }} />
          <motion.rect x="346" y="86" width="8" height="8" fill="#CD7F32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9 }} />
          <motion.rect x="46" y="306" width="8" height="8" fill="#CD7F32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.1 }} />
        </g>
      </svg>

      {/* Central Processor Unit */}
      <motion.div 
        className="relative z-10 w-28 h-28 bg-[#111C2E] border-2 border-[#CD7F32] rounded-xl flex items-center justify-center shadow-lg shadow-[#CD7F32]/20"
        initial={{ scale: 0, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
      >
        {/* Inner Die */}
        <motion.div 
          className="w-16 h-16 bg-[#0A1628] rounded-md border border-[#CD7F32]/60 flex items-center justify-center flex-wrap gap-1 p-1.5"
          variants={pulse}
          initial="initial"
          animate="animate"
        >
          {/* Quad Core Representation */}
          {[...Array(4)].map((_, i) => (
             <div key={i} className="w-[45%] h-[45%] bg-[#CD7F32]/30 rounded-sm"></div>
          ))}
        </motion.div>
        
        {/* External Pins Top */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-3 bg-[#CD7F32] rounded-t-sm"></div>)}
        </div>
        {/* External Pins Bottom */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-3 bg-[#CD7F32] rounded-b-sm"></div>)}
        </div>
        {/* External Pins Left */}
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 flex flex-col gap-2">
          {[...Array(4)].map((_, i) => <div key={i} className="w-3 h-1.5 bg-[#CD7F32] rounded-l-sm"></div>)}
        </div>
        {/* External Pins Right */}
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 flex flex-col gap-2">
          {[...Array(4)].map((_, i) => <div key={i} className="w-3 h-1.5 bg-[#CD7F32] rounded-r-sm"></div>)}
        </div>
      </motion.div>

      {/* Global Ambient Glow */}
      <motion.div 
        className="absolute inset-0 bg-[#CD7F32]/5 z-20 pointer-events-none rounded-2xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedPCB;
