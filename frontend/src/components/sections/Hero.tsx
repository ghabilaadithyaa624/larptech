"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-transparent to-[#0A0A0F]" />
      
      {/* Glow */}
      <div className="absolute left-1/2 top-[-200px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#5B5FEF]/15 blur-[120px]" />
      <div className="absolute right-[-100px] top-[200px] h-[400px] w-[400px] rounded-full bg-[#22D3EE]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[800px] text-center"
        >
          <div className="mb-8 flex justify-center">
            <Badge variant="accent" className="gap-1.5 px-3 py-1.5 text-[12px]">
              <Sparkles className="h-3 w-3" />
              One AI partner. Every revenue channel.
            </Badge>
          </div>

          <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#F5F5F7] md:text-[64px]">
            AI solutions for
            <br />
            <span className="bg-gradient-to-r from-[#5B5FEF] to-[#22D3EE] bg-clip-text text-transparent">
              everything that pays.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[560px] text-[18px] leading-[1.6] text-[#9A9AA5] md:text-[19px]">
            Stop juggling six vendors. LarpTech builds working AI systems across marketing, sales, security, commerce, and trading — one trusted partner, shared context.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="group gap-2">
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg">
                Explore Services
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 border-t border-[rgba(255,255,255,0.06)] pt-8">
            <div className="text-center">
              <p className="font-mono text-[12px] uppercase tracking-widest text-[#9A9AA5]">Trusted model</p>
              <p className="mt-1 text-[14px] font-medium text-[#F5F5F7]">Single partner → Multi-vertical leverage</p>
            </div>
            <div className="hidden h-8 w-px bg-[rgba(255,255,255,0.08)] sm:block" />
            <div className="hidden text-center sm:block">
              <p className="font-mono text-[12px] uppercase tracking-widest text-[#9A9AA5]">Delivery</p>
              <p className="mt-1 text-[14px] font-medium text-[#F5F5F7]">Working systems, not slides</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
