import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Disc, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Off the Cushion (404) — Reverie Billiards</title>
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center pt-24 pb-16 px-4 text-center">
        <div className="max-w-md mx-auto space-y-6 bg-reverie-darkwalnut/90 p-8 sm:p-12 rounded-3xl border border-reverie-brass/30 shadow-purple">
          <div className="w-16 h-16 rounded-full bg-reverie-deep border border-reverie-brass flex items-center justify-center mx-auto text-reverie-brass">
            <Disc className="w-8 h-8 opacity-70" />
          </div>
          <span className="text-xs font-serif font-bold text-reverie-brass uppercase tracking-widest block">
            Scratch Shot • 404 Error
          </span>
          <h1 className="text-4xl font-serif font-black text-reverie-cream">
            Off the Cushion
          </h1>
          <p className="text-sm text-reverie-cream/70">
            The angle you followed led out of bounds. The page you are looking for has been pocketed or moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut font-bold text-xs rounded-xl shadow-brass hover:brightness-110 uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Head String (Home)</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
