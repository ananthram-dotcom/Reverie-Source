import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogCard = ({ post, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
      className="group bg-reverie-card rounded-xl border border-reverie-brass/20 hover:border-reverie-brass/60 transition-all duration-300 overflow-hidden shadow-sm flex flex-col justify-between"
    >
      <div>
        {/* Cover Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-reverie-darkwalnut/80 border-b border-reverie-brass/15">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 bg-reverie-darkwalnut/90 border border-reverie-brass/40 text-reverie-brass text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded backdrop-blur-sm">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center space-x-3 text-[11px] text-reverie-cream/60 mb-2">
            <span className="flex items-center space-x-1">
              <Calendar className="w-3 h-3 text-reverie-brass" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3 h-3 text-reverie-brass" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <Link to={`/blog/${post.slug}`}>
            <h3 className="font-serif font-bold text-lg text-reverie-cream group-hover:text-reverie-brass transition-colors line-clamp-2 mb-2 leading-snug">
              {post.title}
            </h3>
          </Link>

          <p className="text-xs text-reverie-cream/70 line-clamp-3 leading-relaxed mb-3 font-sans">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Footer link */}
      <div className="p-5 pt-0 border-t border-reverie-brass/10 flex items-center justify-between mt-3">
        <span className="text-[11px] text-reverie-brass font-medium italic">By {post.author}</span>
        <Link
          to={`/blog/${post.slug}`}
          className="text-[11px] font-bold text-reverie-brass group-hover:text-reverie-cream flex items-center space-x-1 transition-colors uppercase tracking-wider"
        >
          <span>Read Entry</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
