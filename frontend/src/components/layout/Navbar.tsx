"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[rgba(255,255,255,0.06)] bg-[#0A0A0F]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#5B5FEF] text-white font-bold text-[14px]">
              L
            </div>
            <span className="text-[18px] font-semibold tracking-tight text-[#F5F5F7]">LarpTech</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
                className="flex items-center gap-1.5 text-[14px] font-medium text-[#9A9AA5] hover:text-[#F5F5F7] transition-colors"
              >
                Services
                <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-[calc(100%+16px)] z-50 w-[640px] -translate-x-1/2 rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#131318] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group flex items-start gap-3 rounded-[10px] p-3 hover:bg-[rgba(255,255,255,0.04)] transition-colors"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-[rgba(255,255,255,0.06)] group-hover:bg-[#5B5FEF] transition-colors">
                            <Icon className="h-[18px] w-[18px] text-[#9A9AA5] group-hover:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[14px] font-medium text-[#F5F5F7]">{service.title}</span>
                              <ArrowUpRight className="h-3 w-3 text-[#9A9AA5] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="mt-0.5 text-[12px] leading-[1.4] text-[#9A9AA5]">{service.hook}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-1 border-t border-[rgba(255,255,255,0.06)] p-2">
                    <Link
                      href="/services"
                      className="flex w-full items-center justify-center rounded-[8px] bg-[rgba(255,255,255,0.04)] py-2.5 text-[13px] font-medium text-[#F5F5F7] hover:bg-[rgba(255,255,255,0.08)] transition-colors"
                    >
                      View all services
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" className="text-[14px] font-medium text-[#9A9AA5] hover:text-[#F5F5F7] transition-colors">
              About
            </Link>
            <Link href="/case-studies" className="text-[14px] font-medium text-[#9A9AA5] hover:text-[#F5F5F7] transition-colors">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-[14px] font-medium text-[#9A9AA5] hover:text-[#F5F5F7] transition-colors">
              Pricing
            </Link>
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden md:block">
              <Button size="md">Book a Consultation</Button>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-[rgba(255,255,255,0.08)] bg-[#131318] text-[#F5F5F7] md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-[rgba(255,255,255,0.06)] bg-[#0A0A0F] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-6">
              <div>
                <p className="mb-3 text-[11px] font-mono uppercase tracking-widest text-[#9A9AA5]">Services</p>
                <div className="grid grid-cols-1 gap-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[#131318] p-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[rgba(255,255,255,0.06)]">
                          <Icon className="h-4 w-4 text-[#9A9AA5]" />
                        </div>
                        <div>
                          <p className="text-[14px] font-medium text-[#F5F5F7]">{service.title}</p>
                          <p className="text-[12px] text-[#9A9AA5]">{service.hook}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/about" onClick={() => setMobileOpen(false)} className="text-[15px] font-medium text-[#F5F5F7]">
                  About
                </Link>
                <Link href="/case-studies" onClick={() => setMobileOpen(false)} className="text-[15px] font-medium text-[#F5F5F7]">
                  Case Studies
                </Link>
                <Link href="/pricing" onClick={() => setMobileOpen(false)} className="text-[15px] font-medium text-[#F5F5F7]">
                  Pricing
                </Link>
              </div>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-2">
                <Button size="lg" className="w-full">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[rgba(255,255,255,0.08)] bg-[#0A0A0F]/90 p-4 backdrop-blur-xl md:hidden">
        <Link href="/contact" className="block">
          <Button size="lg" className="w-full">
            Book a Consultation
          </Button>
        </Link>
      </div>
    </>
  );
}
