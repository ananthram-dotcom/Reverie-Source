import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="group bg-reverie-card rounded-xl border border-reverie-brass/20 hover:border-reverie-brass/60 transition-all duration-300 overflow-hidden shadow-sm flex flex-col justify-between"
    >
      <div>
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-reverie-darkwalnut/80 border-b border-reverie-brass/15">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-reverie-felt text-emerald-200 border border-reverie-feltlight/60 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow-sm z-10">
              {product.badge}
            </span>
          )}

          {/* Quick View Link */}
          <Link
            to={`/products/${product.slug}`}
            className="absolute inset-0 bg-[#18121E]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-reverie-cream font-serif font-bold text-xs"
          >
            <span className="bg-reverie-card border border-reverie-brass/50 px-3.5 py-2 rounded-lg flex items-center space-x-1.5 shadow-md">
              <span>View Product</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-reverie-brass" />
            </span>
          </Link>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <div className="flex items-center justify-between text-[11px] text-reverie-brass font-medium mb-1">
            <span className="uppercase tracking-widest font-sans">{product.category}</span>
            <div className="flex items-center space-x-1 text-amber-400">
              <Star className="w-3 h-3 fill-amber-400" />
              <span className="font-semibold text-reverie-cream">{product.rating}</span>
            </div>
          </div>

          <Link to={`/products/${product.slug}`}>
            <h3 className="font-serif font-bold text-base text-reverie-cream group-hover:text-reverie-brass transition-colors line-clamp-1 mb-1.5">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-reverie-cream/70 line-clamp-2 leading-relaxed mb-3 font-sans">
            {product.description}
          </p>
        </div>
      </div>

      {/* Footer / Price & Add to Cart */}
      <div className="p-5 pt-0 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-reverie-cream/50 block uppercase font-sans">Price</span>
          <span className="text-lg font-serif font-bold text-reverie-brass">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <button
          onClick={() => addToCart(product, 1, product.sizes?.[0] || 'M')}
          className="px-3.5 py-2 bg-reverie-darkwalnut border border-reverie-brass/40 hover:bg-reverie-brass hover:text-reverie-darkwalnut text-reverie-cream text-xs font-bold rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
