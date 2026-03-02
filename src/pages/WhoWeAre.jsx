

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Briefcase, Mail, ArrowRight, Linkedin } from 'lucide-react';

const WhoWeAre = () => {
  const [activeLeader, setActiveLeader] = useState(null);

  // Events Data
  const events = [
    {
      title: 'Tech Meet Up 2024',
      date: 'March 15, 2024',
      image: '/img2.jpeg',
      description: 'Annual technology conference'
    },
    {
      title: 'Tech Meet Up 2024',
      date: 'March 15, 2024',
      image: '/img3.jpeg',
      description: 'Interactive AI training sessions'
    },
    {
      title: 'Campus Recruitment Drive',
      date: 'August 03, 2025',
      image: '/img1.jpeg',
      description: 'Connecting campus talent with real-world career opportunities.'
    },
    {
      title: 'Campus Recruitment Drive',
      date: 'August 03, 2025',
      image: '/img1.jpeg',
      description: 'Connecting campus talent with real-world career opportunities.'
    }
  ];

  // Leaders Data
  const leaders = [
    {
      name: 'Rajesh Kota',
      role: 'Director',
      image: '/img3.jpeg',
      bio: 'Our experienced leadership team drives innovation and excellence across all aspects of our business, bringing decades of combined expertise in technology and business strategy.',
      linkedin: 'https://www.linkedin.com/in/kotarajesh/'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent)]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-slate-900">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Who We Are
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-emerald-800 max-w-3xl mx-auto"
            >
              Innovators, Problem Solvers, Technology Leaders
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                About <span className="text-emerald-600">MHK Tech</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                MHK TECH INC has been delivering enterprise cloud solutions to our clients across the globe. We have also deployed several industry first solutions that can be tailored to the client needs.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At MHK TECH INC, we take care of our clients software-based needs regarding application development as well as strategies to make yourself famous on the internet. We provide tailored needs to any and all businesses around the world after understanding the company's core ethics and working methods in-depth.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We ensure that we maintain a close ecosystem of understanding our customer's needs and delivering the required service in the most efficient way. With products that take care of all the steps from laying out the initial business plan to conducting the final stage of customer service, we make sure that your company can deliver on time and with customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Additional Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-slate-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold mb-6 text-slate-900">Our Expertise</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              MHK TECH INC has top level IT teams that expertise in making state of the art products that help your business to work efficiently. We are expert in developing custom applications that will help in the growth and financial planning of the entity.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We also provide services that will help your company's core values grow on an ethical level with your employees dedicated to the company's work ethics and goals.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We deal with providing product based services regarding application development as well as we provide consultancy services. Contact us anytime for more information about the products and services we deal in, and we make sure that we will reach you back as soon as possible; usually we revert back within a few hours to maximum 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full mb-4">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-600 font-semibold text-sm">Latest Events</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Events</h2>
            <p className="text-xl text-slate-600">Connecting, learning, and innovating together</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-emerald-700 text-sm font-semibold mb-1">{event.date}</p>
                    <h3 className="text-slate-900 font-bold text-lg">{event.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-slate-600 text-sm">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section id="leaders" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-600 font-semibold text-sm">Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Meet Our Leaders</h2>
            <p className="text-xl text-slate-600">The visionaries driving our success</p>
          </motion.div>

          <div className="flex justify-center">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveLeader(index)}
                onMouseLeave={() => setActiveLeader(null)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group w-full max-w-sm"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-white to-transparent transition-opacity ${activeLeader === index ? 'opacity-90' : 'opacity-60'}`}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                  <p className="text-emerald-600 font-semibold text-sm mb-3">{leader.role}</p>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm font-medium">Connect</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-600 font-semibold text-sm">Join Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Build Your Career with <span className="text-emerald-600">MHK Tech</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We're always looking for talented individuals who are passionate about technology and innovation. Join a team that values creativity, collaboration, and continuous growth. At MHK Tech, you'll work on challenging projects, learn from industry experts, and make a real impact.
            </p>
            <p className="text-lg text-slate-600 mb-10">
              Whether you're a seasoned professional or just starting your career, we offer competitive compensation, comprehensive benefits, and opportunities for advancement in a dynamic, supportive environment.
            </p>
            <a href="/join-us">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3">
                Explore Career Opportunities
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-cta" className="py-24 px-6 bg-gradient-to-r from-emerald-50 to-teal-50 text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Mail className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-sm text-emerald-800">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Start a Conversation</h2>
            <p className="text-xl mb-8 leading-relaxed text-emerald-800">
              Have a project in mind? Want to learn more about our services? Our team is ready to help you transform your business with innovative technology solutions. Reach out today and let's discuss how we can work together.
            </p>
            <p className="text-lg mb-10 text-emerald-700">
              We respond to all inquiries within 24 hours.
            </p>
            <a href="/contact">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-3">
                Contact Us Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;