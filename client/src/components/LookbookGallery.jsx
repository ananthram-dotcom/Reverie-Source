import React from 'react';
import { Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LookbookGallery = () => {
  const lookbookItems = [
    {
      title: 'Frame 01 — Corner Bank Shot Hoodie',
      subtitle: '480GSM Cream French Terry',
      image: '/images/bank_shot_cream_hoodie.png',
      tag: 'NEW DROP'
    },
    {
      title: 'Frame 02 — Slate Leather Companion Clip',
      subtitle: 'Cognac Leather & Brass Clip',
      image: '/images/leather_chalk_holder.png',
      tag: 'ACCESSORY'
    },
    {
      title: 'Frame 03 — 9-Ball Corduroy Trucker',
      subtitle: 'Deep Purple Corduroy & Brass Buttons',
      image: '/images/corduroy_trucker_jacket.png',
      tag: 'OUTERWEAR'
    },
    {
      title: 'Frame 04 — Cueist Hall Lifestyle',
      subtitle: 'Reverie Apparel on the Brunswick Table',
      image: '/images/billiards_lookbook_lifestyle.png',
      tag: 'ARCHIVAL'
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-reverie-brass/15 pb-4 gap-3">
        <div>
          <div className="flex items-center space-x-2 text-emerald-300 text-[11px] font-sans font-bold tracking-widest uppercase mb-1">
            <Camera className="w-3.5 h-3.5 text-reverie-brass" />
            <span>1928 Hall Archival Lookbook</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-reverie-cream">
            The Cueist Lookbook Spread
          </h2>
        </div>

        <Link
          to="/products"
          className="text-xs font-bold text-reverie-brass hover:text-reverie-gold flex items-center space-x-1.5 transition-colors uppercase tracking-wider"
        >
          <span>Explore All 12 Drops</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Horizontal Grid Spread */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {lookbookItems.map((item, idx) => (
          <div
            key={idx}
            className="group bg-reverie-card rounded-xl border border-reverie-brass/20 overflow-hidden shadow-sm flex flex-col justify-between"
          >
            <div className="aspect-[4/5] overflow-hidden bg-reverie-darkwalnut relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-reverie-darkwalnut/90 border border-reverie-brass/35 text-reverie-brass text-[9px] font-mono font-bold px-2 py-0.5 rounded">
                {item.tag}
              </span>
            </div>

            <div className="p-4 border-t border-reverie-brass/15 bg-reverie-card">
              <h4 className="font-serif font-bold text-sm text-reverie-cream group-hover:text-reverie-brass transition-colors">
                {item.title}
              </h4>
              <p className="text-[11px] text-reverie-cream/65 font-sans mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LookbookGallery;
