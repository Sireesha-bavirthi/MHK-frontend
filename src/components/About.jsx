import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative AI and technology solutions that drive measurable results and sustainable growth.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the global leader in enterprise AI solutions, setting the standard for innovation, quality, and customer success.'
    },
    {
      icon: Lightbulb,
      title: 'Our Values',
      description: 'Innovation, integrity, excellence, and collaboration guide everything we do for our clients and partners.'
    }
  ];

  const companies = [
    { name: 'TRA TECH', logo: '/logos/tra-tech.png' },
    { name: 'Pfizer', logo: '/logos/pfizer.png' },
    { name: 'Bioventus', logo: '/logos/bioventus.png' },
    { name: 'Trinity Health System', logo: '/logos/trinity.png' },
    { name: 'Valleywise Health', logo: '/logos/valleywise.png' },
    { name: 'BHP', logo: '/logos/bhp.png' },
    { name: 'EP', logo: '/logos/ep.png' },
    { name: 'EBSO', logo: '/logos/ebso.png' },
  ];

  // Duplicate the companies array for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
                About <span className="text-emerald-600">MHK Tech</span>
             </h2>
             <p className="text-xl text-slate-600 leading-loose">
               Founded with a vision to transform businesses through technology, MHK Tech Inc has grown into a trusted partner for enterprises worldwide. Our team of expert engineers, data scientists, and consultants brings decades of combined experience in delivering cutting-edge solutions.
             </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-lg">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trusted Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Trusted by <span className="text-emerald-600">Industry Leaders</span>
          </h3>
          
          {/* Scrolling Logo Container */}
          <div className="relative overflow-hidden py-8 bg-gradient-to-r from-emerald-50 via-emerald-100/30 to-emerald-50 rounded-2xl border border-emerald-200">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emerald-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-emerald-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling Content */}
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-16 px-8"
                animate={{
                  x: [0, `-${100 / 2}%`],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
                style={{
                  willChange: 'transform'
                }}
              >
                {[...companies, ...companies, ...companies].map((company, index) => (
                  <motion.div
                    key={`${company.name}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-24 w-48 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group/logo"
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.closest('.flex').style.animationPlayState = 'paused';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.closest('.flex').style.animationPlayState = 'running';
                    }}
                  >
                    <div className="relative">
                      {/* Placeholder for company logo - replace with actual images */}
                      <div className="bg-white rounded-lg border-2 border-slate-200 group-hover/logo:border-emerald-500 shadow-sm group-hover/logo:shadow-lg p-4 transition-all duration-300 flex items-center justify-center h-20 w-40">
                        <span className="font-bold text-slate-700 group-hover/logo:text-emerald-600 text-lg transition-colors">
                          {company.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;