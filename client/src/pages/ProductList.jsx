import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../data/mockData';
import { Search, PackageX } from 'lucide-react';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Hoodies', 'Accessories', 'Headwear', 'T-Shirts'];

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
      return 0; // featured default
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

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Catalog Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-serif font-bold text-reverie-brass tracking-widest uppercase block">
            The Reverie Collection
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-reverie-cream">
            Heritage Apparel & Hardware
          </h1>
          <p className="text-sm sm:text-base text-reverie-cream/85">
            Small-batch drops crafted with heavy organic cotton, solid aged brass, and unyielding attention to geometry.
          </p>
        </div>

        {/* Filters & Controls Toolbar */}
        <div className="bg-gradient-to-r from-reverie-darkwalnut via-reverie-deep/80 to-reverie-darkwalnut p-4 sm:p-6 rounded-2xl border border-reverie-brass/40 flex flex-col md:flex-row items-center justify-between gap-4 shadow-purple">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all uppercase flex-shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut shadow-brass scale-105'
                    : 'bg-reverie-deep/80 text-reverie-cream hover:text-reverie-brass hover:bg-reverie-deep border border-reverie-brass/30'
                }`}
              >
                {cat}
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
                placeholder="Search catalog drops..."
                className="w-full pl-10 pr-4 py-2.5 bg-reverie-deep/80 border border-reverie-brass/40 rounded-xl text-reverie-cream placeholder-reverie-cream/60 focus:outline-none focus:border-reverie-brass focus:ring-1 focus:ring-reverie-brass text-xs font-medium"
              />
            </div>

            {/* Sort Select */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3.5 py-2.5 bg-reverie-deep/80 border border-reverie-brass/40 rounded-xl text-reverie-cream focus:outline-none focus:border-reverie-brass text-xs font-semibold cursor-pointer"
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
          <div className="py-20 text-center space-y-4 bg-reverie-darkwalnut/80 rounded-2xl border border-reverie-brass/30 p-8 shadow-purple">
            <PackageX className="w-12 h-12 text-reverie-brass mx-auto opacity-70" />
            <h3 className="text-xl font-serif font-bold text-reverie-cream">No matching drops found</h3>
            <p className="text-xs text-reverie-cream/70 max-w-sm mx-auto">
              Try adjusting your category filter or search terms to locate products in stock.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut text-xs font-bold rounded-lg uppercase tracking-wider shadow-brass cursor-pointer"
            >
              Reset Catalog Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        )}

      </div>
    </>
  );
};

export default ProductList;
