// src/components/pages/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, User, Shield } from 'lucide-react';
import DashboardPreview from '../sections/DashboardPreview';
import ThreatStats from '../sections/ThreatStats';
import BackgroundEffects from '../common/BackgroundEffects';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundEffects />
      
      {/* Dashboard Header */}
      <header className="fixed w-full top-0 z-50 bg-black/95 backdrop-blur-lg border-b border-brand-red/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/')}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-brand-red/50">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-brand-red rounded-xl blur-md opacity-50 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-brand-red bg-clip-text text-transparent">
                  Brand Scope 360
                </h1>
                <p className="text-xs text-gray-400">Dashboard</p>
              </div>
            </motion.div>
            
            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <User className="w-5 h-5" />
                <span className="text-sm">{user.email}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-brand-red border border-brand-red hover:bg-brand-red hover:text-white transition-all rounded-lg"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-8">
              Welcome to Brand Scope 360 Dashboard
            </h1>
          </motion.div>
        </div>
        
        <ThreatStats />
        <DashboardPreview />
      </main>
    </div>
  );
};

export default Dashboard;