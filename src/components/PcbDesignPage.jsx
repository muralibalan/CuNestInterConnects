import React, { useEffect } from 'react';
import { Container, IconButton } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardsData = [
  {
    title: 'Technology Expertise',
    items: [
      '❖ High-Speed Digital, Analog and Mixed Signal',
      '❖ Ultra-high Density Boards',
      '❖ RF PCBs, High Frequency & Low EMI Designs',
      '❖ High Layer Count Designs',
      '❖ Flex and Rigid-Flex Designs'
    ]
  },
  {
    title: 'ATE Services',
    items: [
      '❖ Probe Interface Boards',
      '❖ Device Interface Boards',
      '❖ Handler Interface Boards',
      '❖ Load Boards',
      '❖ Evaluation & Characterization Boards',
      '❖ Tester Brands: Teradyne, Verigy, Eagle, Advantest'
    ]
  },
  {
    title: 'Software Supported',
    items: [
      '❖ Cadence Allegro'
    ]
  },
  {
    title: 'ATE Testboards',
    items: [
      '❖ Probe Interface Boards',
      '❖ Device Interface Boards',
      '❖ Handler Interface Boards'
    ]
  },
  {
    title: 'Technology Features',
    items: [
      '❖ Blind Vias, Buried Vias, Via in Pad',
      '❖ Laser Micro Vias',
      '❖ Signal Integrity and Impedance Control',
      '❖ Rigid and Flexible Antenna Designs',
      '❖ PCB Designs for Space, Military, Medical, and Commercial Applications',
      '❖ Comprehensive Professional Fabrication Documents'
    ]
  }
];

function PcbDesignPage() {
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
              PCB DESIGN SERVICE
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold text-[#0F3D3E] mb-6 font-sans">
              Providing Turnkey PCB Design Services
            </h2>

            <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg font-sans">
              We at CuNest offer full-spectrum PCB design services from Library Development, Schematic Drafting, Layout, Analysis, Validation to Quick Turn Prototyping, ensuring high-quality results for all your needs.
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

export default PcbDesignPage;
