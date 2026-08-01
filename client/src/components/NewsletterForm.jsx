import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

const NewsletterForm = ({ variant = 'default' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    
    try {
      // API call placeholder - falls back cleanly until backend connects
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }).catch(() => null);

      if (response && response.ok) {
        setStatus('success');
        setMessage('Welcome to the Reverie Inner Circle. Check your inbox soon.');
      } else {
        // Fallback simulation for client preview
        setStatus('success');
        setMessage('Thank you for subscribing! Expect precision updates & VIP releases.');
      }
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const isBanner = variant === 'banner';

  return (
    <div className={`w-full ${isBanner ? '' : ''}`}>
      {status === 'success' ? (
        <div className="flex items-center space-x-3 text-emerald-400 bg-reverie-darkwalnut/80 p-4 rounded-lg border border-reverie-brass/40 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium text-reverie-cream">{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-reverie-brass/70" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder="Enter your email for VIP drops..."
              className="w-full pl-10 pr-4 py-3 bg-reverie-darkwalnut/90 border border-reverie-brass/40 rounded-lg text-reverie-cream placeholder-reverie-cream/50 focus:outline-none focus:border-reverie-brass focus:ring-1 focus:ring-reverie-brass transition-colors text-sm"
              disabled={status === 'loading'}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut font-semibold rounded-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2 text-sm shadow-brass flex-shrink-0 disabled:opacity-50 cursor-pointer"
          >
            <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="mt-2 text-xs text-rose-400">{message}</p>
      )}
    </div>
  );
};

export default NewsletterForm;
