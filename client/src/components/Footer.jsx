import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';
import { Disc, ShieldCheck, Target, Sparkles, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-reverie-darkwalnut text-reverie-cream border-t border-reverie-brass/30 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-reverie-deep/40 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Brand Value Pillars Badge Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-reverie-brass/20 text-center md:text-left">
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-reverie-deep/20 border border-reverie-brass/10">
            <div className="p-3 rounded-full bg-reverie-brass/10 text-reverie-brass">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-reverie-cream">Exact Geometry</h4>
              <p className="text-xs text-reverie-cream/60">Crafted with the millimeter accuracy of championship billiards.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-xl bg-reverie-deep/20 border border-reverie-brass/10">
            <div className="p-3 rounded-full bg-reverie-brass/10 text-reverie-brass">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-reverie-cream">Heritage Felt & Brass</h4>
              <p className="text-xs text-reverie-cream/60">Old-fashioned hall craftsmanship meets modern soft handfeel.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-xl bg-reverie-deep/20 border border-reverie-brass/10">
            <div className="p-3 rounded-full bg-reverie-brass/10 text-reverie-brass">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-reverie-cream">Limited Run Drops</h4>
              <p className="text-xs text-reverie-cream/60">Numbered fan apparel — line up your shot before it sells out.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-reverie-deep border border-reverie-brass/60 flex items-center justify-center">
                <Disc className="w-5 h-5 text-reverie-brass" />
              </div>
              <span className="font-serif text-2xl font-black tracking-widest text-reverie-cream">
                REVERIE
              </span>
            </div>
            <p className="text-sm text-reverie-cream/70 max-w-md leading-relaxed">
              Timeless billiards apparel for players, purists, and fans who respect the table. Blending vintage hall nostalgia with modern energy and unyielding precision.
            </p>

            {/* Newsletter Section in Footer */}
            <div className="pt-4 max-w-md">
              <h4 className="text-sm font-serif font-bold tracking-wider text-reverie-brass uppercase mb-2">
                Join the Reverie Society
              </h4>
              <p className="text-xs text-reverie-cream/60 mb-3">
                Subscribe for private drop keys, tournament culture reads, and member-only pricing.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-reverie-brass tracking-wider uppercase border-b border-reverie-brass/20 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-reverie-cream/75 hover:text-reverie-brass transition-colors">
                  Home Landing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-reverie-cream/75 hover:text-reverie-brass transition-colors">
                  Our Story & Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-reverie-cream/75 hover:text-reverie-brass transition-colors">
                  Apparel & Merch Catalog
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-reverie-cream/75 hover:text-reverie-brass transition-colors">
                  Billiards Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-reverie-brass tracking-wider uppercase border-b border-reverie-brass/20 pb-2">
              Billiards Headquarters
            </h4>
            <div className="text-sm text-reverie-cream/75 space-y-2">
              <p className="font-medium text-reverie-cream">Reverie Cue & Apparel Co.</p>
              <p className="text-xs text-reverie-cream/60">1928 Championship Way, Suite 8</p>
              <p className="text-xs text-reverie-cream/60">Email: concierge@reveriebilliards.com</p>
              <p className="text-xs text-reverie-brass font-medium pt-2">
                Customer Support: Mon–Fri (9:00 AM – 6:00 PM EST)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-reverie-brass/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-reverie-cream/50 space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} Reverie Billiards Co. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-reverie-brass cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-reverie-brass cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-reverie-brass cursor-pointer transition-colors">Shipping & Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
