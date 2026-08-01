import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ChatbotWidget from './components/ChatbotWidget';
import Home from './pages/Home';
import About from './pages/About';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-reverie-darkwalnut text-reverie-cream selection:bg-reverie-brass selection:text-reverie-darkwalnut">
            <Navbar />
            <CartDrawer />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
            <ChatbotWidget />
          </div>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;
