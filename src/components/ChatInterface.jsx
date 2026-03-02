import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, HelpCircle, ChevronRight, Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Component for streaming typing effect
const TypingText = ({ text, speed = 10, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const chunkSize = Math.max(1, Math.floor(text.length / 120)); // Render more chars at a time for long responses
    const interval = setInterval(() => {
      i += chunkSize;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) {
        setDisplayedText(text); // Ensure full text is shown
        clearInterval(interval);
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <div className="text-[16px] leading-relaxed text-slate-700 whitespace-pre-wrap">
      {displayedText}
    </div>
  );
};

const ChatInterface = ({ onClose, initialMessage }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const initialized = useRef(false);
  const sessionId = useRef(null); // Store session ID for multi-turn conversations
  const { toast } = useToast();

  const faqs = [
    "What industries do you serve?",
    "How does your AI implementation process work?",
    "Do you offer ongoing support contracts?",
    "What are your security compliance standards?"
  ];

  useEffect(() => {
    if (initialMessage && !initialized.current) {
      initialized.current = true;
      handleSendMessage(initialMessage);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleStreamingComplete = (id) => {
    setMessages(prev => prev.map(msg =>
      msg.id === id ? { ...msg, isStreaming: false } : msg
    ));
  };

  const handleSendMessage = async (message = input) => {
    if (!message.trim() || isTyping) return;

    const newMessageId = Date.now();
    setMessages(prev => [...prev, { id: newMessageId, role: 'user', content: message }]);
    setInput('');
    setIsTyping(true);

    try {
      // API call to custom AWS CloudFront endpoint
      const BACKEND_URL = import.meta.env.VITE_API_URL || 'https://d36rz451pmk28f.cloudfront.net/api/v1/agent/chat';

      const payload = { query: message };
      if (sessionId.current) {
        payload.session_id = sessionId.current;
        payload.meeting_session_id = sessionId.current;
      }

      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("🔍 Backend full response:", data);

      // Store session ID for maintaining conversation context
      if (data.meeting_session_id) {
        sessionId.current = data.meeting_session_id;
      }

      const responseText = data.reply || data.response || data.message || data.text || data.answer || data.output || data.result;
      const assistantMessageId = Date.now() + 1;

      setMessages(prev => [...prev, {
        id: assistantMessageId,
        role: 'assistant',
        content: responseText || 'I received your message but could not parse the response.',
        isStreaming: true
      }]);
    } catch (error) {
      console.error("Backend Error:", error);
      const assistantMessageId = Date.now() + 1;
      setMessages(prev => [...prev, {
        id: assistantMessageId,
        role: 'assistant',
        content: 'I apologize, but our backend service is currently unreachable. Please make sure the CloudFront URL is properly configured.',
        isStreaming: true
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div className="w-full h-full max-h-[85vh] max-w-4xl mx-auto flex flex-col bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden relative">


        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between sticky top-0 z-10 bg-white border-b border-slate-100 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-inner overflow-hidden">
                <img src="/MHK logo1_new.svg" alt="MHK Nova" className="w-8 h-8 object-contain" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></span>
            </div>
            <div>
              <span className="font-bold text-lg text-slate-800 tracking-tight block">MHK Nova</span>
              <p className="text-xs text-emerald-600 font-medium tracking-wide flex items-center gap-1.5 mt-0.5">
                Powered by Enterprise AI
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2.5 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm rounded-xl transition-all text-slate-400 hover:text-slate-600 hover:border-slate-300"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-8 space-y-8 custom-scrollbar bg-slate-50/50">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center shrink-0 mt-1 shadow-sm overflow-hidden p-1.5">
                    <img src="/MHK logo1_new.svg" alt="Nova" className="w-full h-full object-contain" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-6 py-4 rounded-3xl shadow-sm ${message.role === 'user'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-tr-sm shadow-emerald-600/20'
                    : 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm shadow-black/5'
                    }`}
                >
                  <div className="w-full">
                    {message.role === 'assistant' ? (
                      message.isStreaming ? (
                        <TypingText text={message.content} speed={8} onComplete={() => handleStreamingComplete(message.id)} />
                      ) : (
                        <div style={{ fontSize: '15px', lineHeight: '1.6' }} className="prose prose-sm max-w-none break-words text-slate-700 prose-p:my-0.5 prose-li:my-0 prose-ul:my-0.5 prose-ol:my-0.5">
                          <ReactMarkdown>
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      )
                    ) : (
                      <p className="text-[16px] leading-relaxed text-white whitespace-pre-wrap">
                        {message.content}
                      </p>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="flex gap-4 justify-start"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center shrink-0 mt-1 shadow-sm overflow-hidden p-1.5">
                  <img src="/MHK logo1_new.svg" alt="Nova Typing" className="w-full h-full object-contain" />
                </div>
                <div className="px-6 py-5 bg-white border border-slate-100 rounded-3xl rounded-tl-sm shadow-sm flex items-center gap-2">
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0 }}
                    className="w-2.5 h-2.5 rounded-full bg-slate-300"
                  />
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.15 }}
                    className="w-2.5 h-2.5 rounded-full bg-slate-300"
                  />
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                    className="w-2.5 h-2.5 rounded-full bg-slate-300"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 bg-white border-t border-slate-100">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex gap-3 max-w-4xl mx-auto relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-10 group-focus-within:opacity-25 transition duration-500"></div>
            <div className="relative flex-1 bg-white rounded-full flex items-center p-2 border border-slate-200 shadow-sm focus-within:border-emerald-500/50 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all duration-300">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={isTyping}
                className="w-full bg-transparent border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 px-5 py-3 text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Message input"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!input.trim() || isTyping}
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-full p-3.5 shadow-sm transition-colors flex items-center justify-center shrink-0 ml-2"
              >
                <Send className="w-5 h-5 -ml-0.5" />
              </motion.button>
            </div>
          </form>
          <div className="text-center mt-4">
            <span className="text-[12px] text-slate-400 font-medium tracking-wide">AI generated responses may be inaccurate.</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatInterface;