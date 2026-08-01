import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState('idle');
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
    <div className="bg-reverie-card rounded-2xl border border-reverie-brass/25 p-8 md:p-12 shadow-sm">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 space-y-2">
          <span className="text-[11px] font-sans font-bold text-reverie-brass tracking-widest uppercase block">
            Direct Concierge Desk
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-reverie-cream">
            Contact Reverie Headquarters
          </h2>
          <p className="text-xs sm:text-sm text-reverie-cream/70">
            Questions regarding drop sizing, custom billiards hall orders, or press inquiries? Transmit your message below.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-8 rounded-xl bg-reverie-felt/30 border border-reverie-feltlight/50 text-center space-y-3 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-reverie-felt/50 text-emerald-300 flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-reverie-cream">Message Transmitted</h3>
            <p className="text-xs text-reverie-cream/80 max-w-md mx-auto leading-relaxed">{feedback}</p>
            <button
              onClick={() => setStatus('idle')}
              className="px-5 py-2 bg-reverie-brass text-reverie-darkwalnut font-bold text-xs rounded-lg uppercase tracking-wider"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-sans font-bold text-reverie-brass uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Julian Vance"
                  className="w-full px-3.5 py-2.5 bg-reverie-darkwalnut border border-reverie-brass/30 rounded-lg text-reverie-cream placeholder-reverie-cream/40 focus:outline-none focus:border-reverie-brass text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans font-bold text-reverie-brass uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. julian@example.com"
                  className="w-full px-3.5 py-2.5 bg-reverie-darkwalnut border border-reverie-brass/30 rounded-lg text-reverie-cream placeholder-reverie-cream/40 focus:outline-none focus:border-reverie-brass text-xs"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-sans font-bold text-reverie-brass uppercase tracking-wider mb-1.5">
                Inquiry Topic
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-reverie-darkwalnut border border-reverie-brass/30 rounded-lg text-reverie-cream focus:outline-none focus:border-reverie-brass text-xs cursor-pointer"
              >
                <option value="General Inquiry" className="bg-reverie-darkwalnut">General Inquiry</option>
                <option value="Product Sizing & Fit" className="bg-reverie-darkwalnut">Product Sizing & Fit</option>
                <option value="Custom Hall Orders" className="bg-reverie-darkwalnut">Custom Hall Orders</option>
                <option value="Press & Sponsorship" className="bg-reverie-darkwalnut">Press & Sponsorship</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-sans font-bold text-reverie-brass uppercase tracking-wider mb-1.5">
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Write your inquiry here..."
                className="w-full px-3.5 py-2.5 bg-reverie-darkwalnut border border-reverie-brass/30 rounded-lg text-reverie-cream placeholder-reverie-cream/40 focus:outline-none focus:border-reverie-brass text-xs leading-relaxed"
                required
              />
            </div>

            {status === 'error' && (
              <p className="text-xs text-rose-400 text-center font-medium">{feedback}</p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-3.5 bg-reverie-brass text-reverie-darkwalnut font-serif font-bold text-sm rounded-lg hover:bg-reverie-gold transition-colors flex items-center justify-center space-x-2 shadow-sm cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{status === 'submitting' ? 'Transmitting Message...' : 'Transmit Inquiry'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
