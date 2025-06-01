import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Database, Globe, Shield, AlertTriangle } from 'lucide-react';

const ThreatStats = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const threats = [
    {
      icon: <Database className="w-8 h-8" />,
      value: 650,
      suffix: 'M',
      label: 'Credentials in Compromised Devices',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: 11,
      suffix: 'B',
      label: 'Breach Accounts',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      value: 47,
      suffix: 'M',
      label: 'Phishing Address Database',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: 992,
      suffix: 'M',
      label: 'Darkweb Contents',
      color: 'from-red-500 to-red-700',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-red/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We Know What Hackers Know About You
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We help security teams to detect digital risks and reduce the attack surface landscape.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {threats.map((threat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-brand-gray to-brand-light p-8 rounded-2xl border border-brand-red/20 hover:border-brand-red/50 transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${threat.color} mb-4`}>
                  {threat.icon}
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {inView && (
                    <>
                      +<CountUp end={threat.value} duration={2.5} />
                      {threat.suffix}
                    </>
                  )}
                </div>
                <p className="text-gray-400">{threat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreatStats;