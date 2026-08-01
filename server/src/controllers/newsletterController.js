import { NewsletterSubscriber } from '../models/NewsletterSubscriber.js';
import { validationResult } from 'express-validator';

export const subscribeNewsletter = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;

  try {
    const existing = await NewsletterSubscriber.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(200).json({ message: 'You are already subscribed to the Reverie Inner Circle.' });
    }

    const subscriber = new NewsletterSubscriber({ email });
    await subscriber.save();
    res.status(201).json({ message: 'Subscribed successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error processing subscription' });
  }
};
