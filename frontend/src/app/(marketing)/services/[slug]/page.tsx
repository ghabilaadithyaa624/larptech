import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, serviceSlugs, services } from "@/lib/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} — ${service.hook}`,
    description: service.description,
    keywords: service.keywords,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute left-1/2 top-[-100px] h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-[120px] opacity-20" style={{ background: service.color }} />

        <div className="relative mx-auto max-w-[1280px] px-6 py-16 md:py-24">
          <div className="max-w-[720px]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border" style={{ background: service.accent, borderColor: `${service.color}30`, color: service.color }}>
                <Icon className="h-5 w-5" />
              </div>
              <Badge variant="default" className="font-mono">{service.slug.toUpperCase()}_01</Badge>
            </div>

            <h1 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#F5F5F7] md:text-[56px]">
              {service.title}
            </h1>
            <p className="mt-3 text-[20px] font-medium leading-[1.4]" style={{ color: service.color }}>
              {service.hook}
            </p>
            <p className="mt-6 text-[18px] leading-[1.6] text-[#9A9AA5]">{service.description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`/contact?service=${service.slug}`}>
                <Button size="lg" className="w-full gap-2 sm:w-auto">
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View all services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-[#F87171]" />
              <p className="font-mono text-[12px] uppercase tracking-widest text-[#F87171]">The Problem</p>
            </div>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#F5F5F7] md:text-[32px]">
              {service.problem.title}
            </h2>
            <div className="mt-8 space-y-4">
              {service.problem.points.map((point, i) => (
                <div key={i} className="flex gap-4 rounded-[12px] border border-[rgba(248,113,113,0.15)] bg-[rgba(248,113,113,0.05)] p-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(248,113,113,0.15)] text-[12px] font-mono text-[#F87171]">
                    {i + 1}
                  </div>
                  <p className="text-[15px] leading-[1.5] text-[#F5F5F7]">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8">
            <p className="font-mono text-[12px] uppercase tracking-widest text-[#9A9AA5]">Impact if unsolved</p>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-[14px] text-[#9A9AA5]">Typical cost</p>
                <p className="mt-1 text-[18px] font-semibold text-[#F5F5F7]">20-40% revenue left on table</p>
              </div>
              <div className="h-px bg-[rgba(255,255,255,0.06)]" />
              <div>
                <p className="text-[14px] text-[#9A9AA5]">Team impact</p>
                <p className="mt-1 text-[15px] leading-[1.5] text-[#F5F5F7]">High performers burn out on manual work that AI should handle</p>
              </div>
              <div className="h-px bg-[rgba(255,255,255,0.06)]" />
              <div>
                <p className="text-[14px] text-[#9A9AA5]">Competitive risk</p>
                <p className="mt-1 text-[15px] leading-[1.5] text-[#F5F5F7]">Competitors using AI compound faster — gap widens monthly</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-[rgba(255,255,255,0.06)] bg-[#131318]/50">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
          <div className="max-w-[720px]">
            <Badge variant="accent" className="mb-4">APPROACH</Badge>
            <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#F5F5F7] md:text-[36px]">
              {service.approach.title}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.approach.points.map((point, i) => (
              <Card key={i} className="relative overflow-hidden p-6">
                <div className="absolute right-0 top-0 p-4 font-mono text-[64px] font-bold leading-none text-[rgba(255,255,255,0.03)]">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#5B5FEF]/15 text-[#5B5FEF]">
                    <span className="font-mono text-[14px] font-bold">{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-[18px] font-semibold text-[#F5F5F7]">{point.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[#9A9AA5]">{point.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + CTA */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-widest text-[#34D399]">Outcomes</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.2] text-[#F5F5F7]">What you get in first 90 days</h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {service.benefits.map((b) => (
                <div key={b} className="flex items-center gap-2.5 rounded-[10px] border border-[rgba(52,211,153,0.15)] bg-[rgba(52,211,153,0.06)] px-4 py-3">
                  <Check className="h-4 w-4 shrink-0 text-[#34D399]" />
                  <span className="text-[13px] font-medium text-[#F5F5F7]">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[12px] border border-[rgba(255,255,255,0.08)] bg-[#131318] p-5">
              <p className="text-[13px] font-mono uppercase tracking-widest text-[#9A9AA5]">Tech stack</p>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#9A9AA5]">
                We build with your existing tools, not around them. FastAPI, Node, Python, your CRM, your warehouse — plus custom models where generic LLMs fall short. No lock-in.
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#131318] p-8">
            <h3 className="text-[20px] font-semibold text-[#F5F5F7]">Start with {service.title}</h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-[#9A9AA5]">
              30-minute scoping call. We&apos;ll map your highest-leverage opportunity, show you what working systems look like, and give you a fixed-price proposal for first delivery.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-[14px] text-[#F5F5F7]">
                <div className="h-1.5 w-1.5 rounded-full bg-[#5B5FEF]" />
                No generic pitch deck — specific to your business
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[#F5F5F7]">
                <div className="h-1.5 w-1.5 rounded-full bg-[#5B5FEF]" />
                Fixed-price first project, not open-ended hourly
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[#F5F5F7]">
                <div className="h-1.5 w-1.5 rounded-full bg-[#5B5FEF]" />
                Working prototype in 2-4 weeks
              </div>
            </div>

            <Link href={`/contact?service=${service.slug}`} className="mt-8 block">
              <Button size="lg" className="w-full gap-2">
                {service.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <p className="mt-3 text-center text-[12px] text-[#9A9AA5]">Response within 24h • No spam</p>

            <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-6">
              <p className="text-[13px] font-medium text-[#F5F5F7]">Explore other verticals</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {services.filter(s => s.slug !== service.slug).slice(0, 3).map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-1.5 text-[12px] text-[#9A9AA5] hover:text-[#F5F5F7] hover:border-[rgba(255,255,255,0.15)] transition-colors">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
