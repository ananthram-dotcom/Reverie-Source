import React from 'react';
import { motion } from 'framer-motion';

const ValueCard = ({ icon: Icon, title, subtitle, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group bg-gradient-to-b from-reverie-darkwalnut to-reverie-deep/50 p-8 rounded-2xl border border-reverie-brass/30 hover:border-reverie-brass transition-all duration-300 shadow-purple hover:shadow-brass relative overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative brass corner frame accents */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-reverie-brass/30 group-hover:border-reverie-gold transition-colors" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-reverie-brass/30 group-hover:border-reverie-gold transition-colors" />

      <div>
        <div className="w-14 h-14 rounded-xl bg-reverie-deep border border-reverie-brass/50 flex items-center justify-center text-reverie-brass mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-reverie-brass group-hover:to-reverie-gold group-hover:text-reverie-darkwalnut transition-all duration-300 shadow-brass">
          <Icon className="w-7 h-7" />
        </div>

        <span className="text-xs font-serif font-semibold text-reverie-brass tracking-widest uppercase block mb-1">
          {subtitle}
        </span>
        
        <h3 className="text-2xl font-serif font-bold text-reverie-cream group-hover:text-reverie-gold transition-colors mb-4">
          {title}
        </h3>

        <p className="text-sm text-reverie-cream/75 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-reverie-brass/15 flex items-center text-xs font-semibold text-reverie-brass tracking-wider uppercase group-hover:translate-x-1 transition-transform">
        <span>Explore Principle</span>
        <span className="ml-2">→</span>
      </div>
    </motion.div>
  );
};

export default ValueCard;
