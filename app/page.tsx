"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mic,
  Sparkles,
  Zap,
  Shield,
  Headphones,
  MessageSquare,
  Play,
  ArrowRight,
  Check,
  Star,
  Users,
  Globe,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Mic,
      title: "Voice Avatar",
      description:
        "Create a digital twin of your voice that speaks in real-time with natural intonation and emotion.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Sparkles,
      title: "AI-Powered TTS",
      description:
        "Advanced text-to-speech engine powered by Chatterbox TTS for human-like voice synthesis.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Real-Time Generation",
      description:
        "Instant voice generation with minimal latency, perfect for live applications and interactions.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and secure voice data handling to protect your digital identity.",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: Headphones,
      title: "Multiple Voices",
      description:
        "Access a library of pre-built voices or create custom voices tailored to your brand.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: MessageSquare,
      title: "Easy Integration",
      description:
        "Simple API and SDK integration for web, mobile, and desktop applications.",
      color: "from-indigo-500 to-blue-600",
    },
  ];

  const useCases = [
    {
      title: "Content Creators",
      description:
        "Generate voiceovers for videos, podcasts, and audiobooks in minutes.",
      icon: Star,
    },
    {
      title: "Customer Support",
      description:
        "Automate responses with natural-sounding voice agents available 24/7.",
      icon: Users,
    },
    {
      title: "E-Learning",
      description:
        "Create engaging educational content with professional voice narration.",
      icon: Globe,
    },
    {
      title: "Gaming & VR",
      description:
        "Bring characters to life with dynamic, real-time voice generation.",
      icon: Cpu,
    },
  ];

  const testimonials = [
    {
      quote:
        "Aura Voice transformed how we create content. What used to take hours now takes minutes.",
      author: "Sarah Chen",
      role: "Content Creator",
      avatar: "SC",
    },
    {
      quote:
        "The voice quality is indistinguishable from human speech. Our customers love it.",
      author: "Marcus Johnson",
      role: "CEO, TechStart",
      avatar: "MJ",
    },
    {
      quote:
        "Integration was seamless. We had it running in production within a day.",
      author: "Emily Rodriguez",
      role: "Lead Developer",
      avatar: "ER",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              {/* <Mic className="w-6 h-6 text-white" /> */}
              <Image alt="auravoice" src={"/logo.svg"} height={24} width={24} />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Aura Voice
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#use-cases"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="#testimonials"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button className="bg-linear-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="space-y-8"
            >
              <Badge className="bg-violet-500/10 text-violet-300 border-violet-500/20 px-4 py-2">
                <Sparkles className="w-3 h-3 mr-2" />
                Powered by Chatterbox TTS
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your Voice,
                <br />
                <span className="bg-linear-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Amplified by AI
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                Create lifelike voice avatars and generate human-quality speech
                in real-time. Transform any text into natural, expressive audio
                with just an API call.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="bg-linear-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg group"
                  >
                    Start Creating Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-6 text-lg"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-linear-to-br from-slate-700 to-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm">
                    Trusted by 10,000+ creators
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={scaleIn}
              className="relative"
            >
              <div className="relative z-10">
                {/* Voice Wave Visualization */}
                <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50 p-8 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                        <Mic className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Voice Avatar</p>
                        <p className="text-slate-400 text-sm">Active</p>
                      </div>
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
                      Live
                    </Badge>
                  </div>

                  {/* Waveform Animation */}
                  <div className="h-32 flex items-center justify-center gap-1 mb-6">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 bg-linear-to-t from-violet-500 to-purple-400 rounded-full"
                        initial={{ height: "20%" }}
                        animate={{
                          // eslint-disable-next-line react-hooks/purity
                          height: ["20%", `${Math.random() * 80 + 20}%`, "20%"],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.05,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>

                  {/* Text Input Preview */}
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <p className="text-slate-300 text-sm">
                      &quot;Welcome to Aura Voice. I&apos;m your AI voice
                      assistant, ready to help bring your content to life.&quot;
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-slate-400 hover:text-white"
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                      <div className="text-slate-400 text-sm">0:12 / 2:34</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="border-slate-600 text-slate-400"
                      >
                        Neural Voice
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-slate-600 text-slate-400"
                      >
                        48kHz
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-br from-violet-500/20 to-purple-600/20 rounded-2xl blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <Badge className="bg-blue-500/10 text-blue-300 border-blue-500/20 mb-4">
              Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Everything you need for
              <br />
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                professional voice synthesis
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Powerful features designed for developers, creators, and
              businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/30 border-slate-700/50 hover:border-slate-600 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <Badge className="bg-emerald-500/10 text-emerald-300 border-emerald-500/20 mb-4">
              Use Cases
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Built for
              <span className="bg-linear-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                {" "}
                every use case
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From content creation to enterprise applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/20 rounded-2xl p-6 border border-slate-700/30 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <Badge className="bg-amber-500/10 text-amber-300 border-amber-500/20 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Loved by
              <span className="bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                creators worldwide
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/30 border-slate-700/50 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center text-sm font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <Badge className="bg-pink-500/10 text-pink-300 border-pink-500/20 mb-4">
              Pricing
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Simple, transparent
              <span className="bg-linear-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                {" "}
                pricing
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Start free, scale as you grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-slate-800/30 border-slate-700/50 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Starter
                  </h3>
                  <p className="text-slate-400 mb-6">Perfect for trying out</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-slate-400">
                      $0
                    </span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <Button className="w-full mb-8 border-slate-600 bg-transparent hover:bg-slate-800">
                    Get Started
                  </Button>
                  <div className="space-y-3">
                    {[
                      "1 voice avatar",
                      "1,000 characters/month",
                      "Standard quality",
                      "Email support",
                      "API access",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-400" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-linear-to-r from-violet-500 to-purple-600 text-white border-0 px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              <Card className="bg-linear-to-b from-violet-500/10 to-purple-500/10 border-violet-500/50 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <p className="text-slate-400 mb-6">For serious creators</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">$29</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <Button className="w-full mb-8 bg-linear-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0">
                    Start Free Trial
                  </Button>
                  <div className="space-y-3">
                    {[
                      "5 voice avatars",
                      "50,000 characters/month",
                      "HD quality",
                      "Priority support",
                      "API access",
                      "Custom voices",
                      "Commercial use",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-400" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-slate-800/30 border-slate-700/50 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Enterprise
                  </h3>
                  <p className="text-slate-400 mb-6">For teams and scale</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-slate-400">
                      $99
                    </span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <Button className="w-full mb-8 border-slate-600 bg-transparent hover:bg-slate-800">
                    Contact Sales
                  </Button>
                  <div className="space-y-3">
                    {[
                      "Unlimited voice avatars",
                      "Unlimited characters",
                      "4K quality",
                      "24/7 support",
                      "Full API access",
                      "Custom models",
                      "SLA guarantee",
                      "Dedicated account manager",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-400" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-linear-to-br from-violet-500/20 to-purple-600/20 rounded-3xl border border-violet-500/30 p-12 text-center overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to bring your
                <br />
                <span className="bg-linear-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  content to life?
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join thousands of creators and businesses using Aura Voice to
                generate human-quality speech in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="bg-linear-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg group"
                  >
                    Start Creating Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-violet-500/50 bg-violet-500/10 hover:bg-violet-500/20 text-white px-8 py-6 text-lg"
                  >
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <Image
                    alt="auravoice"
                    src={"/logo.svg"}
                    height={20}
                    width={20}
                  />
                </div>
                <span className="text-lg font-bold">Aura Voice</span>
              </div>
              <p className="text-slate-400 text-sm">
                AI-powered voice synthesis for the modern web.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#use-cases"
                    className="hover:text-white transition-colors"
                  >
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-white transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="hover:text-white transition-colors"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 Aura Voice. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://twitter.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="https://discord.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Discord
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
