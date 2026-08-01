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
          ? 'bg-reverie-darkwalnut/95 backdrop-blur-md py-3 shadow-purple border-b border-reverie-brass/30'
          : 'bg-gradient-to-b from-reverie-darkwalnut/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-reverie-deep to-reverie-accent border border-reverie-brass/60 flex items-center justify-center shadow-brass group-hover:scale-105 transition-transform">
              <Disc className="w-6 h-6 text-reverie-brass group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <span className="font-serif text-2xl font-black tracking-widest text-reverie-cream group-hover:text-reverie-gold transition-colors block leading-none">
                REVERIE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-reverie-brass uppercase font-sans font-semibold block mt-1">
                Precision Billiards
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors py-1 ${
                  isActive(link.path)
                    ? 'text-reverie-brass font-semibold'
                    : 'text-reverie-cream/80 hover:text-reverie-brass'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-reverie-brass to-reverie-gold rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-reverie-deep/50 border border-reverie-brass/40 rounded-full text-reverie-cream hover:border-reverie-brass hover:bg-reverie-deep transition-all shadow-brass group cursor-pointer"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 text-reverie-brass group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
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
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden bg-reverie-darkwalnut border-b border-reverie-brass/30 px-4 pt-4 pb-6 space-y-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-serif tracking-wide border-b border-reverie-brass/10 ${
                  isActive(link.path)
                    ? 'text-reverie-brass font-bold pl-2 border-l-2 border-l-reverie-brass'
                    : 'text-reverie-cream/80 hover:text-reverie-brass'
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
