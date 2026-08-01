import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';
import ReverieLogo from './ReverieLogo';
import { Target, Award, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#140F19] text-reverie-cream border-t border-reverie-brass/20 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Pillars Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 border-b border-reverie-brass/15 text-left">
          <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-reverie-card border border-reverie-brass/15">
            <div className="p-2.5 rounded-lg bg-reverie-felt/40 text-emerald-300">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-reverie-cream">Exact Geometry</h4>
              <p className="text-[11px] text-reverie-cream/65">Crafted with the line accuracy of championship cueists.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-reverie-card border border-reverie-brass/15">
            <div className="p-2.5 rounded-lg bg-reverie-darkwalnut text-reverie-brass border border-reverie-brass/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-reverie-cream">Heritage Felt & Brass</h4>
              <p className="text-[11px] text-reverie-cream/65">1920s hall craftsmanship meets modern 480gsm cotton.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-reverie-card border border-reverie-brass/15">
            <div className="p-2.5 rounded-lg bg-reverie-felt/40 text-emerald-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-reverie-cream">Limited Run Drops</h4>
              <p className="text-[11px] text-reverie-cream/65">Numbered fan apparel — small batches to ensure quality.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-3">
            <Link to="/">
              <ReverieLogo className="w-8 h-8" showText={true} />
            </Link>
            <p className="text-xs text-reverie-cream/75 max-w-sm leading-relaxed pt-1">
              Timeless billiards apparel for players and purists who respect the table. Blending vintage hall nostalgia with understated modern luxury.
            </p>

            {/* Newsletter Section in Footer */}
            <div className="pt-3 max-w-sm">
              <h4 className="text-xs font-sans font-bold tracking-wider text-reverie-brass uppercase mb-1.5">
                Join the Reverie Inner Circle
              </h4>
              <p className="text-[11px] text-reverie-cream/60 mb-2.5">
                Subscribe for private drop keys and tournament culture reads.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-sans font-bold text-xs text-reverie-brass tracking-wider uppercase border-b border-reverie-brass/15 pb-1.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-reverie-cream/75 hover:text-reverie-cream transition-colors">
                  Home Landing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-reverie-cream/75 hover:text-reverie-cream transition-colors">
                  Our Story & Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-reverie-cream/75 hover:text-reverie-cream transition-colors">
                  Apparel & Merch Catalog
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-reverie-cream/75 hover:text-reverie-cream transition-colors">
                  Billiards Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="font-sans font-bold text-xs text-reverie-brass tracking-wider uppercase border-b border-reverie-brass/15 pb-1.5">
              Billiards Headquarters
            </h4>
            <div className="text-xs text-reverie-cream/75 space-y-1.5">
              <p className="font-semibold text-reverie-cream">Reverie Cue & Apparel Co.</p>
              <p className="text-reverie-cream/60">1928 Championship Way, Suite 8</p>
              <p className="text-reverie-cream/60">concierge@reveriebilliards.com</p>
              <p className="text-reverie-brass font-medium pt-1">
                Mon–Fri (9:00 AM – 6:00 PM EST)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-reverie-brass/15 pt-5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-reverie-cream/50 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Reverie Billiards Co. All rights reserved.</p>
          <div className="flex space-x-5">
            <span className="hover:text-reverie-cream cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-reverie-cream cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-reverie-cream cursor-pointer transition-colors">Shipping & Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
