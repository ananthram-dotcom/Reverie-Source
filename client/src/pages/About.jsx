import React from 'react';
import { Helmet } from 'react-helmet-async';
import ValueCard from '../components/ValueCard';
import ReverieLogo from '../components/ReverieLogo';
import { Target, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Our Story & Craftsmanship — Reverie Billiards</title>
        <meta
          name="description"
          content="Discover how Reverie crafts timeless billiards fan merchandise with mathematical precision, 1920s hall heritage, and modern millennial energy."
        />
      </Helmet>

      <div className="space-y-24 pb-24">
        
        {/* Minimalist Header with Selective Vintage Portrait Backdrop */}
        <section className="relative pt-36 pb-20 overflow-hidden border-b border-reverie-brass/20">
          {/* Selective Vintage Blurred Portrait Background Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/billiards_hero_portrait.png"
              alt="Vintage Billiards Hall Ambient"
              className="w-full h-full object-cover object-center scale-105 filter blur-[4px] brightness-[0.35] contrast-[1.15]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-reverie-darkwalnut via-reverie-darkwalnut/80 to-reverie-darkwalnut/90" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-reverie-darkwalnut/80 border border-reverie-brass/40 text-emerald-300 text-[11px] font-sans font-semibold tracking-widest uppercase backdrop-blur-md"
            >
              <ReverieLogo className="w-3.5 h-3.5" />
              <span>The Geometry of the Game</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-reverie-cream tracking-tight leading-tight drop-shadow-md">
              Crafting Heritage Merch for Players Who Respect the Table
            </h1>

            <p className="text-sm sm:text-base text-reverie-cream/90 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              Reverie was founded to rescue cue sports apparel from cheap novelty graphics. We design heavyweight 480gsm cotton goods and solid brass accessories with the line discipline of a championship bank shot.
            </p>
          </div>
        </section>

        {/* Narrative & Craft Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-reverie-card rounded-2xl border border-reverie-brass/25 p-8 lg:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <span className="text-[11px] font-sans font-bold text-reverie-brass tracking-widest uppercase block">
                  Heritage & Precision
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-reverie-cream leading-tight">
                  Why Billiards Deserves Minimalist Luxury
                </h2>
                <div className="space-y-3.5 text-sm text-reverie-cream/80 leading-relaxed font-sans">
                  <p>
                    Billiards is governed by exact physical laws—kinetic transfer, friction vectors, and spatial geometry. It is an art of quiet concentration.
                  </p>
                  <p>
                    Yet for decades, fans were left with flimsy polyester t-shirts. Reverie brings 1920s hall nostalgia—shaded green glass lighting, deep green felt, polished mahogany—into high-density minimalist apparel.
                  </p>
                  <p>
                    When you wear a Reverie French Terry hoodie or carry our solid brass 8-ball keyring, you carry a piece of cue sports history crafted for modern daily wear.
                  </p>
                </div>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-reverie-brass/15">
                  <div className="flex items-center space-x-2.5 bg-reverie-darkwalnut/80 p-2.5 rounded-lg border border-reverie-brass/15 text-xs text-reverie-cream/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-reverie-brass flex-shrink-0" />
                    <span>480 GSM Organic Cotton</span>
                  </div>
                  <div className="flex items-center space-x-2.5 bg-reverie-darkwalnut/80 p-2.5 rounded-lg border border-reverie-brass/15 text-xs text-reverie-cream/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-reverie-brass flex-shrink-0" />
                    <span>Solid Aged Brass Hardware</span>
                  </div>
                  <div className="flex items-center space-x-2.5 bg-reverie-darkwalnut/80 p-2.5 rounded-lg border border-reverie-brass/15 text-xs text-reverie-cream/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Green Felt Accent Trims</span>
                  </div>
                  <div className="flex items-center space-x-2.5 bg-reverie-darkwalnut/80 p-2.5 rounded-lg border border-reverie-brass/15 text-xs text-reverie-cream/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-reverie-brass flex-shrink-0" />
                    <span>Small-Batch Numbered Drops</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-xl overflow-hidden border border-reverie-brass/30 shadow-md">
                  <img
                    src="/images/billiards_table_slate_mahogany.png"
                    alt="Billiards Hall Craftsmanship"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Brand Values Pillars */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] font-sans font-bold text-reverie-brass tracking-widest uppercase">
              Brand Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-reverie-cream">
              Minimalist Geometry & Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard
              icon={Target}
              subtitle="Pillar I"
              title="Mathematical Precision"
              description="Graphics drawn using exact 45-degree angle vectors and real cue ball velocity formulas."
              index={0}
            />
            <ValueCard
              icon={Award}
              subtitle="Pillar II"
              title="Heritage Materials"
              description="Heavyweight fabrics, brass hardware, and mahogany wood accents that age gracefully."
              index={1}
            />
            <ValueCard
              icon={Sparkles}
              subtitle="Pillar III"
              title="Modern Energy"
              description="Tailored silhouettes built for contemporary street style, not dusty museum displays."
              index={2}
            />
          </div>
        </section>

      </div>
    </>
  );
};

export default About;
