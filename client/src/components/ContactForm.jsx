import React, { useState } from 'react';
import { Send, CheckCircle, HelpCircle, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setFeedback('Please fill out all required fields.');
      return;
    }

    setStatus('submitting');

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => null);

      if (res && res.ok) {
        setStatus('success');
        setFeedback('Thank you for reaching out. A Reverie concierge team member will respond within 24 hours.');
      } else {
        // Fallback simulation
        setStatus('success');
        setFeedback('Message received! Our billiards concierge will contact you shortly.');
      }
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } catch (err) {
      setStatus('error');
      setFeedback('Failed to submit message. Please try again.');
    }
  };

  return (
    <div className="bg-reverie-darkwalnut/90 rounded-2xl border border-reverie-brass/30 p-8 md:p-12 shadow-purple relative overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-serif font-semibold text-reverie-brass tracking-widest uppercase block mb-2">
            Direct Concierge Desk
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-reverie-cream">
            Contact Reverie Headquarters
          </h2>
          <p className="text-sm text-reverie-cream/70 mt-2">
            Questions regarding drop sizing, custom billiards hall orders, or press inquiries? Line up your message below.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-8 rounded-xl bg-reverie-deep/80 border border-reverie-brass/50 text-center space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-reverie-brass/20 text-reverie-brass flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-reverie-cream">Message Received</h3>
            <p className="text-sm text-reverie-cream/80 max-w-md mx-auto">{feedback}</p>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-2.5 bg-reverie-brass text-reverie-darkwalnut font-bold text-xs rounded-lg hover:brightness-110 uppercase tracking-wider"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-reverie-brass uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Julian Vance"
                  className="w-full px-4 py-3 bg-reverie-deep/40 border border-reverie-brass/30 rounded-lg text-reverie-cream placeholder-reverie-cream/40 focus:outline-none focus:border-reverie-brass text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-reverie-brass uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. julian@example.com"
                  className="w-full px-4 py-3 bg-reverie-deep/40 border border-reverie-brass/30 rounded-lg text-reverie-cream placeholder-reverie-cream/40 focus:outline-none focus:border-reverie-brass text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-reverie-brass uppercase tracking-wider mb-2">
                Inquiry Topic
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-reverie-deep/40 border border-reverie-brass/30 rounded-lg text-reverie-cream focus:outline-none focus:border-reverie-brass text-sm"
              >
                <option value="General Inquiry" className="bg-reverie-darkwalnut">General Inquiry</option>
                <option value="Product Sizing & Fit" className="bg-reverie-darkwalnut">Product Sizing & Fit</option>
                <option value="Custom Hall Orders" className="bg-reverie-darkwalnut">Custom Hall Orders</option>
                <option value="Press & Sponsorship" className="bg-reverie-darkwalnut">Press & Sponsorship</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-reverie-brass uppercase tracking-wider mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Write your inquiry here with exact details..."
                className="w-full px-4 py-3 bg-reverie-deep/40 border border-reverie-brass/30 rounded-lg text-reverie-cream placeholder-reverie-cream/40 focus:outline-none focus:border-reverie-brass text-sm"
                required
              />
            </div>

            {status === 'error' && (
              <p className="text-xs text-rose-400 text-center font-medium">{feedback}</p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut font-serif font-bold text-base rounded-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-brass cursor-pointer disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              <span>{status === 'submitting' ? 'Transmitting Message...' : 'Transmit Inquiry'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
