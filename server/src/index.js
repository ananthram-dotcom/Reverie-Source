import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// CORS configuration
const allowedOrigins = [
  process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  'http://localhost:5173',
  'http://127.0.0.1:5173'
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like mobile apps, curl, or Vercel serverless)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1 || origin.includes('vercel.app')) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev, configurable for prod
    },
    credentials: true
  })
);

app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/chat', chatRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    brand: 'Reverie Billiards API',
    time: new Date().toISOString()
  });
});

// Dynamic SEO sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  const baseUrl = process.env.CLIENT_ORIGIN || 'https://reverie-billiards.vercel.app';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${baseUrl}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>${baseUrl}/products</loc><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>${baseUrl}/blog</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
</urlset>`;
  res.header('Content-Type', 'application/xml');
  res.send(xml);
});

// Dynamic robots.txt
app.get('/robots.txt', (req, res) => {
  const baseUrl = process.env.CLIENT_ORIGIN || 'https://reverie-billiards.vercel.app';
  res.type('text/plain');
  res.send(`User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml`);
});

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🎱 Reverie API Server running on port ${PORT}`);
});
