import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Product } from './models/Product.js';
import { BlogPost } from './models/BlogPost.js';

dotenv.config();

const sampleProducts = [
  {
    slug: 'the-cueist-heavyweight-hoodie',
    name: 'The Cueist Heavyweight French Terry Hoodie',
    category: 'Hoodies',
    price: 88.00,
    rating: 4.9,
    reviewsCount: 42,
    badge: 'Bestseller',
    description: 'Embossed with the geometry of a 45-degree corner pocket bank shot. Crafted from 480gsm ultra-soft French Terry cotton with brass eyelets and vintage felt embroidery.',
    details: [
      '100% Ring-spun Heavyweight Cotton (480 GSM)',
      'Custom aged-brass aglets and drawstring rings',
      'High-density felt applique chest design',
      'Pre-shrunk vintage wash for heritage drape'
    ],
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    inStock: true,
  },
  {
    slug: '8-ball-brass-heritage-pendant',
    name: '1928 Solid Brass 8-Ball Keyring & Pendant',
    category: 'Accessories',
    price: 36.00,
    rating: 5.0,
    reviewsCount: 68,
    badge: 'Limited Drop',
    description: 'Precision cast in solid aged brass with laser-engraved billiards geometry markings. Hand-finished with walnut oil patina.',
    details: [
      'Solid C36000 Brass construction',
      'Laser-etched bank shot angle lines',
      'Heavyweight 85g tactile feel',
      'Includes custom velvet pouch & certificate'
    ],
    image: 'https://images.unsplash.com/photo-1611591475777-233cd7a772b3?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1611591475777-233cd7a772b3?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['One Size'],
    inStock: true,
  },
  {
    slug: 'felt-and-chalk-embroidered-cap',
    name: 'Felt & Chalk Vintage 6-Panel Strapback',
    category: 'Headwear',
    price: 42.00,
    rating: 4.8,
    reviewsCount: 31,
    badge: 'New Arrival',
    description: 'Unstructured cotton twill cap featuring green felt under-visor and raised purple silk embroidery of a 9-ball break pattern.',
    details: [
      'Premium washed cotton twill',
      'Real green felt under-brim accent',
      'Antique brass buckle closure',
      'Deep purple velvet inner sweatband'
    ],
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['Adjustable'],
    inStock: true,
  },
  {
    slug: 'angle-of-incidence-graphic-tee',
    name: 'The Angle of Incidence Graphic Tee',
    category: 'T-Shirts',
    price: 48.00,
    rating: 4.9,
    reviewsCount: 54,
    badge: 'Popular',
    description: 'Celebrates the exact physics of billiards. Printed with water-based discharge inks on 240gsm combed cotton in deep purple & cream.',
    details: [
      '240 GSM Combed Cotton',
      'Soft-hand silk screen print',
      'Custom Reverie hem tag in gold thread',
      'Relaxed boxy fit'
    ],
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    inStock: true,
  }
];

const sampleBlogs = [
  {
    slug: 'geometry-of-the-bank-shot',
    title: 'The Unforgiving Geometry of the Three-Rail Bank Shot',
    excerpt: 'Why master cueists treat pool tables like mechanical drafting boards, and how angle precision shapes everything we design at Reverie.',
    category: 'Billiards Science',
    author: 'Julian Vance',
    readTime: '5 min read',
    date: 'August 1, 2026',
    image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead">Billiards is not a game of luck. It is applied physics, spatial geometry, and unwavering nerve disguised as recreation.</p>
      <h3>The Mirror Formula</h3>
      <p>When you stand at the foot of an antique Brunswick table, the cushion rails act as optical mirrors. The angle of incidence equals the angle of reflection—provided you account for rail speed, cloth friction, and cue ball side-spin (english).</p>
      <blockquote>"A player who guesses angles will win a frame. A player who understands the geometry will win the tournament."</blockquote>
    `
  },
  {
    slug: 'golden-era-of-american-billiards-halls',
    title: 'Brass, Smoke & Mahogany: The Golden Era of 1920s Billiards Halls',
    excerpt: 'Stepping through the heavy oak doors of Chicago and New York pool rooms when cue sports were America’s premier competitive obsession.',
    category: 'Heritage Culture',
    author: 'Eleanor Sterling',
    readTime: '7 min read',
    date: 'July 24, 2026',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>In 1928, entering a high-stakes billiards parlor was like entering a cathedral of precision. The low hum of shaded green glass pendants over slate tables created an atmosphere where quiet concentration reigned supreme.</p>
    `
  }
];

async function seedData() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error('❌ MONGODB_URI is missing in .env');
      process.exit(1);
    }
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB Atlas for seeding');

    await Product.deleteMany({});
    await BlogPost.deleteMany({});

    await Product.insertMany(sampleProducts);
    await BlogPost.insertMany(sampleBlogs);

    console.log('🎉 Seed Completed Successfully! Sample Products & Blogs Populated.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed Failed:', error);
    process.exit(1);
  }
}

seedData();
