"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Play, ArrowRight, Check, Star, Video, Sparkles, Zap, Shield, Clock, Users, ChevronDown, Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  const features = [
    {
      icon: Video,
      title: "Photorealistic Output",
      description: "Every frame indistinguishable from reality. Natural lighting, film grain, authentic depth of field.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "GPU-accelerated rendering. Your video ready in minutes, not hours.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Advanced AI automatically syncs visuals to your music's rhythm and energy.",
    },
    {
      icon: Shield,
      title: "Commercial License",
      description: "Full ownership of every video you create. Use it anywhere.",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: 9,
      description: "Try it out",
      features: ["5 videos/month", "720p quality", "Basic styles", "Watermark included"],
    },
    {
      name: "Pro",
      price: 29,
      description: "For creators",
      features: ["20 videos/month", "1080p quality", "All styles", "No watermark", "Priority support"],
      popular: true,
    },
    {
      name: "Studio",
      price: 99,
      description: "For teams",
      features: ["100 videos/month", "4K quality", "All styles", "API access", "Custom branding"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Music Producer",
      content: "The quality blew my mind. My videos look like they were shot by a professional crew.",
    },
    {
      name: "Alex R.",
      role: "Independent Artist",
      content: "Finally, a tool that delivers on its promise. Photorealistic and fast.",
    },
    {
      name: "Marcus J.",
      role: "Content Creator",
      content: "From upload to finished video in 5 minutes. My engagement went through the roof.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <Video className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg">VideoForge</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-400 hover:text-white transition-colors">Sign in</button>
            <button className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 p-6 space-y-4">
            <a href="#features" className="block text-gray-400 hover:text-white">Features</a>
            <a href="#pricing" className="block text-gray-400 hover:text-white">Pricing</a>
            <a href="#faq" className="block text-gray-400 hover:text-white">FAQ</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-6">
              <Sparkles className="w-3 h-3 text-violet-400" />
              <span>Photorealistic AI Video Generation</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Music Videos That
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">
                Look Real
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Upload your audio, add lyrics, choose a style. AI creates photorealistic visuals
              indistinguishable from reality. Ready in minutes.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all flex items-center gap-2">
                <Play className="w-4 h-4" />
                Start Creating
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>50,000+ creators</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min average</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Quality, AI Speed</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Every frame is indistinguishable from reality. Natural imperfections, authentic lighting, professional-grade quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all"
              >
                <feature.icon className="w-6 h-6 text-violet-400 mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-violet-950/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">Three simple steps to professional music videos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Upload Audio", desc: "Drag & drop your music file. We support MP3, WAV, FLAC." },
              { step: "02", title: "Add Lyrics & Style", desc: "Paste your lyrics, choose from 6 photorealistic styles." },
              { step: "03", title: "Download & Share", desc: "Your video renders in minutes. Download or share directly." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-gray-400">Start free, upgrade when you need more</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl border ${
                  plan.popular
                    ? "border-violet-500/50 bg-violet-500/5"
                    : "border-white/5 bg-white/[0.02]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="font-semibold text-lg">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-violet-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    plan.popular
                      ? "bg-white text-black hover:bg-gray-100"
                      : "border border-white/10 hover:bg-white/5"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Creators</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-gradient-to-b from-violet-950/10 to-transparent">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How realistic are the generated videos?",
                a: "Our videos are indistinguishable from professionally shot footage. We use advanced AI models with natural imperfections like film grain, depth of field, and realistic lighting.",
              },
              {
                q: "What file formats are supported?",
                a: "We support MP3, WAV, FLAC, and AAC for audio. Output videos are delivered in MP4 format at your chosen resolution.",
              },
              {
                q: "How long does rendering take?",
                a: "Most videos render in under 5 minutes. Pro and Studio plans get priority rendering for faster turnaround.",
              },
              {
                q: "Can I use the videos commercially?",
                a: "Yes! All paid plans include commercial usage rights. You own the content you create.",
              },
            ].map((faq, i) => (
              <details key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <summary className="flex items-center justify-between cursor-pointer font-medium">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your First Video?
          </h2>
          <p className="text-gray-400 mb-8">
            Join 50,000+ creators making stunning music videos with photorealistic AI
          </p>
          <button className="px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all inline-flex items-center gap-2">
            <Play className="w-4 h-4" />
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <Video className="w-3 h-3 text-white" />
            </div>
            <span className="font-medium">VideoForge</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <div className="text-sm text-gray-500">© 2026 VideoForge. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}