import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MOCK_BLOGS } from '../data/mockData';
import { Calendar, Clock, ArrowLeft, Share2, Disc } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = MOCK_BLOGS.find((b) => b.slug === slug) || MOCK_BLOGS[0];

  return (
    <>
      <Helmet>
        <title>{`${post.title} — Reverie Journal`}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-reverie-brass hover:text-reverie-gold transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal Entries</span>
        </Link>

        {/* Header Metadata */}
        <div className="space-y-4 text-center sm:text-left">
          <span className="inline-block bg-reverie-deep border border-reverie-brass/40 text-reverie-brass text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-reverie-cream leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-y border-reverie-brass/20 text-xs text-reverie-cream/70">
            <div className="flex items-center space-x-4">
              <span className="font-serif italic text-reverie-brass">By {post.author}</span>
              <span>•</span>
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

            <button
              onClick={() => alert('Article link copied to clipboard!')}
              className="flex items-center space-x-1.5 text-reverie-brass hover:text-reverie-gold transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-reverie-brass/30 shadow-purple">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Body */}
        <div
          className="prose prose-invert max-w-none text-reverie-cream/85 font-sans leading-relaxed text-base space-y-6 [&_h3]:text-2xl [&_h3]:font-serif [&_h3]:font-bold [&_h3]:text-reverie-cream [&_blockquote]:border-l-4 [&_blockquote]:border-reverie-brass [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-reverie-brass [&_p.lead]:text-lg [&_p.lead]:text-reverie-cream"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer */}
        <div className="pt-12 border-t border-reverie-brass/20 bg-reverie-darkwalnut/80 p-8 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-reverie-deep border border-reverie-brass flex items-center justify-center text-reverie-brass">
              <Disc className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-reverie-cream text-base">Reverie Editorial Board</h4>
              <p className="text-xs text-reverie-cream/60">Dedicated to preserving cue sports heritage & applied geometry.</p>
            </div>
          </div>
          <Link
            to="/products"
            className="px-5 py-2.5 bg-reverie-brass text-reverie-darkwalnut font-bold text-xs rounded-lg hover:brightness-110 uppercase tracking-wider shadow-brass flex-shrink-0"
          >
            Explore Reverie Merch
          </Link>
        </div>

      </article>
    </>
  );
};

export default BlogDetail;
