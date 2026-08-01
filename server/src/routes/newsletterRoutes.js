import express from 'express';
import { body } from 'express-validator';
import { subscribeNewsletter } from '../controllers/newsletterController.js';

const router = express.Router();

router.post(
  '/',
  [body('email').isEmail().withMessage('Please provide a valid email address')],
  subscribeNewsletter
);

export default router;
