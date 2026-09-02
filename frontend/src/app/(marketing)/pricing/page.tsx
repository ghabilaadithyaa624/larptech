import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Pricing — Engagement models, not fixed SKUs",
  description: "Fixed-price first projects, then retainer or expansion. We sell outcomes, not hours. Book a scoping call for a proposal.",
};

const models = [
  {
    name: "First System",
    price: "Fixed-price",
    description: "One vertical, working system in 2-4 weeks. Clear scope, measurable ROI.",
    features: [
      "30-min scoping call",
      "Fixed-price proposal (no hourly)",
      "Working system in 2-4 weeks",
      "Docs + training + handoff",
      "30-day support window",
      "You own all code & data",
    ],
    cta: "Start with one vertical",
    popular: true,
  },
  {
    name: "Compound",
    price: "Retainer + expansion",
    description: "After first system works, we become default for next verticals. Context compounds.",
    features: [
      "Everything in First System",
      "Shared context across verticals",
      "Priority build queue",
      "Monthly optimization & retraining",
      "Slack support",
      "Quarterly roadmap planning",
    ],
    cta: "Explore retainer",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For larger teams needing multiple systems in parallel or on-prem requirements.",
    features: [
      "Multiple verticals in parallel",
      "On-prem / VPC deployment options",
      "Custom SLAs & compliance",
      "Dedicated engineering pod",
      "Executive reporting",
      "Long-term partnership",
    ],
    cta: "Talk to us",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[720px] text-center">
        <Badge variant="accent" className="mb-4">PRICING</Badge>
        <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#F5F5F7] md:text-[56px]">
          Engagement models,
          <br />
          not fixed SKUs.
        </h1>
        <p className="mt-6 text-[18px] leading-[1.6] text-[#9A9AA5]">
          Every business is different. We don&apos;t sell cookie-cutter packages — we scope your highest-leverage opportunity and propose a fixed-price first project. No hourly billing, no open-ended retainers until you see value.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {models.map((model) => (
          <Card key={model.name} className={`relative flex flex-col p-8 ${model.popular ? "border-[#5B5FEF]/30 bg-[#131318] shadow-[0_0_40px_rgba(91,95,239,0.15)]" : ""}`}>
            {model.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#5B5FEF] px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white">
                Most teams start here
              </div>
            )}

            <div>
              <h3 className="text-[20px] font-semibold text-[#F5F5F7]">{model.name}</h3>
              <p className="mt-1 text-[14px] font-medium text-[#5B5FEF]">{model.price}</p>
              <p className="mt-3 text-[14px] leading-[1.6] text-[#9A9AA5]">{model.description}</p>
            </div>

            <div className="mt-8 space-y-3">
              {model.features.map((f) => (
                <div key={f} className="flex gap-2.5">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#5B5FEF]/15">
                    <Check className="h-2.5 w-2.5 text-[#5B5FEF]" />
                  </div>
                  <span className="text-[13px] leading-[1.4] text-[#F5F5F7]">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <Link href={`/contact?service=${model.name === "Enterprise" ? "not-sure" : "not-sure"}`} className="block">
                <Button size="md" variant={model.popular ? "primary" : "secondary"} className="w-full gap-2">
                  {model.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#131318] p-8 md:p-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-[18px] font-semibold text-[#F5F5F7]">What&apos;s included in every project</h3>
            <div className="mt-6 space-y-4">
              {[
                { title: "Working system, not slides", desc: "Production-ready code that your team can run without us." },
                { title: "You own everything", desc: "Code, models, data, docs. No lock-in, no black boxes." },
                { title: "Explainability built in", desc: "You understand what the AI does, why, and when humans take over." },
              ].map((item) => (
                <div key={item.title}>
                  <p className="text-[14px] font-medium text-[#F5F5F7]">{item.title}</p>
                  <p className="mt-1 text-[13px] leading-[1.5] text-[#9A9AA5]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-[#F5F5F7]">How we price first projects</h3>
            <div className="mt-6 space-y-4 text-[14px] leading-[1.6] text-[#9A9AA5]">
              <p>
                After a 30-minute scoping call, we send a fixed-price proposal within 24 hours. Price depends on complexity, data availability, and integration points — not hours worked.
              </p>
              <p>
                Typical first projects range from $8k-$35k for a single vertical, delivered in 2-4 weeks. If we can&apos;t scope it tightly, we&apos;ll tell you — we&apos;d rather not take a project than ship a vague one.
              </p>
              <p className="font-mono text-[12px] uppercase tracking-widest text-[#5B5FEF]">No hourly billing • No surprise invoices</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-[24px] font-semibold text-[#F5F5F7]">Ready for a proposal?</h2>
        <p className="mx-auto mt-3 max-w-[480px] text-[15px] leading-[1.6] text-[#9A9AA5]">
          Book a 30-minute scoping call. We&apos;ll map your highest-leverage AI opportunity and send a fixed-price proposal within 24 hours.
        </p>
        <Link href="/contact" className="mt-8 inline-block">
          <Button size="lg" className="gap-2">
            Book a scoping call
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
