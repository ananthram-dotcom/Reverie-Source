import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    readTime: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true }
  },
  { timestamps: true }
);

export const BlogPost = mongoose.model('BlogPost', blogPostSchema);
