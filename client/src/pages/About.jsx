import React from 'react';
import { Helmet } from 'react-helmet-async';
import ValueCard from '../components/ValueCard';
import { Target, Award, Sparkles, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
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

      <div className="pt-28 pb-20 space-y-20">
        
        {/* Header Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-serif font-semibold text-reverie-brass tracking-widest uppercase block">
            The Geometry of the Game
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black text-reverie-cream max-w-4xl mx-auto leading-tight">
            Crafting Heritage Merch for Players Who Respect the Table
          </h1>
          <p className="text-base sm:text-lg text-reverie-cream/80 max-w-2xl mx-auto leading-relaxed">
            Reverie was founded to rescue cue sports merchandise from cheap novelties. We create heavyweight apparel and solid brass accessories designed with the precision of a championship bank shot.
          </p>
        </section>

        {/* Narrative Section with Image */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-reverie-darkwalnut/90 rounded-3xl border border-reverie-brass/30 p-8 lg:p-16 shadow-purple">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-reverie-cream">
                  Why Billiards Deserves Great Design
                </h2>
                <div className="space-y-4 text-sm text-reverie-cream/80 leading-relaxed font-sans">
                  <p>
                    Billiards isn’t just a bar game. It’s one of the oldest strategy sports in human history, governed by exact laws of kinetic transfer, friction vectors, and spatial geometry.
                  </p>
                  <p>
                    Yet for decades, fans were left with flimsy polyester t-shirts and tacky printed mugs. Reverie changed that. We brought vintage 1920s parlor elegance—shaded brass lighting, deep green felt, polished walnut cue racks—into high-density modern apparel.
                  </p>
                  <p>
                    When you wear a Reverie French Terry hoodie or clip on our solid brass 8-ball pendant, you’re signaling membership in a culture of quiet mastery.
                  </p>
                </div>

                <div className="pt-4 grid grid-cols-2 gap-4 border-t border-reverie-brass/20">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-reverie-brass flex-shrink-0" />
                    <span className="text-xs font-semibold text-reverie-cream">480 GSM Organic Cotton</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-reverie-brass flex-shrink-0" />
                    <span className="text-xs font-semibold text-reverie-cream">Solid Aged Brass Hardware</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-reverie-brass flex-shrink-0" />
                    <span className="text-xs font-semibold text-reverie-cream">Real Green Felt Accents</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-reverie-brass flex-shrink-0" />
                    <span className="text-xs font-semibold text-reverie-cream">Small-Batch Numbered Drops</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-reverie-brass/50 shadow-brass">
                  <img
                    src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=80"
                    alt="Billiards Hall Craftsmanship"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-reverie-darkwalnut via-transparent to-transparent opacity-60" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-serif font-semibold text-reverie-brass tracking-widest uppercase">
              The Three Pillars
            </span>
            <h2 className="text-3xl font-serif font-bold text-reverie-cream">
              What Defines Every Reverie Creation
            </h2>
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
