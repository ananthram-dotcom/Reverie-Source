import { BlogPost } from '../models/BlogPost.js';

export const getBlogPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find({}).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Server Error fetching blog posts' });
  }
};

export const getBlogPostBySlug = async (req, res) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug });
    if (!post) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Server Error fetching blog detail' });
  }
};

export const createBlogPost = async (req, res) => {
  try {
    const post = new BlogPost(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
