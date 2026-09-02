import Link from "next/link";
import { services } from "@/lib/services";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services — One AI partner, six revenue levers",
  description: "Marketing AI, Sales AI, AI Agents, Security MSSP, E-commerce AI, Trading AI — one trusted partner across every function that pays.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-24">
      <div className="max-w-[720px]">
        <Badge variant="accent" className="mb-4">SERVICES_OVERVIEW</Badge>
        <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#F5F5F7] md:text-[56px]">
          One AI partner.
          <br />
          Six ways to compound revenue.
        </h1>
        <p className="mt-6 text-[18px] leading-[1.6] text-[#9A9AA5]">
          Pick the highest-leverage vertical to start. We become your default vendor for the next because the relationship, delivery quality, and technical context already exist.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.slug} className="group relative overflow-hidden p-8 hover:bg-[#1A1A22] transition-colors">
              <div className="absolute -right-16 -top-16 h-[200px] w-[200px] rounded-full blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity" style={{ background: service.accent }} />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border" style={{ background: service.accent, borderColor: `${service.color}20`, color: service.color }}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-[22px] font-semibold text-[#F5F5F7]">{service.title}</h2>
                    <p className="text-[14px] font-medium" style={{ color: service.color }}>{service.hook}</p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-[1.6] text-[#9A9AA5]">{service.description}</p>

                <div className="mt-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[#9A9AA5]">Core outcome</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {service.benefits.map((b) => (
                      <span key={b} className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[12px] text-[#F5F5F7]">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <Link href={`/services/${service.slug}`}>
                    <Button size="md" className="gap-2">
                      Explore {service.shortTitle}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={`/contact?service=${service.slug}`}>
                    <Button variant="secondary" size="md">Get started</Button>
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-16 rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#131318] p-8 text-center">
        <p className="font-mono text-[12px] uppercase tracking-widest text-[#9A9AA5]">Not sure where to start?</p>
        <h3 className="mx-auto mt-3 max-w-[480px] text-[20px] font-semibold leading-[1.3] text-[#F5F5F7]">
          Tell us about your business and we&apos;ll map the highest-leverage AI opportunity in 30 minutes.
        </h3>
        <Link href="/contact?service=not-sure" className="mt-6 inline-block">
          <Button size="lg">Book a scoping call</Button>
        </Link>
      </div>
    </div>
  );
}
