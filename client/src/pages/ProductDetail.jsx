import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useCart } from '../context/CartContext';
import { MOCK_PRODUCTS } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { Star, ShoppingBag, ArrowLeft, Check, Truck, RefreshCw } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();

  const product = MOCK_PRODUCTS.find((p) => p.slug === slug) || MOCK_PRODUCTS[0];

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);

  const relatedProducts = MOCK_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${product.name} — Reverie Billiards`}</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb / Back Link */}
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-xs font-bold text-reverie-brass hover:text-reverie-gold transition-colors uppercase tracking-wider bg-reverie-deep/40 px-4 py-2 rounded-lg border border-reverie-brass/30"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Merch Catalog</span>
        </Link>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-square bg-reverie-darkwalnut/90 rounded-2xl border-2 border-reverie-brass/40 overflow-hidden shadow-purple relative">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Row */}
            {product.additionalImages && product.additionalImages.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.additionalImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImage === img
                        ? 'border-reverie-brass scale-95 shadow-brass'
                        : 'border-reverie-brass/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Purchase Column */}
          <div className="lg:col-span-5 space-y-6 bg-gradient-to-b from-reverie-darkwalnut via-reverie-deep/80 to-reverie-darkwalnut p-8 rounded-2xl border border-reverie-brass/40 shadow-purple">
            <div>
              <span className="text-xs font-serif font-bold text-reverie-brass tracking-widest uppercase block mb-1">
                {product.category}
              </span>
              <h1 className="text-3xl font-serif font-bold text-reverie-cream leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mt-3 text-sm">
                <div className="flex items-center space-x-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-reverie-cream">{product.rating}</span>
                </div>
                <span className="text-reverie-cream/40">•</span>
                <span className="text-xs text-reverie-cream/80 font-medium">
                  {product.reviewsCount} Customer Reviews
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="border-y border-reverie-brass/30 py-4">
              <span className="text-xs text-reverie-cream/60 block font-medium">Item Price</span>
              <span className="text-3xl font-serif font-bold text-reverie-brass">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-reverie-cream/90 leading-relaxed font-sans font-normal">
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-reverie-brass uppercase tracking-wider">
                    Select Size
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedSize === size
                          ? 'bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut shadow-brass'
                          : 'bg-reverie-deep/80 border border-reverie-brass/40 text-reverie-cream hover:border-reverie-brass'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Add to Cart */}
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center bg-reverie-deep/90 border border-reverie-brass/40 rounded-xl px-3 py-2 space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-reverie-cream/80 hover:text-reverie-brass font-bold text-base px-1"
                >
                  -
                </button>
                <span className="text-sm font-bold text-reverie-cream px-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-reverie-cream/80 hover:text-reverie-brass font-bold text-base px-1"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(product, quantity, selectedSize)}
                className="flex-grow py-3.5 bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut font-serif font-bold text-sm rounded-xl hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-brass cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Rack — ${(product.price * quantity).toFixed(2)}</span>
              </button>
            </div>

            {/* Materials & Spec Checklist */}
            {product.details && (
              <div className="pt-4 border-t border-reverie-brass/30 space-y-2">
                <h4 className="text-xs font-serif font-bold text-reverie-brass uppercase tracking-wider">
                  Materials & Geometry Specs
                </h4>
                <ul className="space-y-2 text-xs text-reverie-cream/85">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5">
                      <Check className="w-4 h-4 text-reverie-brass flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Shipping & Support badges */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-reverie-brass/20 text-center">
              <div className="p-3 bg-reverie-deep/50 rounded-xl border border-reverie-brass/20 text-[11px] text-reverie-cream/80">
                <Truck className="w-4 h-4 text-reverie-brass mx-auto mb-1" />
                <span>Free Shipping over $75</span>
              </div>
              <div className="p-3 bg-reverie-deep/50 rounded-xl border border-reverie-brass/20 text-[11px] text-reverie-cream/80">
                <RefreshCw className="w-4 h-4 text-reverie-brass mx-auto mb-1" />
                <span>30-Day Hassle-Free Exchange</span>
              </div>
            </div>

          </div>

        </div>

        {/* Related Products Grid */}
        <div className="pt-12 border-t border-reverie-brass/30 space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-serif font-bold text-reverie-brass tracking-widest uppercase block mb-1">
                More from the Rack
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-reverie-cream">
                Complementary Billiards Merch
              </h2>
            </div>
            <Link to="/products" className="text-xs font-bold text-reverie-brass uppercase tracking-wider hover:text-reverie-gold">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map((relProduct, idx) => (
              <ProductCard key={relProduct.id} product={relProduct} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default ProductDetail;
