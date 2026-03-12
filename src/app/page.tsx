"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, 
  Music, 
  Video, 
  Zap, 
  Sparkles,
  Play,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  ChevronDown,
  Menu,
  X,
  Wand2,
  Layers,
  Palette,
  Crown
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stats = [
    { value: "50K+", label: "Videos Created", icon: Video },
    { value: "4.9★", label: "User Rating", icon: Star },
    { value: "<5min", label: "Avg. Render Time", icon: Clock },
    { value: "100K+", label: "Happy Creators", icon: Users },
  ];

  const features = [
    {
      icon: Wand2,
      title: "Photorealistic AI",
      description: "Ultra-realistic visuals indistinguishable from reality. Natural lighting, film grain, depth of field.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Layers,
      title: "Beat-Synced",
      description: "AI automatically syncs visuals to your music's rhythm and energy.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Multiple Styles",
      description: "Photorealistic, Documentary, Cinematic, Urban, Portrait — choose your aesthetic.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "GPU-accelerated rendering. Your video ready in minutes, not hours.",
      gradient: "from-green-500 to-emerald-500"
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 9,
      period: "month",
      description: "Perfect for trying out",
      features: [
        "5 videos per month",
        "720p quality",
        "Basic styles",
        "Standard rendering",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: 29,
      period: "month",
      description: "For serious creators",
      features: [
        "20 videos per month",
        "1080p quality",
        "All styles unlocked",
        "Priority rendering",
        "No watermark",
        "API access"
      ],
      cta: "Start Creating",
      popular: true
    },
    {
      name: "Studio",
      price: 99,
      period: "month",
      description: "For studios & agencies",
      features: [
        "100 videos per month",
        "4K quality",
        "All styles unlocked",
        "Instant rendering",
        "Custom branding",
        "White-label option",
        "Dedicated support"
      ],
      cta: "Contact Sales",
      popular: false
    },
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Music Producer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      content: "The photorealistic quality blew my mind. My music videos look like they were shot by a professional crew.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Independent Artist",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      content: "I've tried other AI video tools, but VideoForge is on another level. The realism is unmatched.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Content Creator",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
      content: "From upload to finished video in 5 minutes. My TikTok engagement went through the roof!",
      rating: 5
    },
  ];

  const faqs = [
    {
      question: "How realistic are the generated videos?",
      answer: "Our videos are indistinguishable from professionally shot footage. We use advanced AI models with natural imperfections like film grain, depth of field, and realistic lighting."
    },
    {
      question: "What file formats are supported?",
      answer: "We support MP3, WAV, FLAC, and AAC for audio. Output videos are delivered in MP4 format at your chosen resolution."
    },
    {
      question: "How long does rendering take?",
      answer: "Most videos render in under 5 minutes. Pro and Studio plans get priority rendering for faster turnaround."
    },
    {
      question: "Can I use the videos commercially?",
      answer: "Yes! All paid plans include commercial usage rights. You own the content you create."
    },
  ];

  return (
    <div className="min-h-screen animated-gradient urban-grid relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent 70%)",
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
            transition: "left 0.1s ease-out, top 0.1s ease-out"
          }}
        />
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-500/20 to-transparent blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? "glass-dark shadow-2xl" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-background animate-pulse" />
              </div>
              <div>
                <span className="text-xl font-bold text-gradient-animated">VideoForge</span>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Pro Studio</div>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {["Features", "Pricing", "FAQ"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-white transition-colors duration-300 relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="hidden md:flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button className="text-muted-foreground hover:text-white transition-colors duration-300">
                Sign In
              </button>
              <button className="btn-premium flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Start Free
              </button>
            </motion.div>

            {/* Mobile Menu */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-dark border-t border-white/5"
            >
              <div className="px-4 py-6 space-y-4">
                {["Features", "Pricing", "FAQ"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-lg text-muted-foreground hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <button className="btn-premium w-full mt-4">
                  Start Free Trial
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">Photorealistic AI Video Generation</span>
            <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">NEW</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block">Transform Your Music Into</span>
            <span className="block text-gradient-animated mt-2">
              Stunning Visuals
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Upload your audio, add lyrics, choose a style. 
            <span className="text-white font-semibold"> AI creates photorealistic visuals</span> — 
            indistinguishable from reality.
          </motion.p>

          {/* Features Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {["Ultra-Realistic", "Film Grain", "Depth of Field", "Natural Lighting"].map((badge, i) => (
              <span key={badge} className="px-4 py-1.5 rounded-full glass text-sm" style={{ animationDelay: `${i * 0.1}s` }}>
                {badge}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button className="btn-premium flex items-center gap-3 text-lg px-8 py-4">
              <Play className="w-5 h-5" />
              Create Your First Video
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary-premium flex items-center gap-2 text-lg px-8 py-4">
              <Video className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="card-premium p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Photorealistic AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every frame is indistinguishable from reality. Natural imperfections, 
              authentic lighting, professional-grade quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-8 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three Steps to <span className="text-gradient">Viral Videos</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From audio to professional video in minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Upload Audio", desc: "Drag and drop your music file. We support all major formats.", icon: Upload },
              { step: "02", title: "Add Lyrics & Style", desc: "Paste your lyrics, choose from photorealistic styles.", icon: Music },
              { step: "03", title: "Download & Share", desc: "Your video renders in minutes. Download in HD or share directly.", icon: Video },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="gradient-border p-8 rounded-2xl">
                  <div className="absolute -top-6 left-8 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  <div className="mt-4">
                    <item.icon className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, <span className="text-gradient">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free, upgrade when you need more
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`pricing-card card-premium p-8 relative ${plan.popular ? 'popular scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full ${plan.popular ? 'btn-premium' : 'btn-secondary-premium'}`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by <span className="text-gradient">Creators</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium group"
              >
                <summary className="p-6 cursor-pointer flex items-center justify-between font-semibold text-lg">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl glass-dark p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Create Your First Video?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join 100,000+ creators making stunning music videos with photorealistic AI
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="btn-premium flex items-center gap-3 text-lg px-8 py-4">
                  <Play className="w-5 h-5" />
                  Start Free Trial
                </button>
                <button className="btn-secondary-premium flex items-center gap-2 text-lg px-8 py-4">
                  <Video className="w-5 h-5" />
                  View Examples
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">VideoForge</span>
            </div>
            <div className="flex gap-8 text-muted-foreground text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">API</a>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2026 VideoForge. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}