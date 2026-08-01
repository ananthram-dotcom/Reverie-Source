import React from 'react';
import { Disc } from 'lucide-react';

const MarqueeTicker = () => {
  const items = [
    "REVERIE BILLIARDS CO.",
    "EXACT GEOMETRY & ANGLE DISCIPLINE",
    "480GSM HEAVYWEIGHT FRENCH TERRY",
    "1928 HERITAGE CUEIST APPAREL",
    "SOLID AGED BRASS HARDWARE",
    "SMALL-BATCH NUMBERED DROPS",
    "FREE SHIPPING OVER $75",
  ];

  return (
    <div className="bg-reverie-card border-y border-reverie-brass/20 py-2.5 overflow-hidden select-none">
      <div className="flex space-x-8 whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="inline-flex items-center space-x-6">
            <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-reverie-brass uppercase">
              {text}
            </span>
            <Disc className="w-3 h-3 text-emerald-400 opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
