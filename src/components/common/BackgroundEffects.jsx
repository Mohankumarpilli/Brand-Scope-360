import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-brand-red/5 via-transparent to-transparent"></div>
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default BackgroundEffects;