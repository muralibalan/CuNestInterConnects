import React, { useEffect } from 'react';
import { Container, IconButton } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardsData = [
  {
    title: 'Signal Integrity',
    items: [
      '❖ Pre layout & Post layout Analysis',
      '❖ Co-design (IC/package/board)',
      '❖ Serial (Serdes) & parallel (DDR) Channel Sim.',
      '❖ IBIS/IBIS-AMI Modelling',
      '❖ Crosstalk Analysis',
      '❖ Channel Characterization',
      '❖ Timing analysis',
      '❖ Eye Diagram analysis'
    ]
  },
  {
    title: 'Power Integrity',
    items: [
      '❖ DC Drop Analysis',
      '❖ AC Analysis',
      '❖ PDN impedance optimization',
      '❖ Transient noise estimation',
      '❖ Decoupling cap analysis & optimization',
      '❖ Co-Simulation (Package + Board)',
      '❖ Crosstalk',
      '❖ RFI Simulation',
      '❖ Compliances to various EMI standards during the design phase'
    ]
  },
  {
    title: 'Simulation Tool Expertise',
    items: [
      '❖ Cadence Sigrity:',
      '❖ Clarity 3D',
      '❖ Power SI',
      '❖ Power DC',
      '❖ Optimize PI',
      '❖ System SI',
      '❖ Ansys:',
      '❖ HFSS',
      '❖ SI Wave',
      '❖ Circuit Design'
    ]
  }
];

function SiPiAnalysisPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-[#FBF8F1] to-[#FFFFFF] font-sans">
      <Container maxWidth="lg">
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
              SI & PI ANALYSIS
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold text-[#0F3D3E] mb-6 font-sans">
              Supporting Advanced Analysis for High-Speed Interfaces
            </h2>

            <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg font-sans">
              As clock speeds and data rates increase, Signal Integrity (SI) and Power Integrity (PI) Analysis are key factors in achieving PCB or system-level performance. Our simulations, performed with leading-edge SI software, ensure that board performance meets expectations. We use a wide range of tools, including 3D EM full-wave extraction, network analysis, channel analysis, AC power analysis, and DC power analysis.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default SiPiAnalysisPage;
