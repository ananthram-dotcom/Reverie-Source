import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../data/mockData';
import { Search, PackageX, Compass, Filter } from 'lucide-react';
import MarqueeTicker from '../components/MarqueeTicker';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Hoodies', 'Accessories', 'Headwear', 'T-Shirts'];

  // Count items per category for authentic ledger display
  const countCategory = (cat) => {
    if (cat === 'All') return MOCK_PRODUCTS.length;
    return MOCK_PRODUCTS.filter((p) => p.category === cat).length;
  };

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <>
      <Helmet>
        <title>Apparel & Heritage Merch Catalog — Reverie Billiards</title>
        <meta
          name="description"
          content="Explore Reverie's collection of French Terry hoodies, solid brass pendants, embroidered caps, and precision graphics for billiards enthusiasts."
        />
      </Helmet>

      <div className="pt-28 pb-24 space-y-12">
        
        {/* Ledger Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-reverie-felt/30 border border-reverie-feltlight/50 text-emerald-300 text-[11px] font-sans font-bold tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5 text-reverie-brass" />
            <span>Quarterly Drop Ledger • 1928</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-reverie-cream tracking-tight">
            Heritage Apparel & Hardware
          </h1>
          <p className="text-xs sm:text-sm text-reverie-cream/80 max-w-xl mx-auto leading-relaxed">
            Small-batch drops crafted with 480gsm French Terry cotton, solid C36000 brass, and unyielding line discipline.
          </p>
        </div>

        {/* Marquee Bar */}
        <MarqueeTicker />

        {/* Catalog Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Controls Toolbar */}
          <div className="bg-reverie-card p-4 sm:p-5 rounded-2xl border border-reverie-brass/25 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
            
            {/* Category Ledger Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-sans font-bold tracking-wider transition-all uppercase flex-shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-reverie-brass text-reverie-darkwalnut shadow-sm scale-105'
                      : 'bg-reverie-darkwalnut text-reverie-cream/75 hover:text-reverie-cream border border-reverie-brass/20'
                  }`}
                >
                  {cat} <span className="opacity-60 text-[10px]">[{countCategory(cat)}]</span>
                </button>
              ))}
            </div>

            {/* Search & Sort */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Search Input */}
              <div className="relative flex-grow md:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-reverie-brass" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search ledger drops..."
                  className="w-full pl-10 pr-4 py-2 bg-reverie-darkwalnut border border-reverie-brass/30 rounded-xl text-reverie-cream placeholder-reverie-cream/50 focus:outline-none focus:border-reverie-brass text-xs font-medium"
                />
              </div>

              {/* Sort Select */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3.5 py-2 bg-reverie-darkwalnut border border-reverie-brass/30 rounded-xl text-reverie-cream focus:outline-none focus:border-reverie-brass text-xs font-semibold cursor-pointer"
                >
                  <option value="featured" className="bg-reverie-darkwalnut">Sort: Featured</option>
                  <option value="price-low" className="bg-reverie-darkwalnut">Price: Low to High</option>
                  <option value="price-high" className="bg-reverie-darkwalnut">Price: High to Low</option>
                  <option value="rating" className="bg-reverie-darkwalnut">Highest Rated</option>
                </select>
              </div>
            </div>

          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center space-y-4 bg-reverie-card rounded-2xl border border-reverie-brass/25 p-8 shadow-sm">
              <PackageX className="w-12 h-12 text-reverie-brass mx-auto opacity-70" />
              <h3 className="text-xl font-serif font-bold text-reverie-cream">No matching ledger items found</h3>
              <p className="text-xs text-reverie-cream/70 max-w-sm mx-auto">
                Try adjusting your category filter or search terms to locate products in stock.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-reverie-brass text-reverie-darkwalnut text-xs font-bold rounded-lg uppercase tracking-wider shadow-sm cursor-pointer"
              >
                Reset Catalog Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </div>
          )}

        </div>

      </div>
    </>
  );
};

export default ProductList;
