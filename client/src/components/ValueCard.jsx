import React from 'react';
import { motion } from 'framer-motion';

const ValueCard = ({ icon: Icon, title, subtitle, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-reverie-card p-7 rounded-xl border border-reverie-brass/20 hover:border-reverie-brass/60 transition-all duration-300 shadow-sm flex flex-col justify-between"
    >
      <div>
        <div className="w-11 h-11 rounded-lg bg-reverie-darkwalnut border border-reverie-brass/35 flex items-center justify-center text-reverie-brass mb-5 group-hover:bg-reverie-felt group-hover:text-emerald-300 group-hover:border-reverie-feltlight transition-colors">
          <Icon className="w-5 h-5" />
        </div>

        <span className="text-[10px] font-sans font-semibold text-reverie-brass tracking-widest uppercase block mb-1">
          {subtitle}
        </span>
        
        <h3 className="text-xl font-serif font-bold text-reverie-cream group-hover:text-reverie-brass transition-colors mb-3">
          {title}
        </h3>

        <p className="text-xs text-reverie-cream/75 leading-relaxed font-sans">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-reverie-brass/10 flex items-center text-[11px] font-semibold text-reverie-brass tracking-wider uppercase">
        <span>Explore Principle</span>
        <span className="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
};

export default ValueCard;
