import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Disc, ShieldCheck } from 'lucide-react';

const ManifestoBlock = () => {
  return (
    <div className="bg-reverie-card border border-reverie-brass/25 rounded-2xl p-8 lg:p-14 relative overflow-hidden shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column - Large Editorial Quote & Manifesto */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-reverie-felt/30 border border-reverie-feltlight/50 text-emerald-300 text-[11px] font-sans font-bold uppercase tracking-widest">
            <Disc className="w-3.5 h-3.5 text-reverie-brass" />
            <span>The Cueist Manifesto</span>
          </div>

          <blockquote className="text-2xl sm:text-4xl font-serif font-bold text-reverie-cream leading-tight">
            "A player who guesses angles will win a frame. A player who respects the geometry will define the era."
          </blockquote>

          <p className="text-xs sm:text-sm text-reverie-cream/80 leading-relaxed font-sans">
            We built Reverie for cueists who see billiards as an art form of calculation, patience, and style. Every drop features millimeter-verified pattern cuts, 480gsm organic fabrics, and custom aged brass hardware.
          </p>

          <div className="pt-2 flex items-center space-x-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-reverie-brass text-reverie-darkwalnut font-serif font-bold text-xs rounded-lg hover:bg-reverie-gold transition-colors flex items-center space-x-1.5 shadow-sm"
            >
              <span>Read Archival History</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column - Vintage Archival Stats Ledger */}
        <div className="lg:col-span-5 bg-reverie-darkwalnut p-6 sm:p-8 rounded-xl border border-reverie-brass/20 space-y-5">
          <h4 className="text-xs font-sans font-bold text-reverie-brass uppercase tracking-widest border-b border-reverie-brass/15 pb-2">
            Archival Specs & Ledger
          </h4>

          <div className="space-y-4 font-mono text-xs">
            <div className="flex justify-between items-center border-b border-reverie-brass/10 pb-2">
              <span className="text-reverie-cream/60">FOUNDED:</span>
              <span className="text-reverie-cream font-bold">1928 EST.</span>
            </div>

            <div className="flex justify-between items-center border-b border-reverie-brass/10 pb-2">
              <span className="text-reverie-cream/60">FABRIC WEIGHT:</span>
              <span className="text-emerald-300 font-bold">480 GSM COTTON</span>
            </div>

            <div className="flex justify-between items-center border-b border-reverie-brass/10 pb-2">
              <span className="text-reverie-cream/60">HARDWARE SPEC:</span>
              <span className="text-reverie-brass font-bold">SOLID C36000 BRASS</span>
            </div>

            <div className="flex justify-between items-center border-b border-reverie-brass/10 pb-2">
              <span className="text-reverie-cream/60">RAIL ACCURACY:</span>
              <span className="text-reverie-cream font-bold">45.0° EXACT VECTOR</span>
            </div>

            <div className="flex justify-between items-center pt-1">
              <span className="text-reverie-cream/60">BATCH POLICY:</span>
              <span className="text-reverie-brass font-bold">NUMBERED DROPS</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ManifestoBlock;
