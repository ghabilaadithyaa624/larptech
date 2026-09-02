import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata = {
  title: "Case Studies — Proof, not promises",
  description: "Real results from LarpTech AI implementations across marketing, sales, security, commerce, and trading.",
};

const caseStudies = [
  {
    company: "SaaS Scale-up",
    vertical: "Sales AI",
    slug: "sales-ai",
    metric: "2.3x pipeline",
    description: "Lead scoring + automated outreach for 12-person sales team. 60% less manual work, 2.3x qualified pipeline in 90 days.",
    status: "live",
    tags: ["Lead Scoring", "Outreach Automation"],
  },
  {
    company: "E-commerce Brand",
    vertical: "E-commerce AI",
    slug: "ecommerce-ai",
    metric: "+28% conversion",
    description: "Real-time personalization engine. +28% conversion rate, +19% AOV through dynamic merchandising and pricing.",
    status: "live",
    tags: ["Personalization", "Pricing"],
  },
  {
    company: "Fintech Startup",
    vertical: "Security MSSP",
    slug: "security-mssp",
    metric: "SOC 2 in 3 weeks",
    description: "AI monitoring + compliance autopilot. SOC 2 Type II ready in 3 weeks, 90% fewer false positives vs previous tooling.",
    status: "live",
    tags: ["Threat Detection", "Compliance"],
  },
];

const comingSoon = [
  {
    vertical: "Marketing AI",
    title: "Content engine for B2B",
    description: "First client results landing soon — content automation that scales without headcount.",
  },
  {
    vertical: "AI Agents",
    title: "Ops automation suite",
    description: "Custom workflow agents — first results landing soon.",
  },
  {
    vertical: "Trading AI",
    title: "Quant research platform",
    description: "Systematic edge discovery — case study in progress.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-24">
      <div className="max-w-[720px]">
        <Badge variant="accent" className="mb-4">CASE_STUDIES</Badge>
        <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#F5F5F7] md:text-[56px]">
          Proof, not promises.
        </h1>
        <p className="mt-6 text-[18px] leading-[1.6] text-[#9A9AA5]">
          We ship working systems, not slides. Here&apos;s what that looks like in production — with real metrics, real timelines, and real business impact.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {caseStudies.map((cs) => (
          <Card key={cs.company} className="group relative overflow-hidden p-6 hover:bg-[#1A1A22] transition-colors">
            <div className="flex items-center justify-between">
              <Badge variant={cs.status === "live" ? "success" : "default"} className="gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                {cs.status}
              </Badge>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#9A9AA5]">{cs.vertical}</span>
            </div>

            <h3 className="mt-6 text-[18px] font-semibold text-[#F5F5F7]">{cs.company}</h3>
            <p className="mt-1 text-[28px] font-bold tracking-tight text-[#5B5FEF]">{cs.metric}</p>
            <p className="mt-3 text-[14px] leading-[1.6] text-[#9A9AA5]">{cs.description}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {cs.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[rgba(255,255,255,0.06)] px-2.5 py-1 text-[11px] text-[#9A9AA5]">
                  {tag}
                </span>
              ))}
            </div>

            <Link href={`/services/${cs.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#F5F5F7] hover:text-[#5B5FEF] transition-colors">
              Explore {cs.vertical}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Card>
        ))}
      </div>

      <div className="mt-20">
        <div className="flex items-center gap-3">
          <Clock className="h-4 w-4 text-[#9A9AA5]" />
          <h2 className="text-[20px] font-semibold text-[#F5F5F7]">Coming soon</h2>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#9A9AA5]">First results landing soon</span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {comingSoon.map((item) => (
            <Card key={item.vertical} className="border-dashed p-6 opacity-70">
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#9A9AA5]">{item.vertical}</p>
              <h3 className="mt-3 text-[16px] font-semibold text-[#F5F5F7]">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#9A9AA5]">{item.description}</p>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
                <div className="h-full w-[60%] rounded-full bg-[#5B5FEF]/50" />
              </div>
              <p className="mt-2 text-[11px] font-mono text-[#9A9AA5]">IN_PROGRESS — 60%</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-[12px] border border-[rgba(255,255,255,0.06)] bg-[#131318]/50 p-4 text-center">
          <p className="text-[13px] text-[#9A9AA5]">
            We never ship a visibly empty section. Real client results are being onboarded now — check back soon or{" "}
            <Link href="/contact" className="text-[#5B5FEF] hover:underline">
              be first to become a case study
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="mt-20 rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#131318] p-8 md:p-12 text-center">
        <h2 className="text-[24px] font-semibold text-[#F5F5F7] md:text-[32px]">Want to be our next case study?</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.6] text-[#9A9AA5]">
          We offer founding-client pricing for teams willing to co-build and share results. Fixed-price, fast delivery, measurable ROI.
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
