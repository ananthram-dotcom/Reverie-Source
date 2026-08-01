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
    let replyText = '';

    // Sanitize history so that it begins with a 'user' message as required by Gemini SDK
    let validHistory = [];
    if (Array.isArray(history)) {
      validHistory = history
        .filter((h) => h && h.role && Array.isArray(h.parts) && h.parts[0]?.text)
        .map((h) => ({
          role: h.role === 'bot' || h.role === 'model' ? 'model' : 'user',
          parts: [{ text: String(h.parts[0].text) }]
        }));

      while (validHistory.length > 0 && validHistory[0].role === 'model') {
        validHistory.shift();
      }
    }

    // Try live Google Gemini API with supported models
    const modelsToTry = ['gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-3.5-flash-lite', 'gemini-omni-flash-preview', 'gemini-2.5-flash'];
    let success = false;

    for (const modelName of modelsToTry) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: SYSTEM_INSTRUCTION
        });
        const chatSession = model.startChat({
          history: validHistory
        });
        const result = await chatSession.sendMessage(message);
        replyText = result.response.text();
        if (replyText) {
          success = true;
          console.log(`✨ Live Google Gemini response generated using model: ${modelName}`);
          break;
        }
      } catch (e) {
        console.warn(`Model ${modelName} failed, trying next:`, e.message);
      }
    }

    // Smart Concierge fallback if live API key is invalid or calibrating
    if (!success || !replyText) {
      const lower = message.toLowerCase();
      if (lower.includes('size') || lower.includes('fit') || lower.includes('hoodie')) {
        replyText = "Our Reverie hoodies feature a heavyweight 480 GSM French Terry cotton with a relaxed vintage drape. For a classic structured fit, order true to size. For an oversized 90s drop shoulder look, size up one step!";
      } else if (lower.includes('story') || lower.includes('history') || lower.includes('about')) {
        replyText = "Reverie was founded on the geometry and atmosphere of vintage 1920s billiards halls. We combine deep felt green, rich purple silk embroidery, and solid brass hardware for purists and players alike.";
      } else if (lower.includes('bestseller') || lower.includes('top') || lower.includes('recommend')) {
        replyText = "Our top bestseller is 'The Cueist Heavyweight French Terry Hoodie' ($88.00) paired with the 1928 Solid Brass 8-Ball Keyring ($36.00). Free shipping applies on all orders over $75!";
      } else {
        replyText = `Greetings! I am the Reverie Billiards Concierge AI. At Reverie, every detail is engineered with precision geometry. How can I assist you today with our merchandise, sizing, or brand history?`;
      }
    }

    return res.json({ reply: replyText });
  } catch (error) {
    console.error('Gemini Chat Controller Error:', error);
    return res.json({
      reply: 'Greetings from Reverie Concierge! How can I assist you today with our merchandise or sizing?'
    });
  }
};


