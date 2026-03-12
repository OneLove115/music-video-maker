"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Upload, 
  Music, 
  Video, 
  Zap, 
  CreditCard, 
  Check,
  Sparkles,
  Play,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [lyrics, setLyrics] = useState("");
  const [style, setStyle] = useState("modern");

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file);
      setStep(2);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file);
      setStep(2);
    }
  };

  const styles = [
    { id: "modern", name: "Modern", desc: "Sleek, minimalist visuals" },
    { id: "retro", name: "Retro", desc: "80s synthwave aesthetic" },
    { id: "cinematic", name: "Cinematic", desc: "Film-like transitions" },
    { id: "abstract", name: "Abstract", desc: "Artistic, surreal imagery" },
    { id: "neon", name: "Neon", desc: "Glowing, vibrant colors" },
    { id: "dark", name: "Dark", desc: "Moody, atmospheric" },
  ];

  const plans = [
    {
      name: "Starter",
      price: 9,
      videos: 5,
      features: ["5 videos/month", "720p quality", "Basic styles", "Watermark"],
    },
    {
      name: "Pro",
      price: 29,
      videos: 20,
      features: ["20 videos/month", "1080p quality", "All styles", "No watermark", "Priority rendering"],
      popular: true,
    },
    {
      name: "Studio",
      price: 99,
      videos: 100,
      features: ["100 videos/month", "4K quality", "All styles", "No watermark", "API access", "Custom branding"],
    },
  ];

  return (
    <div className="min-h-screen bg-background urban-grid">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-urban-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold neon-text">VideoForge</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-urban-muted hover:text-white transition">Features</a>
              <a href="#pricing" className="text-urban-muted hover:text-white transition">Pricing</a>
              <a href="#faq" className="text-urban-muted hover:text-white transition">FAQ</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="btn-secondary">Sign In</button>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-purple rounded-full blur-3xl opacity-20 animate-pulse-slow" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-pink rounded-full blur-3xl opacity-20 animate-pulse-slow" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent">
                AI Music Video Maker
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-urban-muted max-w-3xl mx-auto mb-8">
              Transform your audio into stunning visual experiences. Upload your track, 
              add lyrics, choose a style — let AI create your next viral video.
            </p>
          </motion.div>

          {/* Upload Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="relative border-2 border-dashed border-neon-purple/30 rounded-2xl p-12 hover:border-neon-purple/60 transition-all duration-300 cursor-pointer group"
            >
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white mb-1">
                    Drop your audio file here
                  </p>
                  <p className="text-urban-muted">
                    MP3, WAV, FLAC up to 100MB
                  </p>
                </div>
                {audioFile && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-green/10 text-neon-green">
                    <Music className="w-4 h-4" />
                    <span>{audioFile.name}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { value: "50K+", label: "Videos Created" },
              { value: "4.9★", label: "User Rating" },
              { value: "<5min", label: "Avg. Render Time" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold neon-text">{stat.value}</div>
                <div className="text-urban-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-urban-muted text-lg">Create professional music videos in 3 simple steps</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Upload,
                title: "Upload Audio",
                desc: "Drag and drop your music file. We support MP3, WAV, FLAC and more.",
                step: "01",
              },
              {
                icon: Sparkles,
                title: "Add Lyrics & Style",
                desc: "Paste your lyrics, choose from 10+ visual styles, customize colors and fonts.",
                step: "02",
              },
              {
                icon: Video,
                title: "Download & Share",
                desc: "Your video renders in minutes. Download in HD or share directly to social media.",
                step: "03",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative p-8 rounded-2xl neon-border glass"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center font-bold text-white">
                  {item.step}
                </div>
                <item.icon className="w-12 h-12 text-neon-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-urban-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-urban-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-urban-muted text-lg">Everything you need to create viral music videos</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Fast Rendering", desc: "GPU-accelerated processing" },
              { icon: Sparkles, title: "AI Generation", desc: "Unique visuals every time" },
              { icon: Music, title: "Beat Sync", desc: "Auto-sync lyrics to beats" },
              { icon: Video, title: "4K Export", desc: "Crystal clear quality" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-urban-card border border-urban-border hover:border-neon-purple/50 transition-all group"
              >
                <item.icon className="w-10 h-10 text-neon-purple mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-urban-muted text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
                Simple Pricing
              </span>
            </h2>
            <p className="text-urban-muted text-lg">Choose the plan that fits your creative needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? "neon-border neon-box bg-urban-card" 
                    : "bg-urban-card border border-urban-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-urban-muted">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-neon-green" />
                      <span className="text-urban-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? "btn-primary" 
                      : "btn-secondary"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl neon-border glass relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-neon-pink/10 to-neon-blue/10" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Create Your First Video?
              </h2>
              <p className="text-urban-muted text-lg mb-8">
                Join 50,000+ creators making stunning music videos with AI
              </p>
              <button className="btn-primary flex items-center gap-2 mx-auto">
                <Play className="w-5 h-5" />
                Start Creating Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-urban-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                <Video className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">VideoForge</span>
            </div>
            <div className="flex gap-6 text-urban-muted">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Support</a>
            </div>
            <div className="text-urban-muted text-sm">
              © 2026 VideoForge. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}