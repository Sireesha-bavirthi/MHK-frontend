import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Database, Zap, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: '01',
      icon: Brain,
      title: 'AI Solutions',
      description: 'Drive innovation and stay ahead of the competition with our AI Solutions.',
      tech: ['TensorFlow', 'PyTorch', 'OpenAI Enterprise'],
      link: '/data-science-ai'
    },
    {
      id: '02',
      icon: Database,
      title: 'Cloud Solutions',
      description: 'Streamline and scale business operations with our cloud-based solutions.',
      tech: ['Snowflake', 'Databricks', 'Apache Kafka'],
      link: '/cloud-solutions'
    },
    {
      id: '03',
      icon: Zap,
      title: 'IT Solutions',
      description: 'Boost productivity, maximize growth and minimize downtime with our comprehensive IT Services.',
      tech: ['UiPath', 'Power Automate', 'Custom Bots'],
      link: '/it-solutions'
    },
    {
      id: '04',
      icon: Cloud,
      title: 'Data Engineering',
      description: 'Manage, process and analyze your data at scale.',
      tech: ['AWS', 'Azure', 'Kubernetes'],
      link: '/data-engineering'
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-100" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Core <span className="text-emerald-600">Competencies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-xl mx-auto"
          >
            Precision-engineered technical capabilities designed for market leaders.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Interactive List */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

            <div className="space-y-8 relative">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveService(index)}
                  className={`relative pl-0 md:pl-16 group cursor-pointer transition-all duration-300`}
                >
                  {/* Active Indicator Dot */}
                  <div className={`absolute left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white transition-all duration-300 hidden md:block z-10 ${activeService === index ? 'bg-emerald-600 scale-125 shadow-lg shadow-emerald-200' : 'bg-slate-300'
                    }`} />

                  <Link to={service.link} className="block">
                    <div className={`p-6 rounded-2xl transition-all duration-300 border ${activeService === index
                        ? 'bg-white border-emerald-100 shadow-xl translate-x-4'
                        : 'bg-transparent border-transparent hover:bg-white/50'
                      }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className={`text-sm font-mono font-bold transition-colors ${activeService === index ? 'text-emerald-600' : 'text-slate-400'
                            }`}>
                            {service.id}
                          </span>
                          <h3 className={`text-xl font-bold transition-colors ${activeService === index ? 'text-slate-900' : 'text-slate-500'
                            }`}>
                            {service.title}
                          </h3>
                        </div>
                        <ArrowRight className={`w-5 h-5 transition-all duration-300 ${activeService === index ? 'text-emerald-600 opacity-100 translate-x-0' : 'text-slate-300 opacity-0 -translate-x-4'
                          }`} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Dynamic Content Display */}
          <div className="relative h-[500px] w-full hidden lg:block">
            <AnimatePresence mode="wait">
              <Link to={services[activeService].link} className="block h-full">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0 bg-white border border-slate-200 rounded-[2rem] p-12 overflow-hidden shadow-2xl flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-emerald-50 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-emerald-100">
                      {React.createElement(services[activeService].icon, {
                        className: "w-8 h-8 text-emerald-600"
                      })}
                    </div>

                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-3xl font-bold text-slate-900 mb-6"
                    >
                      {services[activeService].title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-slate-600 text-lg leading-relaxed mb-8"
                    >
                      {services[activeService].description}
                    </motion.p>
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-wrap gap-3">
                      {services[activeService].tech.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + (idx * 0.05) }}
                          className="px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatePresence>

            {/* Background layers for depth */}
            <div className="absolute inset-0 bg-slate-200 rounded-[2rem] rotate-3 scale-95 -z-10 translate-y-4 opacity-50" />
            <div className="absolute inset-0 bg-emerald-100 rounded-[2rem] -rotate-2 scale-90 -z-20 translate-y-8 opacity-40" />
          </div>

          {/* Mobile View for Content (shown only on small screens) */}
          <Link to={services[activeService].link} className="lg:hidden mt-8 block">
            <div className="p-8 bg-white border border-slate-200 rounded-2xl text-slate-900 cursor-pointer hover:scale-[1.02] transition-transform duration-300 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-50 rounded-xl">
                  {React.createElement(services[activeService].icon, { className: "w-6 h-6 text-emerald-600" })}
                </div>
                <h3 className="text-2xl font-bold">{services[activeService].title}</h3>
              </div>
              <p className="text-slate-600 mb-6">{services[activeService].description}</p>
              <div className="flex flex-wrap gap-2">
                {services[activeService].tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;