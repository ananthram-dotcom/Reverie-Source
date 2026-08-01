import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X, Disc } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Story', path: '/about' },
    { name: 'Apparel & Merch', path: '/products' },
    { name: 'Billiards Journal', path: '/blog' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#18121E]/95 backdrop-blur-md py-3.5 border-b border-[#C5A059]/25 shadow-md'
          : 'bg-[#18121E]/90 backdrop-blur-md py-4 border-b border-[#C5A059]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-full bg-reverie-deep border border-reverie-brass/40 flex items-center justify-center group-hover:border-reverie-brass transition-colors">
              <Disc className="w-4 h-4 text-reverie-brass" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-widest text-reverie-cream group-hover:text-reverie-brass transition-colors block leading-none">
                REVERIE
              </span>
              <span className="text-[9px] tracking-[0.2em] text-reverie-brass uppercase font-sans font-semibold block mt-1">
                Precision Cueists
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-xs font-semibold uppercase tracking-wider transition-colors py-1 ${
                  isActive(link.path)
                    ? 'text-reverie-brass'
                    : 'text-reverie-cream/75 hover:text-reverie-cream'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-reverie-brass rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 bg-reverie-card border border-reverie-brass/30 rounded-lg text-reverie-cream hover:border-reverie-brass transition-colors cursor-pointer"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-4.5 h-4.5 text-reverie-brass" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-reverie-felt text-reverie-cream border border-reverie-brass/40 text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-reverie-cream hover:text-reverie-brass"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-reverie-darkwalnut border-b border-reverie-brass/20 px-4 pt-3 pb-5 space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-serif tracking-wide border-b border-reverie-brass/10 ${
                  isActive(link.path)
                    ? 'text-reverie-brass font-bold pl-2 border-l-2 border-l-reverie-brass'
                    : 'text-reverie-cream/80 hover:text-reverie-cream'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
