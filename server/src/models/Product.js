import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, default: 5.0 },
    reviewsCount: { type: Number, default: 0 },
    badge: { type: String, default: '' },
    description: { type: String, required: true },
    details: [{ type: String }],
    image: { type: String, required: true },
    additionalImages: [{ type: String }],
    sizes: [{ type: String }],
    inStock: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
