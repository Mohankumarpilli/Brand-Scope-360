import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Platform: [
      { label: 'Alert Management', href: '#' },
      { label: 'Threat Intelligence', href: '#' },
      { label: 'Takedown Orchestration', href: '#' },
      { label: 'Brand Protection', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Support Center', href: '#' },
      { label: 'System Status', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-brand-dark border-t border-brand-red/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-brand-red/50">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-brand-red rounded-xl blur-md opacity-50 animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-brand-red bg-clip-text text-transparent">
                  Brand Scope 360
                </h3>
                <p className="text-xs text-gray-400">Brand Intelligence Platform</p>
              </div>
            </motion.div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Advanced brand intelligence platform that monitors, detects, and eliminates 
              digital threats across all channels in real-time.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center hover:bg-brand-red transition-colors group"
                  aria-label={social.label}
                >
                  <span className="text-brand-red group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-brand-red transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-brand-red/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-brand-red" />
              <span className="text-gray-400">hello@brandscope360.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-brand-red" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-brand-red" />
              <span className="text-gray-400">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-red/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Brand Scope 360. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                Security
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;