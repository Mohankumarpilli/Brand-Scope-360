import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  const benefits = [
    "14-day free trial",
    "No credit card required",
    "Full platform access",
    "24/7 support included"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-brand-red/10 to-transparent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated circles */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Secure Your Brand?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Join thousands of companies protecting their digital presence with Brand Scope 360.
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-brand-red to-red-700 text-white text-lg font-semibold rounded-xl overflow-hidden shadow-2xl shadow-brand-red/30"
            >
              <span className="relative z-10 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
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
              className="px-8 py-4 border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-black transition-all rounded-xl"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;