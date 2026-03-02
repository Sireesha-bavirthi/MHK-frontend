import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* CTA Card with Background */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
                alt="Contact Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-emerald-50/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
                  Ready to Transform <br />
                  <span className="text-emerald-600">Your Business?</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Let's discuss how our enterprise solutions can accelerate your digital transformation journey.
                </p>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-xl"
                  >
                    Get in Touch
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </Link>

                <p className="mt-8 text-slate-500 text-sm">
                  Join 250+ enterprises who trust MHK Tech Inc
                </p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;