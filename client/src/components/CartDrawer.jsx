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
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-reverie-darkwalnut text-reverie-cream z-50 shadow-2xl border-l border-reverie-brass/30 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-reverie-brass/20 flex items-center justify-between bg-reverie-deep/40">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-5 h-5 text-reverie-brass" />
                <h2 className="text-xl font-serif font-bold tracking-wide text-reverie-cream">
                  Your Rack ({cart.reduce((a, b) => a + b.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-reverie-cream/70 hover:text-reverie-brass hover:bg-reverie-cream/10 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 rounded-full bg-reverie-deep/60 border border-reverie-brass/30 flex items-center justify-center text-reverie-brass">
                    <ShoppingBag className="w-8 h-8 opacity-60" />
                  </div>
                  <div>
                    <p className="text-lg font-serif text-reverie-cream">Your rack is currently empty</p>
                    <p className="text-sm text-reverie-cream/60 mt-1">Explore our vintage billiards collection and line up your shots.</p>
                  </div>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}`}
                    className="flex space-x-4 bg-reverie-deep/30 p-4 rounded-xl border border-reverie-brass/20 relative group"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg border border-reverie-brass/30 flex-shrink-0 bg-reverie-darkwalnut"
                    />
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif font-semibold text-reverie-cream text-base leading-tight">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="text-reverie-cream/40 hover:text-rose-400 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-reverie-brass font-medium mt-0.5">
                          Size: {item.selectedSize}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center space-x-2 bg-reverie-darkwalnut border border-reverie-brass/30 rounded-md px-2 py-1">
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

            {/* Footer / Summary */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-reverie-brass/20 bg-reverie-deep/50 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-reverie-cream/70">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-reverie-cream/70">
                    <span>Standard Shipping</span>
                    <span className="text-reverie-brass font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-serif font-bold text-reverie-cream pt-2 border-t border-reverie-brass/20">
                    <span>Total</span>
                    <span className="text-reverie-brass">${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => alert('Order simulation complete! Backend checkout available in live demo.')}
                  className="w-full py-3.5 bg-gradient-to-r from-reverie-brass to-reverie-gold text-reverie-darkwalnut font-bold rounded-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-brass cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
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
