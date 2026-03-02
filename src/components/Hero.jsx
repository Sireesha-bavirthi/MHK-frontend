import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, Send, Bot } from 'lucide-react';
import ChatInterface from '@/components/ChatInterface';

const Hero = () => {
  const [showChat, setShowChat] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pendingMessage, setPendingMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setPendingMessage(searchQuery.trim()); // Save before clearing
      setShowChat(true);
      setSearchQuery(''); // Clear the input after submitting
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Professional Grid Background - Light */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

      {/* Subtle Accent Glows - Light */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge Removed */}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-slate-900"
          >
            Transforming Your{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-[length:200%_auto] animate-shimmer">
                Digital Future
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Accelerate your business growth with our innovative Data Engineering, Cloud Solutions, and Custom AI Strategies tailored for modern enterprises.
          </motion.p>

          {/* Smart Search Bar (Pill Shaped) */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onSubmit={handleSearchSubmit}
            className="max-w-2xl mx-auto mb-12 relative z-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`relative transition-transform duration-500 ${isHovered ? 'scale-[1.02]' : ''}`}>
              <div className="relative bg-white rounded-full flex items-center p-2.5 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                {/* Chatbot Icon */}
                <div className="pl-4 pr-2 flex items-center justify-center text-emerald-600">
                  <Bot className="w-5 h-5" />
                </div>

                {/* Input */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What are the services and products?"
                  className="flex-1 bg-transparent border-none text-slate-800 placeholder-slate-600 font-medium focus:ring-0 text-lg py-3 px-2 outline-none"
                  aria-label="Search or ask a question"
                />

                {/* Send Button */}
                <button
                  type="submit"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full p-3 transition-colors duration-300 ml-2 flex items-center justify-center mr-1"
                  aria-label="Submit query"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.form>
          {/* CTA Buttons Removed */}
        </div>
      </div>

      {showChat && (
        <ChatInterface onClose={() => setShowChat(false)} initialMessage={pendingMessage} />
      )}
    </section>
  );
};

export default Hero;