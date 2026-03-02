import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OurProducts = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-100">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-slate-900">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl text-emerald-800 max-w-3xl mx-auto">
              Innovative solutions designed to simplify complex data challenges
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-6">
                <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Featured Product
                </span>
              </div>
              <div className="mb-6">
                <img
                  src="/Toreo_data.jpeg"
                  alt="Toreo Data Logo"
                  className="h-20 w-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-8 text-emerald-600">
                Toreo Data Connector
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Toreo Data simplifies complex data integration and synchronization challenges. As an advanced ODBC driver, it connects SAP BusinessObjects Universe with Power BI, QlikView, Qlik Sense, Spotfire, and Tableau.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Toreo Data ensures seamless data synchronization and data accessibility across your tools, breaking down data silos for unified insights.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { label: 'Real-time Sync', icon: '⚡' },
                  { label: 'Universal Compatibility', icon: '🔗' },
                  { label: 'Secure Connections', icon: '🔒' },
                  { label: 'Easy Setup', icon: '🚀' }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <span className="text-3xl">{feature.icon}</span>
                    <span className="font-medium text-slate-700">{feature.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105">
                  Request Demo
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-all">
                  Learn More
                </button>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                {!isVideoPlaying ? (
                  // Video Thumbnail with Play Button
                  <div className="relative w-full h-full">
                    <video
                      className="w-full h-full object-cover"
                      src="/file.mp4"
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button
                        onClick={handlePlayVideo}
                        className="group relative"
                        aria-label="Play video"
                      >
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500">
                          <svg
                            className="w-10 h-10 text-emerald-600 group-hover:text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <div className="absolute -inset-4 bg-white/20 rounded-full animate-ping opacity-75"></div>
                      </button>
                    </div>
                  </div>
                ) : (
                  // Playing Video
                  <video
                    className="w-full h-full object-cover"
                    src="/file.mp4"
                    controls
                    autoPlay
                    onEnded={() => setIsVideoPlaying(false)}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Multiple Data Sources',
                description: 'Connect to databases, APIs, cloud services, and legacy systems with a single unified interface.'
              },
              {
                title: 'BI Tool Integration',
                description: 'Native support for Power BI, Tableau, Qlik, Spotfire, and other leading analytics platforms.'
              },
              {
                title: 'High Performance',
                description: 'Optimized for speed with caching, parallel processing, and intelligent query routing.'
              },
              {
                title: 'Enterprise Security',
                description: 'Bank-level encryption, OAuth2 authentication, and comprehensive audit logging.'
              },
              {
                title: 'Easy Configuration',
                description: 'Intuitive UI and pre-built connectors for popular data sources eliminate complex setup.'
              },
              {
                title: 'Scalable Architecture',
                description: 'Designed to grow with your organization from startup to enterprise scale.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">Supported Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Power BI', 'Tableau', 'Qlik', 'Spotfire', 'Excel', 'Python', 'R Studio', 'Jupyter'].map((platform, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">{platform[0]}</span>
                </div>
                <h3 className="font-semibold text-slate-700">{platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-teal-50 text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Data Connectivity?</h2>
          <p className="text-xl mb-8 text-emerald-800">
            Experience the power of seamless data integration with Toreo Data.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-all">
              Contact Sales
            </button>
          </div>
          <p className="mt-8 text-emerald-800 text-lg">Innovate. Accelerate. Transform.</p>
        </div>
      </section>
    </>
  );
};

export default OurProducts;