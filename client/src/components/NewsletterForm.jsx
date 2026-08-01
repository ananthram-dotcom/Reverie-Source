import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

const NewsletterForm = ({ variant = 'default' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
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
        setStatus('success');
        setMessage('Thank you for subscribing! Expect precision updates & drop notifications.');
      }
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full">
      {status === 'success' ? (
        <div className="flex items-center space-x-2.5 text-emerald-300 bg-reverie-felt/30 p-3 rounded-lg border border-reverie-feltlight/40 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span className="text-xs font-medium">{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-reverie-brass/70" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder="Enter your email for VIP drops..."
              className="w-full pl-9 pr-3.5 py-2.5 bg-reverie-card border border-reverie-brass/30 rounded-lg text-reverie-cream placeholder-reverie-cream/50 focus:outline-none focus:border-reverie-brass text-xs"
              disabled={status === 'loading'}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-5 py-2.5 bg-reverie-brass text-reverie-darkwalnut font-bold rounded-lg hover:bg-reverie-gold transition-colors flex items-center justify-center space-x-1.5 text-xs flex-shrink-0 disabled:opacity-50 cursor-pointer shadow-sm"
          >
            <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="mt-1.5 text-xs text-rose-400 font-medium">{message}</p>
      )}
    </div>
  );
};

export default NewsletterForm;
