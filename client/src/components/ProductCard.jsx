import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-reverie-darkwalnut/90 rounded-2xl border border-reverie-brass/25 hover:border-reverie-brass transition-all duration-300 overflow-hidden shadow-purple hover:shadow-brass flex flex-col justify-between"
    >
      <div>
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-reverie-deep/50 border-b border-reverie-brass/20">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-10">
              {product.badge}
            </span>
          )}

          {/* Quick View Overlay Link */}
          <Link
            to={`/products/${product.slug}`}
            className="absolute inset-0 bg-reverie-darkwalnut/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 text-reverie-cream font-serif font-bold text-sm"
          >
            <span className="bg-reverie-deep/90 border border-reverie-brass/60 px-4 py-2 rounded-lg flex items-center space-x-2 shadow-xl hover:bg-reverie-deep transition-colors">
              <span>View Product Details</span>
              <ArrowUpRight className="w-4 h-4 text-reverie-brass" />
            </span>
          </Link>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-center justify-between text-xs text-reverie-brass font-medium mb-1">
            <span className="uppercase tracking-widest">{product.category}</span>
            <div className="flex items-center space-x-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-semibold text-reverie-cream">{product.rating}</span>
              <span className="text-reverie-cream/50">({product.reviewsCount})</span>
            </div>
          </div>

          <Link to={`/products/${product.slug}`}>
            <h3 className="font-serif font-bold text-lg text-reverie-cream group-hover:text-reverie-gold transition-colors line-clamp-1 mb-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-reverie-cream/70 line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>
      </div>

      {/* Footer / Price & Add to Cart */}
      <div className="p-6 pt-0 flex items-center justify-between">
        <div>
          <span className="text-xs text-reverie-cream/50 block font-sans">Price</span>
          <span className="text-xl font-serif font-bold text-reverie-brass">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <button
          onClick={() => addToCart(product, 1, product.sizes?.[0] || 'M')}
          className="px-4 py-2.5 bg-reverie-deep border border-reverie-brass/50 hover:bg-gradient-to-r hover:from-reverie-brass hover:to-reverie-gold hover:text-reverie-darkwalnut text-reverie-cream text-xs font-bold rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-brass cursor-pointer group/btn"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-reverie-brass group-hover/btn:text-reverie-darkwalnut transition-colors" />
          <span>Add to Rack</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
