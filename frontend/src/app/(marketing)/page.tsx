import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, ShieldCheck, TrendingUp } from "lucide-react";

export const metadata = {
  title: "LarpTech — AI solutions for everything that pays.",
  description: "One AI partner across marketing, sales, agents, security, commerce, trading. Working AI systems, not slides.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />

      {/* Social proof / Why multi-vertical */}
      <section className="border-y border-[rgba(255,255,255,0.06)] bg-[#131318]/50">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Badge variant="default" className="mb-4">WHY_LARPTECH</Badge>
              <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#F5F5F7] md:text-[36px]">
                The multi-vertical model compounds.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#9A9AA5]">
                Most AI vendors learn your business from scratch. We carry context across functions — your customer data, your ops, your risk profile — so each new system ships faster and hits harder.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "One relationship, one technical context, many revenue levers",
                  "Delivery quality proven in one vertical → trust for the next",
                  "Shared data layer means agents actually talk to each other",
                  "No RFP theater. 30-min scoping → working prototype",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#5B5FEF]/15">
                      <Check className="h-3 w-3 text-[#5B5FEF]" />
                    </div>
                    <p className="text-[14px] leading-[1.5] text-[#F5F5F7]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#0A0A0F] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[rgba(91,95,239,0.15)]">
                    <Zap className="h-5 w-5 text-[#5B5FEF]" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-[#F5F5F7]">Speed to value</h3>
                </div>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#9A9AA5]">
                  First working system in 2-4 weeks, not quarters. We scope tightly, build vertically, and hand off systems your team can run.
                </p>
              </div>

              <div className="rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#0A0A0F] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[rgba(34,211,238,0.15)]">
                    <ShieldCheck className="h-5 w-5 text-[#22D3EE]" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-[#F5F5F7]">Credible & technical</h3>
                </div>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#9A9AA5]">
                  We sell security and trading — functions where trust and precision matter. That standard carries to every vertical we touch.
                </p>
              </div>

              <div className="rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#0A0A0F] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[rgba(52,211,153,0.15)]">
                    <TrendingUp className="h-5 w-5 text-[#34D399]" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-[#F5F5F7]">Revenue-obsessed</h3>
                </div>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#9A9AA5]">
                  We only build AI for functions that directly drive or protect revenue. No vanity AI, no science projects — just systems that pay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
