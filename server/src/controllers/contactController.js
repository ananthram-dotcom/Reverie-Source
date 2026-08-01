import { ContactMessage } from '../models/ContactMessage.js';
import { validationResult } from 'express-validator';

export const submitContactForm = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  try {
    const contactMsg = new ContactMessage({ name, email, subject, message });
    await contactMsg.save();
    res.status(201).json({ message: 'Contact message received successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error saving contact message' });
  }
};
