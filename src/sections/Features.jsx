import React from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';

const featuresData = [
  {
    title: 'PCB DESIGN',
    path: '/pcb-design',
    description: 'We specialize in designing high-quality, reliable PCBs tailored to your project\'s requirements, ensuring optimized performance and durability for your devices.',
    icon: (
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="flex justify-center"
      >
        <MemoryOutlinedIcon sx={{ fontSize: 64, color: 'white' }} />
      </motion.div>
    )
  },
  {
    title: 'IC PACKAGING DESIGN',
    path: '/ic-packaging',
    description: 'Our team designs cutting-edge IC packaging solutions that offer maximum protection, heat dissipation, and reliability for your integrated circuits.',
    icon: (
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="flex justify-center"
      >
        <LayersOutlinedIcon sx={{ fontSize: 64, color: 'white' }} />
      </motion.div>
    )
  },
  {
    title: 'SI & PI ANALYSIS',
    path: '/sipi-analysis',
    description: 'We provide comprehensive Signal Integrity (SI) and Power Integrity (PI) analysis to ensure optimal performance, minimal interference, and efficient power delivery.',
    icon: (
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="flex justify-center"
      >
        <GraphicEqOutlinedIcon sx={{ fontSize: 64, color: 'white' }} />
      </motion.div>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = [
  { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } } },
  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } },
  { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } } }
];

const renderBackgroundSVG = (index) => {
  switch (index) {
    case 0:
      return (
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="0" y="0" width="100" height="100" fill="transparent" stroke="#A66B3F" strokeWidth="0.1" opacity="0.3" />
          <rect x="35" y="35" width="30" height="30" rx="2" stroke="#A66B3F" strokeWidth="1" fill="rgba(166,107,63,0.1)" />
          <motion.rect
            x="40" y="40" width="20" height="20" rx="1" fill="#A66B3F"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
          {[
            "M 35 45 L 20 45 L 10 35", "M 35 55 L 20 55 L 10 65", "M 65 45 L 80 45 L 90 35",
            "M 65 55 L 80 55 L 90 65", "M 45 35 L 45 20 L 35 10", "M 55 35 L 55 20 L 65 10",
            "M 45 65 L 45 80 L 35 90", "M 55 65 L 55 80 L 65 90"
          ].map((path, i) => (
            <React.Fragment key={i}>
              <path d={path} fill="transparent" stroke="#A66B3F" strokeWidth="0.3" opacity="0.4" />
              <motion.path
                d={path} fill="transparent" stroke="#A66B3F" strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 15, delay: i * 1, ease: "easeInOut" }}
              />
            </React.Fragment>
          ))}
          {[
            { x: 10, y: 35 }, { x: 10, y: 65 }, { x: 90, y: 35 }, { x: 90, y: 65 },
            { x: 35, y: 10 }, { x: 65, y: 10 }, { x: 35, y: 90 }, { x: 65, y: 90 }
          ].map((node, i) => (
            <motion.circle
              key={`node-${i}`} cx={node.x} cy={node.y} r="1.5" fill="#A66B3F"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 10, delay: i * 1.5, ease: "easeInOut" }}
            />
          ))}
        </svg>
      );
    case 1:
      return (
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Base substrate */}
          <motion.polygon
            points="50,75 85,60 50,45 15,60"
            fill="transparent"
            stroke="#A66B3F"
            strokeWidth="0.5"
            animate={{ opacity: [0.2, 0.6, 0.2], y: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          {/* Interposer layer */}
          <motion.polygon
            points="50,65 75,55 50,45 25,55"
            fill="rgba(166,107,63,0.1)"
            stroke="#A66B3F"
            strokeWidth="0.5"
            animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 8, delay: 1, ease: "easeInOut" }}
          />
          {/* Top Die */}
          <motion.polygon
            points="50,55 65,48 50,41 35,48"
            fill="rgba(166,107,63,0.3)"
            stroke="#A66B3F"
            strokeWidth="1"
            animate={{ opacity: [0.5, 1, 0.5], y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 8, delay: 2, ease: "easeInOut" }}
          />
          {/* Connecting lines / wirebonds */}
          {[
            { d: "M 35 48 L 25 55", delay: 0 },
            { d: "M 65 48 L 75 55", delay: 1 },
            { d: "M 50 41 L 50 30", delay: 2 },
            { d: "M 50 55 L 50 65", delay: 1.5 }
          ].map((line, i) => (
            <motion.path
              key={`line-${i}`}
              d={line.d}
              fill="transparent"
              stroke="#A66B3F"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              animate={{ opacity: [0, 1, 0], pathLength: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 6, delay: line.delay, ease: "linear" }}
            />
          ))}
          {/* Glowing nodes */}
          <motion.circle
            cx="50" cy="30" r="1.5"
            fill="#A66B3F"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <motion.circle
            cx="50" cy="65" r="1.5"
            fill="#A66B3F"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </svg>
      );
    case 2:
      return (
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <g opacity="0.2">
            {Array.from({ length: 10 }).map((_, i) => (
              <React.Fragment key={i}>
                <line x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#A66B3F" strokeWidth="0.2" />
                <line x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#A66B3F" strokeWidth="0.2" />
              </React.Fragment>
            ))}
          </g>
          {[
            "M 0 30 C 30 30 30 70 50 70 C 70 70 70 30 100 30", "M 0 35 C 30 35 30 75 50 75 C 70 75 70 35 100 35"
          ].map((path, i) => (
            <React.Fragment key={`diff-${i}`}>
              <path d={path} fill="transparent" stroke="#A66B3F" strokeWidth="0.3" opacity="0.4" />
              <motion.path
                d={path} fill="transparent" stroke="#A66B3F" strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 12.5, delay: i * 1.5, ease: "easeInOut" }}
              />
            </React.Fragment>
          ))}
          <g transform="translate(25, 10) scale(0.5)">
            <rect x="0" y="0" width="100" height="40" rx="2" stroke="#A66B3F" strokeWidth="1" fill="rgba(15,61,62,0.8)" opacity="0.8" />
            {[
              "M 10 20 Q 50 -10 90 20", "M 10 20 Q 50 50 90 20", "M 10 20 Q 30 0 50 20 T 90 20", "M 10 20 Q 30 40 50 20 T 90 20"
            ].map((eyePath, i) => (
              <motion.path
                key={`eye-${i}`} d={eyePath} fill="transparent" stroke="#A66B3F" strokeWidth="1"
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ repeat: Infinity, duration: 5 + i * 1, ease: "easeInOut" }}
              />
            ))}
          </g>
        </svg>

      );
    default: return null;
  }
};

const Features = () => {
  return (
    <div className="bg-[#FBF8F1] pt-20 md:pt-[140px] pb-24 md:pb-32 relative overflow-hidden font-sans">
      <Container maxWidth="lg">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-6 font-sans text-[#0F3D3E]">
            Your Blueprint. Our Expertise.
          </h2>
          <p className="max-w-[800px] mx-auto text-gray-700 text-lg leading-relaxed font-sans">
            CuNest provides end-to-end interconnect solutions tailored to the electronics industry. By combining advanced engineering with deep manufacturing knowledge, we bridge the gap between your concepts and market-ready hardware, optimizing both performance and time-to-market.
          </p>
        </div>

        {/* Animated Cards Grid */}
        <motion.div
          id="expertise"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {featuresData.map((feature, index) => (
            <motion.div key={index} variants={itemVariants[index]} className="h-full">
              <Link to={feature.path} className="block h-full no-underline">
                <div
                  className="group relative h-full rounded-2xl overflow-hidden bg-[#0F3D3E] shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  {/* Background Animated SVG Layer - Hides on hover to clear text readability. Hidden entirely on mobile. */}
                  <div className="hidden md:block absolute inset-0 z-0 origin-center group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                    {renderBackgroundSVG(index)}
                  </div>

                  {/* Foreground Layer - Fully transparent background so SVG is visible. All text is white. */}
                  <div className="relative z-10 h-full p-8 flex flex-col items-center text-center">
                    <div className="mb-6 drop-shadow-md">
                      {feature.icon}
                    </div>
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold tracking-wide font-sans text-white drop-shadow-md">
                        {feature.title}
                      </h3>
                      <div className="w-12 h-1 bg-[#A66B3F] mt-2 mx-auto rounded-full"></div>
                    </div>
                    <p className="text-white/90 group-hover:text-white font-medium leading-relaxed mb-8 flex-grow font-sans drop-shadow-sm transition-colors">
                      {feature.description}
                    </p>
                    <div className="text-[#A66B3F] group-hover:text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2 font-sans transition-colors duration-300">
                      Learn More <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Features;
