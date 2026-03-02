import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Layers, Settings } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Briefcase,
      title: 'Consulting',
      description: 'MHK Tech Inc delivers efficient custom-made solutions, providing services from planning to development to support.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We collaborate closely with client teams, aligning business requirements with shared goals to ensure success.'
    },
    {
      icon: Layers,
      title: 'End-to-End Solutions',
      description: 'We offer comprehensive data management, analysis, and ML/AI engineering services, ensuring timeliness and security.'
    },
    {
      icon: Settings,
      title: 'Adaptive Model',
      description: 'Building unique, highly available, and scalable cloud solutions for client needs while actively seeking new challenges.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-white">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            How MHK Tech Inc Accelerates <br className="hidden md:block" />
            <span className="text-emerald-600">Client Transformation</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Strategic partnership that goes beyond simple vendor relationships to deliver bespoke, end-to-end solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="mb-8 flex justify-center">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-emerald-100 group-hover:bg-emerald-50 transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-emerald-700 transition-colors">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;