import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/BlogCard';
import { MOCK_BLOGS } from '../data/mockData';
import { BookOpen, Search } from 'lucide-react';

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = MOCK_BLOGS.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>The Cueist Journal — Reverie Billiards</title>
        <meta
          name="description"
          content="Explore articles on billiards science, 1920s hall history, geometry bank shots, and vintage fan apparel styling."
        />
      </Helmet>

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-serif font-semibold text-reverie-brass tracking-widest uppercase block">
            Official Publication
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-reverie-cream">
            The Cueist Journal
          </h1>
          <p className="text-sm text-reverie-cream/70">
            Deep dives into applied geometry, 1920s billiards hall history, and heritage apparel styling.
          </p>
        </div>

        {/* Search Toolbar */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-reverie-brass/70" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search journal articles by keyword or topic..."
            className="w-full pl-10 pr-4 py-3 bg-reverie-darkwalnut/90 border border-reverie-brass/30 rounded-xl text-reverie-cream placeholder-reverie-cream/40 focus:outline-none focus:border-reverie-brass text-xs shadow-purple"
          />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((post, idx) => (
            <BlogCard key={post.id} post={post} index={idx} />
          ))}
        </div>

      </div>
    </>
  );
};

export default BlogList;
