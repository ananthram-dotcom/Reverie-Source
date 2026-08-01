# Reverie — Timeless Billiards Fan Apparel & Heritage Merch (MERN Stack)

Reverie is a high-end, vintage-inspired fan merchandise and apparel brand for billiards purists, players, and enthusiasts. Combining 1920s slate-and-felt hall aesthetics with modern millennial energy, Reverie offers heavyweight apparel, solid brass hardware, and an AI-powered concierge chat assistant built on Google Gemini.

---

## 🎱 Key Features

- **Vintage Hall Design System**: Deep Purple (`#4B2E6B`), Accent Purple (`#7B4FA0`), Warm Cream (`#F5EDE1`), Aged Brass (`#B8860B`), and Walnut Wood (`#3E2723`), paired with Playfair Display & Inter typography.
- **Full React 18 + Vite Frontend**: Fast SPA navigation via `react-router-dom`, smooth Framer Motion animations, per-page SEO via `react-helmet-async`, and responsive Tailwind CSS v4 styling.
- **Express + Node Backend**: RESTful API supporting product catalog, blog journal, newsletter subscriptions, contact inquiries, and AI chatbot proxy.
- **Google Gemini AI Assistant**: Contextual server-side integration powered by `@google/generative-ai` with a custom Reverie brand system persona.
- **MongoDB Atlas Integration**: Mongoose models (`Product`, `BlogPost`, `NewsletterSubscriber`, `ContactMessage`) with a seed script (`npm run seed`).
- **Free-Tier Ready Deployment**: Configured for Vercel (Frontend) and Render (Backend).

---

## 📁 Repository Structure

```
reverie/
├── client/                     # React 18 + Vite + Tailwind CSS frontend
│   ├── public/                 # Favicon & assets
│   ├── src/
│   │   ├── components/         # Navbar, Footer, ValueCard, ProductCard, BlogCard, ContactForm, NewsletterForm, ChatbotWidget, CartDrawer
│   │   ├── context/            # CartContext state
│   │   ├── pages/              # Home, About, ProductList, ProductDetail, BlogList, BlogDetail, NotFound
│   │   ├── data/               # Mock fallback dataset
│   │   ├── index.css           # Tailwind v4 theme & directives
│   │   └── App.jsx             # Router & Helmet provider
│   ├── vercel.json             # Vercel SPA routing configuration
│   └── package.json
├── server/                     # Node.js + Express backend
│   ├── src/
│   │   ├── config/             # DB connection (mongoose)
│   │   ├── models/             # Product, BlogPost, NewsletterSubscriber, ContactMessage
│   │   ├── routes/             # API routes (/api/products, /api/blog, /api/newsletter, /api/contact, /api/chat)
│   │   ├── controllers/        # Express handlers & Gemini AI integration
│   │   ├── middleware/         # Input validation & rate limiting
│   │   ├── seed.js             # Initial database seed script
│   │   └── index.js            # Express server entry point
│   ├── render.yaml             # Render deployment configuration
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🛠️ Local Development Setup

### 1. Frontend (`client/`)

```bash
cd client
npm install
npm run dev
```
The client app will launch locally at `http://localhost:5173`.

### 2. Backend (`server/`)

```bash
cd server
npm install
```

Create a `.env` file inside `server/` (copied from `.env.example`):
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/reverie?retryWrites=true&w=majority
GEMINI_API_KEY=your_google_ai_studio_api_key
CLIENT_ORIGIN=http://localhost:5173
```

Start the Express backend server:
```bash
npm run dev
```
The backend API will run on `http://localhost:5000`.

### 3. Seed MongoDB Database

To populate sample products and blog entries into your MongoDB Atlas cluster:
```bash
cd server
npm run seed
```

---

## 🚀 Free Deployment Guide

### Frontend Deployment (Vercel)
1. Import your GitHub repository into Vercel.
2. Set **Root Directory** to `client/`.
3. Set Environment Variable:
   - `VITE_API_URL` = `https://your-render-backend-url.onrender.com`
4. Deploy!

### Backend Deployment (Render.com)
1. Create a new **Web Service** on Render connected to your GitHub repo.
2. Set **Root Directory** to `server/`.
3. Set Environment Variables:
   - `MONGODB_URI` = your MongoDB Atlas connection string
   - `GEMINI_API_KEY` = your Google AI Studio API key
   - `CLIENT_ORIGIN` = `https://your-vercel-app.vercel.app`
4. Deploy!

---

## 🏷️ Release

- **Version**: `v1.0.0`
- **License**: MIT
