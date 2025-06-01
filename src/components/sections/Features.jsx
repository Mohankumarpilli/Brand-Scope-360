import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Search, Eye, Shield, Globe, Smartphone, Brain, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Real-Time Alert Management",
      description: "Monitor social media, mobile apps, phishing attempts, and suspicious domains with instant notifications.",
      capabilities: ["Social Media Monitoring", "Mobile App Detection", "Phishing Alerts", "Domain Surveillance"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Advanced Threat Intelligence",
      description: "OSINT capabilities combined with executive profile monitoring for comprehensive brand protection.",
      capabilities: ["OSINT Analysis", "Executive Protection", "Dark Web Monitoring", "Threat Analytics"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Takedown Orchestration",
      description: "Automated takedown workflows with legal documentation and multi-platform enforcement.",
      capabilities: ["Automated Workflows", "Legal Documentation", "Platform Integration", "Success Tracking"],
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Brand Protection Suite",
      description: "Complete brand intelligence with trademark monitoring, domain surveillance, and reputation management.",
      capabilities: ["Trademark Monitoring", "Reputation Management", "IP Protection", "Brand Analytics"],
      gradient: "from-purple-500 to-pink-600",
    }
  ];

  return (
    <section id="platform" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Brand Intelligence Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your brand from digital threats with our comprehensive monitoring, 
            detection, and response capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
              
              <div className="relative bg-gradient-to-br from-brand-gray to-brand-light p-8 rounded-2xl border border-brand-red/20 hover:border-brand-red/50 transition-all h-full">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${feature.gradient}`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-6">{feature.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {feature.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
                          <span className="text-sm text-gray-300">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;