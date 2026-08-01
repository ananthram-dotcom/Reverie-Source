import dns from 'dns';
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {}

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
    additionalImages: ['/images/cueist_heavyweight_hoodie.png'],
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
    additionalImages: ['/images/solid_brass_8ball_pendant.png'],
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
    additionalImages: ['/images/felt_chalk_vintage_cap.png'],
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
    additionalImages: ['/images/angle_of_incidence_tee.png'],
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
    additionalImages: ['/images/leather_cue_companion_bag.png'],
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
    additionalImages: ['/images/break_shot_crewneck.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
  },
  {
    slug: '9-ball-break-corduroy-jacket',
    name: 'The 9-Ball Break Vintage Corduroy Trucker Jacket',
    category: 'Hoodies',
    price: 135.00,
    rating: 5.0,
    reviewsCount: 14,
    badge: 'Signature',
    description: 'Heavyweight deep purple cotton corduroy trucker jacket with green felt interior collar lining and custom aged brass branded buttons.',
    details: [
      '10-Wale 100% Cotton Corduroy',
      'Green billiards felt under-collar lining',
      'Custom embossed brass shank buttons',
      'Interior pocket for chalk & tip tool'
    ],
    image: '/images/corduroy_trucker_jacket.png',
    additionalImages: ['/images/corduroy_trucker_jacket.png'],
    sizes: ['M', 'L', 'XL', '2XL'],
    inStock: true,
  },
  {
    slug: 'slate-cognac-leather-chalk-holder',
    name: 'Slate & Cognac Leather Chalk Companion Clip',
    category: 'Accessories',
    price: 28.00,
    rating: 4.9,
    reviewsCount: 41,
    badge: 'Bestseller',
    description: 'Full-grain cognac leather magnetic chalk pouch featuring a solid brass belt clip and hand-burnished edges.',
    details: [
      'Full-grain vegetable-tanned leather',
      'Heavy-duty magnetic chalk retainer',
      'Solid brass belt/pocket clip',
      'Includes 1 cube of Reverie Master chalk'
    ],
    image: '/images/leather_chalk_holder.png',
    additionalImages: ['/images/leather_chalk_holder.png'],
    sizes: ['One Size'],
    inStock: true,
  },
  {
    slug: 'bank-shot-cream-graphic-hoodie',
    name: 'Corner Pocket Bank Shot Cream French Terry Hoodie',
    category: 'Hoodies',
    price: 92.00,
    rating: 4.9,
    reviewsCount: 36,
    badge: 'New Drop',
    description: 'Ultra-heavy 480gsm cream cotton hoodie with an intricate deep purple and gold vector diagram of a 3-rail corner bank shot printed on back.',
    details: [
      '480 GSM Heavyweight Organic French Terry',
      'Discharge ink back print for soft handfeel',
      'Custom brass eyelets & aglets',
      'Relaxed vintage drop-shoulder fit'
    ],
    image: '/images/bank_shot_cream_hoodie.png',
    additionalImages: ['/images/bank_shot_cream_hoodie.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
  },
  {
    slug: 'brunswick-hall-archival-print-tee',
    name: '1928 Brunswick Hall Archival Blueprint Tee',
    category: 'T-Shirts',
    price: 52.00,
    rating: 4.8,
    reviewsCount: 22,
    badge: 'Popular',
    description: 'Washed deep purple combed cotton tee with vintage 1928 billiards table technical drafting print on chest.',
    details: [
      '240 GSM Heavyweight Combed Cotton',
      'Vintage enzyme wash for soft drape',
      'Gold thread woven Reverie neck label',
      'Reinforced shoulder-to-shoulder taping'
    ],
    image: '/images/angle_of_incidence_tee.png',
    additionalImages: ['/images/angle_of_incidence_tee.png'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    inStock: true,
  },
  {
    slug: 'cueist-heritage-green-strapback',
    name: 'Cueist Heritage Felt & Brass Strapback',
    category: 'Headwear',
    price: 45.00,
    rating: 4.9,
    reviewsCount: 18,
    badge: 'Limited Drop',
    description: 'Unstructured dark green twill cap featuring green felt under-brim and custom aged brass emblem buckle closure.',
    details: [
      'Washed heavy cotton twill construction',
      'Real green felt under-visor accent',
      'Custom brass Reverie emblem slide buckle',
      'Moisture-wicking inner band'
    ],
    image: '/images/felt_chalk_vintage_cap.png',
    additionalImages: ['/images/felt_chalk_vintage_cap.png'],
    sizes: ['Adjustable'],
    inStock: true,
  },
  {
    slug: 'championship-brass-pocket-marker',
    name: '1928 Championship Solid Brass Pocket Marker',
    category: 'Accessories',
    price: 34.00,
    rating: 5.0,
    reviewsCount: 29,
    badge: 'Signature',
    description: 'Heavyweight solid brass tournament pocket marker coin with laser-engraved Reverie crown and 8-ball geometry.',
    details: [
      '100% C36000 Solid Aged Brass',
      'Heavyweight 65g tactile handfeel',
      'Laser-etched bank shot markings',
      'Includes custom velvet pouch'
    ],
    image: '/images/solid_brass_8ball_pendant.png',
    additionalImages: ['/images/solid_brass_8ball_pendant.png'],
    sizes: ['One Size'],
    inStock: true,
  }
];

const sampleBlogs = [
  {
    slug: 'geometry-of-the-bank-shot',
    title: 'The Unforgiving Geometry of the Three-Rail Bank Shot: Applied Physics from Mosconi to Modern Slate',
    excerpt: 'An in-depth analysis of kinetic vector transfer, rail elasticity, and why Willie Mosconi treated every 14.1 Continuous rack like an architectural drafting board.',
    category: 'Billiards Science',
    author: 'Julian Vance',
    readTime: '8 min read',
    date: 'August 1, 2026',
    image: '/images/billiards_journal_geometry.png',
    content: `
      <p class="lead">Billiards is not a game of chance. It is applied physics, spatial geometry, and unwavering emotional control disguised as recreation.</p>
      <p>When legendary cueist <strong>Willie Mosconi</strong> set his immortal world record run of 526 consecutive balls at the East Green Street Billiard Academy in Springfield, Ohio on March 19, 1954, he did not rely on intuition alone. Observers recorded that Mosconi moved around the 4x8 Brunswick table with the methodical calculation of a structural engineer drafting blueprint schematics.</p>
    `
  },
  {
    slug: 'golden-era-of-american-billiards-halls',
    title: 'Brass, Smoke & Mahogany: Inside Bensinger’s and the 1928 World Championship Era',
    excerpt: 'Stepping through the heavy oak doors of Chicago’s legendary Bensinger’s Billiard Parlor during the golden decade when Ralph Greenleaf ruled America’s premier spectator sport.',
    category: 'Heritage Culture',
    author: 'Eleanor Sterling',
    readTime: '9 min read',
    date: 'July 24, 2026',
    image: '/images/billiards_table_slate_mahogany.png',
    content: `
      <p class="lead">In November 1928, if you walked down Randolph Street in downtown Chicago and pushed open the heavy brass-trimmed oak doors of <strong>Bensinger’s Billiard Parlor</strong>, you entered a cathedral of concentration.</p>
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

    console.log('🎉 Seed Completed Successfully! 12 Unique Products & Long-Form SEO Journals Populated.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed Failed:', error);
    process.exit(1);
  }
}

seedData();
