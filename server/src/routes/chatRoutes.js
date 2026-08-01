import express from 'express';
import rateLimit from 'express-rate-limit';
import { handleChat } from '../controllers/chatController.js';

const router = express.Router();

// Strict rate limiting specifically on AI chat endpoint to prevent abuse
const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // Limit each IP to 30 requests per window
  message: { reply: 'Rate limit exceeded. Please wait a few minutes before asking another question.' }
});

router.post('/', chatLimiter, handleChat);

export default router;
