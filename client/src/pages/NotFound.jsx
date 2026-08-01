import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReverieLogo from '../components/ReverieLogo';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Off the Cushion (404) — Reverie Billiards</title>
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center pt-28 pb-16 px-4 text-center">
        <div className="max-w-md mx-auto space-y-5 bg-reverie-card p-8 sm:p-10 rounded-2xl border border-reverie-brass/30 shadow-sm">
          <div className="w-14 h-14 rounded-full bg-reverie-darkwalnut border border-reverie-brass/40 flex items-center justify-center mx-auto">
            <ReverieLogo className="w-7 h-7" />
          </div>
          <span className="text-[11px] font-sans font-bold text-reverie-brass uppercase tracking-widest block">
            Scratch Shot • 404 Error
          </span>
          <h1 className="text-3xl font-serif font-bold text-reverie-cream">
            Off the Cushion
          </h1>
          <p className="text-xs text-reverie-cream/70 leading-relaxed">
            The angle you followed led out of bounds. The page you are looking for has been pocketed or moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-reverie-brass text-reverie-darkwalnut font-bold text-xs rounded-lg hover:bg-reverie-gold uppercase tracking-wider shadow-sm transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Head String (Home)</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
