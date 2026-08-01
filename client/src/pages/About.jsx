import React from 'react';
import { Helmet } from 'react-helmet-async';
import ValueCard from '../components/ValueCard';
import { Target, Award, Sparkles, Disc, CheckCircle2 } from 'lucide-react';
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

      <div className="pt-32 pb-24 space-y-24">
        
        {/* Header Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-reverie-accent/20 rounded-full blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-reverie-deep/80 border border-reverie-brass/50 text-reverie-brass text-xs font-serif tracking-widest uppercase shadow-brass"
          >
            <Disc className="w-4 h-4" />
            <span>The Geometry of the Game</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl font-serif font-black text-reverie-cream max-w-4xl mx-auto leading-tight drop-shadow-md">
            Crafting Heritage Merch for Players Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-reverie-brass via-reverie-gold to-reverie-cream">Respect the Table</span>
          </h1>

          <p className="text-base sm:text-xl text-reverie-cream/90 max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            Reverie was founded to rescue cue sports merchandise from cheap novelty graphics. We create heavyweight 480gsm apparel and solid brass accessories designed with the precision of a championship bank shot.
          </p>
        </section>

        {/* Main Story & Craftsmanship Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-reverie-darkwalnut via-reverie-deep/70 to-reverie-darkwalnut rounded-3xl border border-reverie-brass/40 p-8 lg:p-16 shadow-purple relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-serif font-bold text-reverie-brass tracking-widest uppercase block">
                  Why Cue Sports Matter
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-reverie-cream leading-tight">
                  Why Billiards Deserves Elevated Design
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-reverie-cream/90 leading-relaxed font-sans font-normal">
                  <p>
                    Billiards isn’t just a bar pastime. It is one of the oldest strategy sports in human history, governed by exact laws of kinetic energy, friction vectors, and spatial geometry.
                  </p>
                  <p>
                    Yet for decades, fans were left with flimsy polyester t-shirts and tacky printed novelties. Reverie changed that. We brought vintage 1920s parlor elegance—shaded brass lighting, deep green felt, polished walnut cue racks—into high-density modern streetwear.
                  </p>
                  <p>
                    When you wear a Reverie French Terry hoodie or clip on our solid brass 8-ball pendant, you’re signaling membership in a culture of quiet mastery.
                  </p>
                </div>

                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-reverie-brass/30">
                  <div className="flex items-center space-x-3 bg-reverie-darkwalnut/80 p-3 rounded-lg border border-reverie-brass/20">
                    <CheckCircle2 className="w-5 h-5 text-reverie-brass flex-shrink-0" />
                    <span className="text-xs font-semibold text-reverie-cream">480 GSM French Terry Cotton</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-reverie-darkwalnut/80 p-3 rounded-lg border border-reverie-brass/20">
                    <CheckCircle2 className="w-5 h-5 text-reverie-brass flex-shrink-0" />
                    <span className="text-xs font-semibold text-reverie-cream">Solid Aged Brass Hardware</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-reverie-darkwalnut/80 p-3 rounded-lg border border-reverie-brass/20">
                    <CheckCircle2 className="w-5 h-5 text-reverie-brass flex-shrink-0" />
                    <span className="text-xs font-semibold text-reverie-cream">Real Green Felt Under-brim</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-reverie-darkwalnut/80 p-3 rounded-lg border border-reverie-brass/20">
                    <CheckCircle2 className="w-5 h-5 text-reverie-brass flex-shrink-0" />
                    <span className="text-xs font-semibold text-reverie-cream">Small-Batch Numbered Drops</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border-2 border-reverie-brass/50 shadow-brass group">
                  <img
                    src="/images/billiards_table_slate_mahogany.png"
                    alt="Billiards Hall Craftsmanship"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-reverie-darkwalnut via-transparent to-transparent opacity-70" />
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

        {/* Pillars Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-serif font-bold text-reverie-brass tracking-widest uppercase">
              The Three Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-reverie-cream">
              What Defines Every Reverie Creation
            </h2>
            <p className="text-sm text-reverie-cream/80">
              Every detail is engineered so you feel the heritage atmosphere of slate, brass, and felt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              description="Heavyweight fabrics, brass hardware, and walnut wood accents that age beautifully with wear."
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
