import React from 'react';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-reverie-card text-reverie-cream z-50 shadow-2xl border-l border-reverie-brass/30 flex flex-col"
          >
            {/* Header */}
            <div className="p-5 border-b border-reverie-brass/20 flex items-center justify-between bg-reverie-darkwalnut">
              <div className="flex items-center space-x-2.5">
                <ShoppingBag className="w-4.5 h-4.5 text-reverie-brass" />
                <h2 className="text-lg font-serif font-bold tracking-wide text-reverie-cream">
                  Your Rack ({cart.reduce((a, b) => a + b.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-reverie-cream/70 hover:text-reverie-brass rounded-lg transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-5 space-y-3.5">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
                  <div className="w-14 h-14 rounded-full bg-reverie-darkwalnut border border-reverie-brass/30 flex items-center justify-center text-reverie-brass">
                    <ShoppingBag className="w-7 h-7 opacity-60" />
                  </div>
                  <div>
                    <p className="text-base font-serif text-reverie-cream">Your rack is currently empty</p>
                    <p className="text-xs text-reverie-cream/60 mt-1">Explore our vintage billiards collection and line up your shots.</p>
                  </div>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}`}
                    className="flex space-x-3.5 bg-reverie-darkwalnut p-3.5 rounded-xl border border-reverie-brass/20"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-18 h-18 object-cover rounded-lg border border-reverie-brass/25 flex-shrink-0"
                    />
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif font-semibold text-reverie-cream text-sm leading-tight">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="text-reverie-cream/40 hover:text-rose-400 transition-colors p-0.5"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-reverie-brass font-medium mt-0.5">
                          Size: {item.selectedSize}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center space-x-1.5 bg-reverie-card border border-reverie-brass/25 rounded-md px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                            className="text-reverie-cream/70 hover:text-reverie-brass"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-semibold px-1 text-reverie-cream">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                            className="text-reverie-cream/70 hover:text-reverie-brass"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-bold text-reverie-brass text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Summary */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-reverie-brass/20 bg-reverie-darkwalnut space-y-3.5">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-reverie-cream/70">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-reverie-cream/70">
                    <span>Standard Shipping</span>
                    <span className="text-emerald-400 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-base font-serif font-bold text-reverie-cream pt-2 border-t border-reverie-brass/15">
                    <span>Total</span>
                    <span className="text-reverie-brass">${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => alert('Order simulation complete!')}
                  className="w-full py-3 bg-reverie-brass text-reverie-darkwalnut font-serif font-bold text-xs rounded-lg hover:bg-reverie-gold transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm uppercase tracking-wider"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
