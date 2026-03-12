# VideoForge - AI Music Video Maker

Create stunning music videos with AI. Upload your audio, add lyrics, choose a style, and let AI generate professional visuals.

## Features

- **Audio Upload**: Drag & drop MP3, WAV, FLAC files
- **Lyrics Sync**: Automatic beat detection and lyric timing
- **AI Visual Generation**: DALL-E / Stable Diffusion powered imagery
- **Multiple Styles**: Modern, Retro, Cinematic, Neon, Dark, Abstract
- **HD Export**: 1080p / 4K video output
- **Multi-Platform Distribution**: YouTube, TikTok, Instagram Reels
- **Stripe Payments**: Subscription-based pricing

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Supabase
- **Video Rendering**: Remotion, FFmpeg
- **AI**: OpenAI DALL-E API
- **Payments**: Stripe
- **Automation**: n8n

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## Environment Variables

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxx

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxx

# n8n Webhook
N8N_WEBHOOK_URL=https://your-n8n-instance/webhook/music-video

# OpenAI
OPENAI_API_KEY=sk-xxx
```

## n8n Workflow

Import `n8n-workflow.json` into your n8n instance to enable:
- Audio beat detection
- AI image generation
- Video rendering
- Multi-platform distribution

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Database Setup (Supabase)

1. Create a new Supabase project
2. Run the SQL schema:

```sql
CREATE TABLE video_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id TEXT UNIQUE NOT NULL,
  user_id UUID NOT NULL,
  style TEXT NOT NULL,
  lyrics TEXT,
  status TEXT DEFAULT 'queued',
  progress INTEGER DEFAULT 0,
  video_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  stripe_customer_id TEXT,
  subscription_status TEXT DEFAULT 'free',
  videos_created INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Pricing Plans

| Plan | Price | Videos | Quality |
|------|-------|--------|---------|
| Starter | $9/mo | 5 | 720p |
| Pro | $29/mo | 20 | 1080p |
| Studio | $99/mo | 100 | 4K |

## API Endpoints

### POST /api/videos
Create a new video job.

```json
{
  "audio": "<file>",
  "lyrics": "<text>",
  "style": "modern",
  "userId": "<uuid>"
}
```

### GET /api/videos?jobId=xxx
Check video status.

### POST /api/checkout
Create Stripe checkout session.

```json
{
  "priceId": "price_xxx",
  "userId": "<uuid>"
}
```

## License

MIT