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
    image: '/images/cueist_heavyweight_hoodie.png',
    additionalImages: [
      '/images/cueist_heavyweight_hoodie.png'
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
    image: '/images/solid_brass_8ball_pendant.png',
    additionalImages: [
      '/images/solid_brass_8ball_pendant.png'
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
    image: '/images/felt_chalk_vintage_cap.png',
    additionalImages: [
      '/images/felt_chalk_vintage_cap.png'
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
    image: '/images/angle_of_incidence_tee.png',
    additionalImages: [
      '/images/angle_of_incidence_tee.png'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    inStock: true,
  },
  {
    slug: 'walnut-rack-leather-cue-case',
    name: 'Walnut & Full-Grain Leather Cue Companion Bag',
    category: 'Accessories',
    price: 145.00,
    rating: 5.0,
    reviewsCount: 19,
    badge: 'Signature',
    description: 'Handcrafted full-grain cognac leather carrying pouch for extension chalk, tip shapers, and personal accessories.',
    details: [
      'Full-grain vegetable-tanned leather',
      'Solid brass YKK zipper',
      'Embossed Reverie crown emblem',
      'Suede-lined protective interior'
    ],
    image: '/images/leather_cue_companion_bag.png',
    additionalImages: [
      '/images/leather_cue_companion_bag.png'
    ],
    sizes: ['One Size'],
    inStock: true,
  },
  {
    slug: 'break-shot-oversized-crewneck',
    name: '1980s Break-Shot Heavyweight Crewneck',
    category: 'Hoodies',
    price: 82.00,
    rating: 4.7,
    reviewsCount: 27,
    badge: 'Limited Drop',
    description: 'Retro tournament styling with plush fleece lining, cream ribbed collar, and golden cue ball chest patch.',
    details: [
      '420 GSM Organic Fleece Cotton',
      'Ribbed side expansion panels',
      'Gold foil stamp branding on left sleeve',
      'V-stitch vintage neckline collar'
    ],
    image: '/images/break_shot_crewneck.png',
    additionalImages: [
      '/images/break_shot_crewneck.png'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
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
    image: '/images/billiards_journal_geometry.png',
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
    image: '/images/billiards_table_slate_mahogany.png',
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
