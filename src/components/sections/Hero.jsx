import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Eye, Lock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const stats = [
    { value: 1.2, suffix: 'M+', label: 'Threats Detected', icon: <AlertTriangle className="w-5 h-5" /> },
    { value: 99.9, suffix: '%', label: 'Accuracy Rate', icon: <Shield className="w-5 h-5" /> },
    { value: 24, suffix: '/7', label: 'Monitoring', icon: <Eye className="w-5 h-5" /> },
    { value: 50, suffix: '+', label: 'Platforms', icon: <Lock className="w-5 h-5" /> },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-red rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-20, 20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Scanning line effect */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"
          animate={{
            y: ['-100vh', '100vh'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 bg-brand-red/10 border border-brand-red/30 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse mr-2"></span>
            <span className="text-brand-red text-sm font-medium">Advanced AI-Powered Protection</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block text-white mb-2">Defend Your</span>
            <span className="block bg-gradient-to-r from-brand-red via-red-500 to-red-600 bg-clip-text text-transparent">
              Digital Brand
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Advanced brand intelligence platform that monitors, detects, and eliminates 
            digital threats across all channels in real-time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-brand-red to-red-700 text-white text-lg font-semibold rounded-xl overflow-hidden shadow-2xl shadow-brand-red/30"
            >
              <span className="relative z-10">Start Free Trial</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-brand-red text-brand-red text-lg font-semibold hover:bg-brand-red hover:text-white transition-all rounded-xl"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-brand-gray to-brand-light p-6 rounded-2xl border border-brand-red/20 hover:border-brand-red/50 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative">
                    <div className="text-brand-red mb-3">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {inView && (
                        <>
                          <CountUp end={stat.value} duration={2.5} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                          {stat.suffix}
                        </>
                      )}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;