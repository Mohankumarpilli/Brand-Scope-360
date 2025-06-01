import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Mail, Users, Shield, AlertCircle } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Social Media Monitoring",
      description: "Track brand mentions and impersonations across all major social platforms",
      platforms: ["Instagram", "LinkedIn", "Twitter", "Facebook", "TikTok", "YouTube"],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Protection",
      description: "Detect fake apps and protect your brand on app stores",
      platforms: ["Google Play", "App Store", "APK Sites", "Third-party Stores"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Phishing Detection",
      description: "Identify and takedown phishing websites targeting your customers",
      platforms: ["Email Phishing", "Website Clones", "Domain Squatting", "Typosquatting"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Executive Protection",
      description: "Monitor and protect executive profiles from impersonation",
      platforms: ["LinkedIn", "Email Spoofing", "Social Engineering", "Deep Fakes"],
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-brand-gray/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Protection Across All Channels
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-powered platform monitors and protects your brand across every digital touchpoint.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
              
              <div className="relative bg-brand-light/50 backdrop-blur-sm p-6 rounded-xl border border-brand-red/20 hover:border-brand-red/50 transition-all h-full">
                <div className="text-brand-red mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                
                <div className="space-y-2">
                  {solution.platforms.map((platform, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Shield className="w-3 h-3 text-brand-red" />
                      <span className="text-gray-300">{platform}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;