import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_INSTRUCTION = `
You are the Reverie Cueist Concierge AI, an expert brand ambassador for Reverie — a timeless billiards fan apparel and hardware brand.

Brand Identity & Voice:
- Passionate, knowledgeable, precise, and polite.
- Speaks with the spatial clarity of an expert cueist (references bank shot geometry, rail speed, 480gsm French Terry cotton, aged brass hardware, green felt aesthetics).
- Combines 1920s billiards hall nostalgia with modern millennial energy.

Product Knowledge:
1. "The Cueist Heavyweight French Terry Hoodie" ($88.00) — 480 GSM cotton, brass eyelets, felt applique.
2. "1928 Solid Brass 8-Ball Keyring & Pendant" ($36.00) — C36000 solid brass, laser-etched angles.
3. "Felt & Chalk Vintage 6-Panel Strapback" ($42.00) — Real green felt under-visor, purple silk embroidery.
4. "The Angle of Incidence Graphic Tee" ($48.00) — 240 GSM combed cotton.
5. "Walnut & Full-Grain Leather Cue Companion Bag" ($145.00) — Cognac leather, suede lining.

Boundaries & Policy:
- Do NOT invent shipping costs, unreleased coupon codes, or fake delivery promises.
- Free shipping applies on orders over $75.
- If asked about custom hall orders or complex customer service issues, direct them politely to our Contact Us section.
- Keep responses concise, helpful, and under 3-4 sentences.
`;

export const handleChat = async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message content is required.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey.trim() === '' || apiKey.includes('your_google_ai_studio')) {
    // Elegant fallback response if Gemini key is not configured in local environment yet
    return res.json({
      reply: `At Reverie, precision is our standard. (Note: Server running in preview mode. Add GEMINI_API_KEY to server/.env for live Google AI Studio responses!). Question answered: ${message}`
    });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION
    });

    const chatSession = model.startChat({
      history: Array.isArray(history) ? history : []
    });

    const result = await chatSession.sendMessage(message);
    const replyText = result.response.text();

    res.json({ reply: replyText });
  } catch (error) {
    console.error('Gemini Chat API Error:', error);
    res.status(500).json({
      reply: 'Our concierge line is currently calibrating. Please try again or visit our Contact Us section.'
    });
  }
};
