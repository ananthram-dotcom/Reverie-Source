import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogCard = ({ post, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      className="group bg-reverie-darkwalnut/90 rounded-2xl border border-reverie-brass/25 hover:border-reverie-brass transition-all duration-300 overflow-hidden shadow-purple hover:shadow-brass flex flex-col justify-between"
    >
      <div>
        {/* Cover Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-reverie-deep/50 border-b border-reverie-brass/20">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <span className="absolute top-3 left-3 bg-reverie-deep/90 border border-reverie-brass/60 text-reverie-brass text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md backdrop-blur-md">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center space-x-4 text-xs text-reverie-cream/60 mb-3">
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-reverie-brass" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-reverie-brass" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <Link to={`/blog/${post.slug}`}>
            <h3 className="font-serif font-bold text-xl text-reverie-cream group-hover:text-reverie-gold transition-colors line-clamp-2 mb-3 leading-snug">
              {post.title}
            </h3>
          </Link>

          <p className="text-sm text-reverie-cream/70 line-clamp-3 leading-relaxed mb-4">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Footer link */}
      <div className="p-6 pt-0 border-t border-reverie-brass/10 flex items-center justify-between mt-4">
        <span className="text-xs text-reverie-brass font-medium italic">By {post.author}</span>
        <Link
          to={`/blog/${post.slug}`}
          className="text-xs font-bold text-reverie-brass group-hover:text-reverie-gold flex items-center space-x-1.5 transition-colors uppercase tracking-wider"
        >
          <span>Read Entry</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
