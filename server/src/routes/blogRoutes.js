import express from 'express';
import { getBlogPosts, getBlogPostBySlug, createBlogPost } from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getBlogPosts);
router.get('/:slug', getBlogPostBySlug);
router.post('/', createBlogPost);

export default router;
