import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About LarpTech — Why multi-vertical AI works",
  description: "We build AI that runs your business across marketing, sales, security, commerce, trading. One partner, shared context.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-24">
      <div className="max-w-[800px]">
        <Badge variant="accent" className="mb-4">ABOUT_LARPTECH</Badge>
        <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#F5F5F7] md:text-[56px]">
          One AI partner.
          <br />
          Every revenue channel.
        </h1>
        <p className="mt-6 text-[18px] leading-[1.7] text-[#9A9AA5]">
          LarpTech exists because growing businesses don&apos;t need six AI vendors — they need one partner who can actually ship working systems and carry context across functions.
        </p>
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div>
            <h2 className="text-[24px] font-semibold text-[#F5F5F7]">Company</h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#9A9AA5]">
              Most AI adoption fails not because the models are bad, but because integration is hard. A marketing tool that doesn&apos;t talk to sales. A security system that flags everything. An e-commerce personalization engine that needs a data science team to run.
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#9A9AA5]">
              We take the opposite approach: start narrow with one vertical where you have clear pain and measurable ROI, build a working system your team can run, then compound that technical context into the next vertical. Your customer data, your ops patterns, your risk profile — already understood.
            </p>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-[#F5F5F7]">Why multi-vertical actually works</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Shared context: your business logic learned once, reused everywhere",
                "Proven delivery: quality in one vertical builds trust for the next",
                "Data flywheel: agents that talk to each other beat point solutions",
                "Single throat to choke: one partner accountable for outcomes",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-[#9A9AA5]">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B5FEF]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-[#F5F5F7]">How we work</h3>
            <div className="mt-4 grid gap-4">
              {[
                { step: "01", title: "Scoping call (30 min)", desc: "You describe the pain, we map the highest-leverage opportunity. No deck." },
                { step: "02", title: "Fixed-price proposal", desc: "Clear scope, timeline, and success metrics for first delivery. 2-4 weeks." },
                { step: "03", title: "Build & handoff", desc: "Working system, docs, and training. Your team can run it without us." },
                { step: "04", title: "Compound", desc: "Once one vertical works, we become default for the next. Context carries." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span className="font-mono text-[13px] font-bold text-[#5B5FEF]">{s.step}</span>
                  <div>
                    <p className="text-[15px] font-medium text-[#F5F5F7]">{s.title}</p>
                    <p className="mt-1 text-[14px] leading-[1.5] text-[#9A9AA5]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#9A9AA5]">Team</p>
            <h3 className="mt-3 text-[18px] font-semibold text-[#F5F5F7]">Builders, not consultants</h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-[#9A9AA5]">
              We&apos;ve built AI systems that handle millions in revenue, detect real threats, and execute real trades. We don&apos;t sell strategy decks — we ship systems that work when we leave the room.
            </p>
            <div className="mt-6 space-y-3">
              <div className="rounded-[10px] bg-[#0A0A0F] p-3">
                <p className="text-[13px] font-medium text-[#F5F5F7]">Engineering-first</p>
                <p className="mt-1 text-[12px] text-[#9A9AA5]">FastAPI, Next.js, Postgres, Python — we build with modern, boring tech that lasts</p>
              </div>
              <div className="rounded-[10px] bg-[#0A0A0F] p-3">
                <p className="text-[13px] font-medium text-[#F5F5F7]">Revenue-obsessed</p>
                <p className="mt-1 text-[12px] text-[#9A9AA5]">Only AI for functions that directly drive or protect revenue</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#9A9AA5]">Principles</p>
            <div className="mt-4 space-y-4">
              {[
                { title: "Working systems > slides", desc: "If it doesn't work in production, it doesn't count." },
                { title: "Fixed-price, not hourly", desc: "We sell outcomes, not time. Scope is tight, delivery is fast." },
                { title: "No black boxes", desc: "You own the code, the models, the data. Explainability built in." },
              ].map((p) => (
                <div key={p.title}>
                  <p className="text-[14px] font-medium text-[#F5F5F7]">{p.title}</p>
                  <p className="mt-1 text-[13px] leading-[1.5] text-[#9A9AA5]">{p.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="rounded-[16px] bg-[#5B5FEF] p-6">
            <p className="text-[16px] font-semibold leading-[1.4] text-white">Ready to talk?</p>
            <p className="mt-2 text-[14px] leading-[1.5] text-white/80">30-minute scoping call, no pitch deck. We&apos;ll map your highest-leverage opportunity.</p>
            <Link href="/contact" className="mt-4 block">
              <Button variant="secondary" size="md" className="w-full gap-2 bg-white text-[#5B5FEF] hover:bg-white/90">
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-24 border-t border-[rgba(255,255,255,0.06)] pt-16">
        <h2 className="text-center text-[28px] font-semibold text-[#F5F5F7]">Values</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            { title: "Ship", desc: "Working software in weeks, not quarters. Perfect is the enemy of revenue." },
            { title: "Own", desc: "We take responsibility for outcomes. One throat to choke, one partner to trust." },
            { title: "Explain", desc: "No black boxes. You should understand what the AI does and why." },
            { title: "Compound", desc: "Every project makes the next faster. Context is the real moat." },
          ].map((v) => (
            <Card key={v.title} className="p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#5B5FEF]/15 font-mono text-[14px] font-bold text-[#5B5FEF]">
                {v.title[0]}
              </div>
              <h3 className="mt-4 text-[16px] font-semibold text-[#F5F5F7]">{v.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#9A9AA5]">{v.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
