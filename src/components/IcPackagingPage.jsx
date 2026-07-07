import React, { useEffect } from 'react';
import { Container, IconButton } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardsData = [
  {
    title: 'Technology Expertise',
    items: [
      '❖ Flip chip 🡪 Chip Scale Packaging (CSP) 🡪 Multi Chip Module (MCM)',
      '❖ Multi-Layer Organic Substrate (MLO)',
      '❖ Multi-Layer Ceramic Substrate (MLC)',
      '❖ Interposer',
      '❖ Core-less Substrate (MLTF-Multi Layer Thin Film)'
    ]
  },
  {
    title: 'Software Supported',
    items: [
      '❖ Cadence Allegro Package Designer (16.5, 16.6, 17.2)'
    ]
  }
];

function IcPackagingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen pt-24 pb-24 font-sans overflow-hidden bg-gradient-to-br from-[#FBF8F1] to-[#FFFFFF]">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-900/5 blur-[100px] pointer-events-none"
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#8C5A2B]/5 blur-[120px] pointer-events-none"
        animate={{ 
          x: [0, -80, 0], 
          y: [0, -100, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Back Button */}
        <IconButton 
          onClick={() => navigate('/')} 
          sx={{ mt: '20px', mb: 6, color: '#0F3D3E', backgroundColor: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(10px)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.8)' } }}
        >
          <ArrowBackIcon />
        </IconButton>

        {/* Header Area */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#8C5A2B] mb-4 font-sans">
              IC PACKAGING DESIGN
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-[#0F3D3E] mb-6 font-sans">
              Cutting-edge IC packaging solutions for your integrated circuits
            </h2>

            <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg font-sans">
              Our team designs IC packaging solutions that offer maximum protection, heat dissipation, and reliability for your integrated circuits. We focus on ensuring optimized signal routing and miniaturization without compromising performance.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full p-8 bg-white/60 backdrop-blur-md border border-white/30 shadow-xl shadow-teal-900/5 rounded-[2rem] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl hover:border-[#8C5A2B]/30 flex flex-col">

                {/* Copper Accent Line */}
                <div className="w-12 h-1 bg-[#8C5A2B] rounded-full mb-6"></div>

                <h3 className="text-lg font-bold text-black mb-6 font-sans">
                  {card.title}
                </h3>

                <ul className="flex-grow space-y-3">
                  {card.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#6B4423] font-medium font-sans leading-relaxed mb-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default IcPackagingPage;
