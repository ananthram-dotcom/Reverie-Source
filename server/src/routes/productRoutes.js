import express from 'express';
import { getProducts, getProductBySlug, createProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:slug', getProductBySlug);
router.post('/', createProduct);

export default router;
