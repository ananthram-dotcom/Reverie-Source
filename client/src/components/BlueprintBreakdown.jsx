import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../data/mockData';
import { ArrowRight, Check, Compass, Layers, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlueprintBreakdown = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProduct = MOCK_PRODUCTS[selectedIdx] || MOCK_PRODUCTS[0];

  return (
    <div className="bg-reverie-card rounded-2xl border border-reverie-brass/25 p-6 sm:p-12 shadow-md relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-reverie-brass/15 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald-300 text-[11px] font-sans font-bold tracking-widest uppercase mb-1">
            <Compass className="w-3.5 h-3.5 text-reverie-brass" />
            <span>Technical Drafting & Blueprint</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-reverie-cream">
            Anatomy of a Reverie Drop
          </h2>
        </div>

        {/* Tab selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {MOCK_PRODUCTS.slice(0, 4).map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedIdx(idx)}
              className={`px-3.5 py-1.5 rounded-lg text-[11px] font-sans font-bold tracking-wider uppercase transition-all flex-shrink-0 cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-reverie-brass text-reverie-darkwalnut shadow-sm'
                  : 'bg-reverie-darkwalnut text-reverie-cream/70 hover:text-reverie-cream border border-reverie-brass/20'
              }`}
            >
              {p.category}
            </button>
          ))}
        </div>
      </div>

      {/* Blueprint Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Image with blueprint pins */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-square rounded-xl overflow-hidden border border-reverie-brass/30 bg-reverie-darkwalnut relative">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-full object-cover"
              />

              {/* Technical Spec Pins */}
              <div className="absolute top-6 left-6 bg-reverie-darkwalnut/90 border border-reverie-brass/40 px-3 py-1 rounded text-[10px] font-mono text-reverie-brass">
                SPEC: {activeProduct.slug.toUpperCase()}
              </div>

              <div className="absolute bottom-6 right-6 bg-reverie-felt/90 border border-reverie-feltlight px-3 py-1 rounded text-[10px] font-mono text-emerald-300">
                VERIFIED MILLIMETER PRECISION
              </div>
            </div>
          </div>

          {/* Details breakdown */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-[10px] font-sans font-bold text-reverie-brass uppercase tracking-widest block mb-1">
                Drop Item No. 0{selectedIdx + 1}
              </span>
              <h3 className="text-2xl font-serif font-bold text-reverie-cream mb-2">
                {activeProduct.name}
              </h3>
              <p className="text-xs sm:text-sm text-reverie-cream/80 leading-relaxed font-sans">
                {activeProduct.description}
              </p>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-reverie-brass/15">
              <h4 className="text-[11px] font-sans font-bold text-reverie-brass uppercase tracking-widest flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-reverie-brass" />
                <span>Craftsmanship Checklist</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeProduct.details.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 bg-reverie-darkwalnut/70 p-2.5 rounded-lg border border-reverie-brass/15 text-xs text-reverie-cream/90"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span className="line-clamp-1">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-reverie-cream/50 uppercase block">Price</span>
                <span className="text-xl font-serif font-bold text-reverie-brass">
                  ${activeProduct.price.toFixed(2)}
                </span>
              </div>

              <Link
                to={`/products/${activeProduct.slug}`}
                className="px-5 py-2.5 bg-reverie-brass text-reverie-darkwalnut font-serif font-bold text-xs rounded-lg hover:bg-reverie-gold transition-colors flex items-center space-x-1.5 cursor-pointer shadow-sm"
              >
                <span>Inspect Full Spec</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default BlueprintBreakdown;
