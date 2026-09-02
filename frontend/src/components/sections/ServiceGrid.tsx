"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ServiceGrid() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge variant="default" className="mb-4">SERVICES_06</Badge>
          <h2 className="text-[32px] font-semibold tracking-[-0.02em] text-[#F5F5F7] md:text-[40px]">
            One partner.
            <br />
            Six revenue levers.
          </h2>
        </div>
        <p className="max-w-[420px] text-[16px] leading-[1.6] text-[#9A9AA5]">
          Start with one vertical. We become your default for the next because the relationship, delivery quality, and technical context already exist.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <Card className="relative flex h-full flex-col overflow-hidden p-6 hover:border-[rgba(255,255,255,0.15)] hover:bg-[#1A1A22] hover:shadow-[0_0_40px_rgba(91,95,239,0.1)]">
                  {/* Accent glow */}
                  <div
                    className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: service.accent }}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-[10px] border"
                        style={{
                          background: service.accent,
                          borderColor: `${service.color}20`,
                          color: service.color,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-[#9A9AA5] transition-all group-hover:border-[#5B5FEF]/30 group-hover:bg-[#5B5FEF] group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold text-[#F5F5F7]">{service.title}</h3>
                    <p className="mt-1.5 text-[14px] font-medium text-[#5B5FEF]">{service.hook}</p>
                    <p className="mt-3 line-clamp-2 text-[14px] leading-[1.5] text-[#9A9AA5]">{service.description}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {service.benefits.slice(0, 2).map((b) => (
                        <span key={b} className="rounded-full bg-[rgba(255,255,255,0.06)] px-2.5 py-1 text-[11px] text-[#9A9AA5]">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
