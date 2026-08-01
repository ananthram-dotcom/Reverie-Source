import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Disc, Sparkles, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Greetings! I'm the Reverie Billiards Concierge AI. Ask me anything about our merchandise, geometry principles, sizing, or brand story.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const suggestionPills = [
    "What sizes do you recommend?",
    "Tell me about Reverie's story",
    "What is your top bestseller?"
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          }))
        })
      }).catch(() => null);

      if (response && response.ok) {
        const data = await response.json();
        const botReply = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: data.reply || "I am always here to assist with Reverie billiards inquiries.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, botReply]);
      } else {
        // Fallback intelligent persona response for local dev preview
        setTimeout(() => {
          let replyText = "At Reverie, every garment is measured with the precision of a 3-rail bank shot. For sizing recommendations, our French Terry hoodies feature a structured, relaxed drape.";
          
          const lower = query.toLowerCase();
          if (lower.includes('size') || lower.includes('fit')) {
            replyText = "Our hoodies and crewnecks feature a relaxed vintage fit. If you prefer a tailored look, we recommend true-to-size; for a classic oversized 90s drop, size up one step!";
          } else if (lower.includes('story') || lower.includes('history') || lower.includes('about')) {
            replyText = "Reverie was born from an obsession with vintage 1920s billiards halls, where precision geometry met timeless style. We pair deep purple tones with cream, brass, and walnut wood aesthetics.";
          } else if (lower.includes('bestseller') || lower.includes('recommend') || lower.includes('top')) {
            replyText = "Our #1 most coveted drop is 'The Cueist Heavyweight French Terry Hoodie' paired with the 1928 Solid Brass 8-Ball Keyring!";
          }

          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              sender: 'bot',
              text: replyText,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
          setIsTyping(false);
        }, 800);
        return;
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: "I am having trouble connecting to the rack right now. Please reach out to our concierge via the Contact section below!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[92vw] sm:w-[380px] h-[520px] bg-reverie-darkwalnut/95 backdrop-blur-md rounded-2xl border border-reverie-brass/40 shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            {/* Window Header */}
            <div className="p-4 bg-gradient-to-r from-reverie-deep to-reverie-darkwalnut border-b border-reverie-brass/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-reverie-brass/20 border border-reverie-brass/60 flex items-center justify-center text-reverie-brass">
                  <Disc className="w-4 h-4 animate-spin-slow" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-reverie-cream">
                    Reverie Cueist AI
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-medium flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block mr-1" />
                    Online & Ready
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-reverie-cream/70 hover:text-reverie-brass rounded-md transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-grow overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] rounded-xl p-3 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut font-medium rounded-br-none shadow-md'
                        : 'bg-reverie-deep/70 border border-reverie-brass/25 text-reverie-cream rounded-bl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-[9px] opacity-60 block text-right mt-1 font-sans">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-reverie-deep/70 border border-reverie-brass/25 text-reverie-brass rounded-xl p-3 text-xs flex items-center space-x-2">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    <span>Calculating precision reply...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestion Pills */}
            <div className="px-3 py-2 bg-reverie-deep/30 border-t border-reverie-brass/10 flex gap-2 overflow-x-auto no-scrollbar">
              {suggestionPills.map((pill, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(pill)}
                  className="text-[10px] bg-reverie-darkwalnut border border-reverie-brass/30 text-reverie-cream/80 hover:text-reverie-brass hover:border-reverie-brass px-2.5 py-1 rounded-full whitespace-nowrap transition-colors flex-shrink-0"
                >
                  {pill}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <div className="p-3 bg-reverie-darkwalnut border-t border-reverie-brass/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about sizing, merch, or story..."
                  className="flex-grow px-3 py-2 bg-reverie-deep/50 border border-reverie-brass/30 rounded-lg text-reverie-cream placeholder-reverie-cream/40 focus:outline-none focus:border-reverie-brass text-xs"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-2 bg-reverie-brass text-reverie-darkwalnut rounded-lg hover:brightness-110 disabled:opacity-40 transition-colors flex-shrink-0 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-gradient-to-r from-reverie-deep via-reverie-accent to-reverie-deep border border-reverie-brass text-reverie-brass hover:text-reverie-gold rounded-full shadow-brass hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer group"
        aria-label="Open AI Assistant"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};

export default ChatbotWidget;
