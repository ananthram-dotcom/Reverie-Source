import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ValueCard from '../components/ValueCard';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';
import ContactForm from '../components/ContactForm';
import NewsletterForm from '../components/NewsletterForm';
import { MOCK_PRODUCTS, MOCK_BLOGS } from '../data/mockData';
import ReverieLogo from '../components/ReverieLogo';
import { Target, Award, Sparkles, ArrowRight } from 'lucide-react';
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
          content="Reverie brings 1920s billiards hall elegance to modern fan merch. Unyielding precision, 480gsm French Terry hoodies, brass keyrings, and heritage style."
        />
      </Helmet>

      <div className="space-y-24 pb-24">
        
        {/* HERO SECTION WITH VINTAGE PORTRAIT BACKGROUND */}
        <section className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-24 overflow-hidden border-b border-reverie-brass/20">
          
          {/* Selective Vintage Blurred Portrait Background Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/billiards_hero_portrait.png"
              alt="Vintage Billiards Hall Ambient"
              className="w-full h-full object-cover object-center scale-105 filter blur-[4px] brightness-[0.38] contrast-[1.15]"
            />
            {/* Soft Dark Vignette & Gradient Overlays for High Contrast Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-reverie-darkwalnut via-reverie-darkwalnut/75 to-reverie-darkwalnut/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-reverie-darkwalnut/90 via-transparent to-reverie-darkwalnut/90" />
          </div>

          {/* Hero Content */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 relative z-10">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-reverie-darkwalnut/80 border border-reverie-brass/40 text-emerald-300 text-xs font-sans font-semibold tracking-widest uppercase backdrop-blur-md shadow-sm"
            >
              <ReverieLogo className="w-3.5 h-3.5" />
              <span>Est. 1928 • Heritage Cueist Apparel</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-reverie-cream tracking-tight leading-[1.12] drop-shadow-lg"
            >
              Timeless Billiards Apparel Crafted with <span className="text-reverie-brass italic">Exacting Geometry</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-xl text-reverie-cream/90 max-w-2xl mx-auto leading-relaxed font-sans font-normal drop-shadow-sm"
            >
              Where the nostalgia of 1920s slate-and-felt halls meets modern minimalist style. Built for players who demand unyielding precision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3"
            >
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-4 bg-reverie-brass text-reverie-darkwalnut font-serif font-bold text-base rounded-xl hover:bg-reverie-gold transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-md"
              >
                <span>Shop Heritage Merch</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 bg-reverie-darkwalnut/80 border border-reverie-brass/40 text-reverie-cream hover:border-reverie-brass font-serif font-semibold text-base rounded-xl backdrop-blur-md transition-colors flex items-center justify-center space-x-2"
              >
                <span>The Reverie Story</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* BRAND VALUES SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] font-sans font-bold text-reverie-brass tracking-widest uppercase">
              Craft Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-reverie-cream">
              Precision in Every Thread & Seam
            </h2>
            <p className="text-xs sm:text-sm text-reverie-cream/75">
              Billiards is a game of millimeters. We apply that exact discipline to fabric weight, brass hardware, and embroidered graphics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard
              icon={Target}
              subtitle="Mathematical Rigor"
              title="Exact Geometry"
              description="From angle-of-incidence graphic layouts to seam stress testing, every design honors the mathematical purity of bank shots."
              index={0}
            />
            <ValueCard
              icon={Award}
              subtitle="1920s Parlor Aesthetics"
              title="Heritage Materials"
              description="Heavyweight 480gsm French Terry cotton, aged brass eyelets, real felt undertones, and vegetable-tanned leather accents."
              index={1}
            />
            <ValueCard
              icon={Sparkles}
              subtitle="Millennial Modern Style"
              title="Clean & Understated"
              description="Say goodbye to cheap polyester novelty tees. Reverie delivers elevated streetwear nostalgia designed for daily wear."
              index={2}
            />
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-end justify-between mb-8 border-b border-reverie-brass/15 pb-4 gap-4">
            <div>
              <span className="text-[11px] font-sans font-bold text-reverie-brass tracking-widest uppercase block mb-1">
                Curated Collection
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-reverie-cream">
                Featured Apparel & Hardware
              </h2>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-reverie-brass hover:text-reverie-gold flex items-center space-x-1.5 transition-colors uppercase tracking-wider"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </section>

        {/* BRAND STORY TEASER CARD WITH PORTRAIT IMAGE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-reverie-card rounded-2xl border border-reverie-brass/25 p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-[11px] font-sans font-bold text-reverie-brass tracking-widest uppercase">
                  Inside Reverie Hall
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-reverie-cream leading-tight">
                  Born in the Shadows of Slate & Mahogany
                </h2>
                <p className="text-xs sm:text-sm text-reverie-cream/80 leading-relaxed font-sans">
                  We started Reverie because we got tired of generic corporate merch that treated cue sports like a tavern joke. Billiards is an art form—a quiet battlefield of calculation, patience, and style.
                </p>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-reverie-brass text-reverie-darkwalnut font-bold text-xs rounded-lg hover:bg-reverie-gold transition-colors"
                  >
                    <span>Read The Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-xl overflow-hidden border border-reverie-brass/30 shadow-md">
                  <img
                    src="/images/billiards_table_slate_mahogany.png"
                    alt="Vintage Billiards Table"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNAL / BLOG PREVIEW */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 border-b border-reverie-brass/15 pb-4">
            <div>
              <span className="text-[11px] font-sans font-bold text-reverie-brass tracking-widest uppercase block mb-1">
                The Cueist Journal
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-reverie-cream">
                Stories from the Felt
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-xs font-bold text-reverie-brass hover:text-reverie-gold flex items-center space-x-1.5 transition-colors uppercase tracking-wider"
            >
              <span>Explore Journal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div className="bg-reverie-card border border-reverie-brass/25 p-8 sm:p-10 rounded-2xl text-center max-w-3xl mx-auto space-y-5 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-reverie-felt/40 border border-reverie-feltlight flex items-center justify-center mx-auto text-emerald-300">
              <ReverieLogo className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-reverie-cream">
                Never Miss a Limited Drop
              </h2>
              <p className="text-xs sm:text-sm text-reverie-cream/75 max-w-md mx-auto">
                Join over 5,000 cue sports purists. Gain early access keys to small-batch apparel drops, brass accessories, and tournament culture guides.
              </p>
            </div>
            <div className="max-w-md mx-auto pt-2">
              <NewsletterForm variant="banner" />
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
