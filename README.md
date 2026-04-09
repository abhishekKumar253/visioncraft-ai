<h1 align="center">🎨 VisionCraft — AI Image Generator SaaS</h1>

<p align="center">
  Upload a photo, pick an AI preset, and generate stunning styled images in seconds.
  <br />
  Built with Next.js 16, OpenAI, Clerk, Drizzle ORM, Neon, and ImageKit.
</p>

## 🚀 Features

- 🎨 **AI Image Generation** — Powered by OpenAI GPT Image models
- 🖼️ **6 Style Presets** — Storybook 3D, Anime Cel, Clay Render, Pixart, Voxel Block, Marble Sculpture
- 🔐 **Authentication** — Clerk (Google, GitHub, Email & Password + Email Verification)
- 📊 **User Dashboard** — Track generations used and remaining
- 💳 **Subscription System** — Free, Pro, and Premium plans via Clerk Billing
- 🧾 **Generation History** — Every result saved and accessible anytime
- ☁️ **Image Storage** — Upload and delivery via ImageKit CDN
- 🛠️ **Error Monitoring** — Sentry with performance tracing and session replay
- ⚡ **Fast & Scalable** — Built on Next.js App Router with server components

---

## 💳 Pricing Plans

| Plan    | Generations/Month | Price       |
|---------|-------------------|-------------|
| Free    | 3                 | $0          |
| Pro     | 75                | $19/month   |
| Premium | 175               | $29/month   |

---
---

## 🏗️ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 16 (App Router)             |
| Language    | TypeScript 5                        |
| UI          | Tailwind CSS v4 + Shadcn UI         |
| Auth        | Clerk                               |
| Database    | PostgreSQL (Neon) + Drizzle ORM     |
| Payments    | Clerk Billing                       |
| AI          | OpenAI (GPT Image models)           |
| Storage/CDN | ImageKit                            |
| AI Dev Assistant | Cline (VS Code)                |
| Monitoring  | Sentry                              |

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root:

```bash
# Database
DATABASE_URL="your_neon_database_url"

# ImageKit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY="your_imagekit_public_key"
IMAGEKIT_PRIVATE_KEY="your_imagekit_private_key"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# OpenAI
OPEN_AI_API_KEY="your_openai_api_key"

# Sentry
SENTRY_AUTH_TOKEN="your_sentry_auth_token"
NEXT_PUBLIC_SENTRY_DSN="your_sentry_dsn"
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/visioncraft-ai.git
cd visioncraft-ai

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env.local
# Fill in your keys

# 4. Push database schema
npx drizzle-kit push

# 5. Run the dev server
npm run dev
```

---

## 👨‍💻 Author

**Abhishek Kumar**

- Portfolio: [Portfolio](<https://dev-portfolio-sooty-rho.vercel.app>)
- GitHub: [@abhishekkumar](https://github.com/abhishekKumar253)
- LinkedIn: [Abhishek Kumar](www.linkedin.com/in/abhishek-kumar-a391a422a)

---

## 📄 License

This project is licensed under the MIT License.
