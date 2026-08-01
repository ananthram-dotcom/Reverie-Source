export const MOCK_PRODUCTS = [
  {
    id: 'prod-1',
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
    id: 'prod-2',
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
    id: 'prod-3',
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
    id: 'prod-4',
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
    id: 'prod-5',
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
    id: 'prod-6',
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

export const MOCK_BLOGS = [
  {
    id: 'blog-1',
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

      <h3>Translating Precision to Apparel</h3>
      <p>At Reverie, when we draft a pattern for a hoodie or cap, we apply the exact line discipline of master cue crafters. We measure seam allowances in millimeters and test fabric weight under light so that your drape feels as intentional as a perfectly positioned safety shot.</p>
    `
  },
  {
    id: 'blog-2',
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

      <h3>The Uniform of the Master Cueist</h3>
      <p>Players never showed up in careless wear. They wore tailored wool waistcoats, crisp cotton shirts, and hand-burnished leather footwear. It was a statement of respect for the game, the table, and the adversary.</p>
    `
  },
  {
    id: 'blog-3',
    slug: 'how-to-style-vintage-billiards-merch',
    title: 'Millennial Vintage: How to Style Heritage Fan Apparel',
    excerpt: 'Blending deep purples, aged brass accessories, and high-density cotton hoodies into a modern streetwear aesthetic.',
    category: 'Style Guide',
    author: 'Marcus Reed',
    readTime: '4 min read',
    date: 'July 15, 2026',
    image: '/images/angle_of_incidence_tee.png',
    content: `
      <p>Styling vintage merch doesn’t mean dressing like a costume extra. It is about contrast: pair heavy structured garments with relaxed denim or tailored trousers for an effortless look.</p>
    `
  }
];
