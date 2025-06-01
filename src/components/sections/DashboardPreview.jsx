import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, AlertCircle, CheckCircle, Globe } from 'lucide-react';
import alertData from '../../data/alertData';
import statsData from '../../data/statsData';

const DashboardPreview = () => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'bg-red-900 text-red-200';
      case 'High': return 'bg-orange-900 text-orange-200';
      case 'Medium': return 'bg-yellow-900 text-yellow-200';
      default: return 'bg-green-900 text-green-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-blue-900 text-blue-200';
      case 'New': return 'bg-green-900 text-green-200';
      case 'Resolved': return 'bg-gray-900 text-gray-200';
      default: return 'bg-purple-900 text-purple-200';
    }
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-red/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unified Command Center
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Monitor all threats from a single dashboard with real-time analytics and automated response capabilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Dashboard Container */}
          <div className="bg-gradient-to-br from-brand-gray to-brand-light rounded-2xl border border-brand-red/20 overflow-hidden shadow-2xl">
            {/* Dashboard Header */}
            <div className="bg-brand-dark/80 backdrop-blur-sm px-8 py-6 border-b border-brand-red/20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Threat Overview</h3>
                  <p className="text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Last updated: 2 minutes ago
                  </p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <button className="px-6 py-2.5 bg-gradient-to-r from-brand-red to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all">
                    Export Report
                  </button>
                  <button className="px-6 py-2.5 border border-brand-red text-brand-red rounded-lg hover:bg-brand-red hover:text-white transition-all">
                    Settings
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/50 rounded-xl p-6 border border-brand-red/20"
                >
                  <BarChart3 className="w-6 h-6 text-brand-red mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{statsData.totalAlerts}</div>
                  <div className="text-gray-400 text-sm">Total Alerts</div>
                  <div className="text-green-400 text-xs mt-2 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12% this week
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/50 rounded-xl p-6 border border-orange-500/20"
                >
                  <AlertCircle className="w-6 h-6 text-orange-400 mb-3" />
                  <div className="text-3xl font-bold text-orange-400 mb-1">{statsData.activeThreats}</div>
                  <div className="text-gray-400 text-sm">Active Threats</div>
                  <div className="text-red-400 text-xs mt-2 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +5% today
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/50 rounded-xl p-6 border border-green-500/20"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
                  <div className="text-3xl font-bold text-green-400 mb-1">{statsData.resolvedCases}</div>
                  <div className="text-gray-400 text-sm">Resolved</div>
                  <div className="text-green-400 text-xs mt-2 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +18% this week
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/50 rounded-xl p-6 border border-blue-500/20"
                >
                  <Globe className="w-6 h-6 text-blue-400 mb-3" />
                  <div className="text-3xl font-bold text-blue-400 mb-1">{statsData.platforms}</div>
                  <div className="text-gray-400 text-sm">Platforms</div>
                  <div className="text-blue-400 text-xs mt-2">All monitored</div>
                </motion.div>
              </div>

              {/* Alert Table */}
              <div className="bg-black/50 rounded-xl overflow-hidden border border-brand-red/20">
                <div className="px-6 py-4 border-b border-brand-red/20">
                  <h4 className="text-lg font-semibold text-white">Recent Alerts</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-brand-gray/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Alert ID</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Severity</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Platform</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-red/10">
                      {alertData.slice(0, 5).map((alert) => (
                        <tr key={alert.id} className="hover:bg-brand-gray/30 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-gray-300">#{alert.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-white">{alert.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 text-xs rounded-full ${getSeverityColor(alert.severity)}`}>
                              {alert.severity}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-300">{alert.platform}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(alert.status)}`}>
                              {alert.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-brand-red hover:text-red-400 text-sm font-medium transition-colors">
                              Investigate →
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-red/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;