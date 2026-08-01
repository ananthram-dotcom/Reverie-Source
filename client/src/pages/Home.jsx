import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ValueCard from '../components/ValueCard';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';
import ContactForm from '../components/ContactForm';
import NewsletterForm from '../components/NewsletterForm';
import { MOCK_PRODUCTS, MOCK_BLOGS } from '../data/mockData';
import { Target, Award, Sparkles, ArrowRight, Disc, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);
  const featuredBlogs = MOCK_BLOGS.slice(0, 2);

  return (
    <>
      <Helmet>
        <title>Reverie — Timeless Billiards Fan Apparel & Heritage Merch</title>
        <meta
          name="description"
          content="Reverie brings vintage billiards hall elegance to modern fan merch. Unyielding precision, 480gsm French Terry hoodies, brass keyrings, and heritage style."
        />
      </Helmet>

      <div className="space-y-24 pb-16">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-reverie-darkwalnut via-reverie-deep to-reverie-darkwalnut">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-reverie-accent/20 rounded-full blur-[140px] pointer-events-none" />

          {/* Background Geometry Lines */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B8860B_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-reverie-deep/80 border border-reverie-brass/50 text-reverie-brass text-xs font-serif tracking-widest uppercase shadow-brass"
            >
              <Disc className="w-4 h-4" />
              <span>Est. 1928 • Heritage Cueist Apparel</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-reverie-cream tracking-tight max-w-5xl mx-auto leading-[1.1]"
            >
              Timeless Billiards Apparel Crafted with <span className="text-transparent bg-clip-text bg-gradient-to-r from-reverie-brass via-reverie-gold to-reverie-cream">Exacting Geometry</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-xl text-reverie-cream/80 max-w-2xl mx-auto leading-relaxed font-sans"
            >
              Where the nostalgia of 1920s slate-and-felt halls meets modern millennial energy. Built for players who demand unyielding precision and understated luxury.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut font-serif font-bold text-base rounded-xl hover:brightness-110 transition-all flex items-center justify-center space-x-3 shadow-brass cursor-pointer"
              >
                <span>Shop Heritage Merch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 bg-reverie-deep/60 border border-reverie-brass/40 text-reverie-cream hover:bg-reverie-deep hover:border-reverie-brass font-serif font-semibold text-base rounded-xl transition-all flex items-center justify-center space-x-2 shadow-purple"
              >
                <span>The Reverie Story</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* BRAND VALUES SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-serif font-semibold text-reverie-brass tracking-widest uppercase">
              Our Core Craft Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-reverie-cream">
              Precision in Every Thread & Seam
            </h2>
            <p className="text-sm text-reverie-cream/70">
              Billiards is a game of millimeters. We apply that exact standards discipline to every fabric weight, brass hardware choice, and embroidered graphic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={Target}
              subtitle="Mathematical Rigor"
              title="Exact Geometry"
              description="From angle-of-incidence graphic layouts to seam stress testing, every design honors the mathematical purity of bank shots and rail defense."
              index={0}
            />
            <ValueCard
              icon={Award}
              subtitle="1920s Parlor Aesthetics"
              title="Heritage Materials"
              description="Heavyweight 480gsm French Terry cotton, hand-finished brass eyelets, real felt undertones, and vegetable-tanned leather accents."
              index={1}
            />
            <ValueCard
              icon={Sparkles}
              subtitle="Millennial Modern Energy"
              title="No Dust, Pure Vibe"
              description="Say goodbye to cheap polyester novelty tees. Reverie delivers elevated streetwear nostalgia designed to be worn anywhere."
              index={2}
            />
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-end justify-between mb-12 border-b border-reverie-brass/20 pb-6 gap-4">
            <div>
              <span className="text-xs font-serif font-semibold text-reverie-brass tracking-widest uppercase block mb-1">
                Curated Drop
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-reverie-cream">
                Featured Apparel & Hardware
              </h2>
            </div>
            <Link
              to="/products"
              className="text-sm font-bold text-reverie-brass hover:text-reverie-gold flex items-center space-x-2 transition-colors uppercase tracking-wider"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </section>

        {/* BRAND STORY TEASER BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-reverie-deep via-reverie-darkwalnut to-reverie-deep rounded-3xl border border-reverie-brass/40 p-8 md:p-16 relative overflow-hidden shadow-purple">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-serif font-semibold text-reverie-brass tracking-widest uppercase">
                  Inside Reverie Hall
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-reverie-cream leading-tight">
                  Born in the Shadows of Slate & Mahogany
                </h2>
                <p className="text-sm sm:text-base text-reverie-cream/80 leading-relaxed">
                  We started Reverie because we got tired of generic corporate merch that treated cue sports like a tavern joke. Billiards is an art form—a quiet battlefield of calculation, patience, and style.
                </p>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-reverie-brass text-reverie-darkwalnut font-bold text-sm rounded-lg hover:brightness-110 transition-all shadow-brass"
                  >
                    <span>Read The Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-reverie-brass/50 shadow-brass group">
                  <img
                    src="/images/billiards_table_slate_mahogany.png"
                    alt="Vintage Billiards Table"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-reverie-darkwalnut via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="font-serif italic text-reverie-gold text-sm">
                      "Precision isn’t an option. It’s the game."
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNAL / BLOG PREVIEW */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 border-b border-reverie-brass/20 pb-6">
            <div>
              <span className="text-xs font-serif font-semibold text-reverie-brass tracking-widest uppercase block mb-1">
                The Cueist Journal
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-reverie-cream">
                Stories from the Felt
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-sm font-bold text-reverie-brass hover:text-reverie-gold flex items-center space-x-2 transition-colors uppercase tracking-wider"
            >
              <span>Explore Journal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBlogs.map((post, idx) => (
              <BlogCard key={post.id} post={post} index={idx} />
            ))}
          </div>
        </section>

        {/* CONTACT US SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </section>

        {/* REPEATED NEWSLETTER CTA BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-reverie-brass via-reverie-gold to-reverie-brass p-8 sm:p-12 rounded-3xl text-reverie-darkwalnut shadow-brass text-center max-w-4xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-full bg-reverie-darkwalnut/20 flex items-center justify-center mx-auto text-reverie-darkwalnut">
              <Disc className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight">
                Never Miss a Limited Rack Drop
              </h2>
              <p className="text-sm sm:text-base font-sans font-medium text-reverie-darkwalnut/80 max-w-xl mx-auto">
                Join over 5,000 cue sports purists. Gain early access keys to small-batch apparel drops, brass accessories, and tournament culture guides.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <NewsletterForm variant="banner" />
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
