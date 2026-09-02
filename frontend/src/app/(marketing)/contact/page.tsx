import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/ContactForm";
import { Clock, ShieldCheck, Zap } from "lucide-react";

export const metadata = {
  title: "Contact — Book a Consultation",
  description: "Book a 30-minute scoping call. We'll map your highest-leverage AI opportunity and send a fixed-price proposal within 24 hours.",
};

function ContactFormFallback() {
  return (
    <div className="animate-pulse space-y-5">
      <div className="h-12 rounded-[10px] bg-[rgba(255,255,255,0.06)]" />
      <div className="h-12 rounded-[10px] bg-[rgba(255,255,255,0.06)]" />
      <div className="h-24 rounded-[10px] bg-[rgba(255,255,255,0.06)]" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Badge variant="accent" className="mb-4">CONTACT</Badge>
          <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#F5F5F7] md:text-[48px]">
            Book a consultation.
            <br />
            <span className="text-[#9A9AA5]">No pitch deck.</span>
          </h1>
          <p className="mt-6 max-w-[480px] text-[16px] leading-[1.6] text-[#9A9AA5]">
            30-minute scoping call. You describe the pain, we map the highest-leverage AI opportunity and show you what working systems look like. Fixed-price proposal within 24 hours.
          </p>

          <div className="mt-10 space-y-4">
            <Card className="flex gap-4 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#5B5FEF]/15">
                <Clock className="h-5 w-5 text-[#5B5FEF]" />
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#F5F5F7]">30-minute call, zero fluff</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-[#9A9AA5]">We ask about your business, your stack, and where you feel the most pain. You get a clear next step, not a sales process.</p>
              </div>
            </Card>

            <Card className="flex gap-4 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(34,211,238,0.15)]">
                <Zap className="h-5 w-5 text-[#22D3EE]" />
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#F5F5F7]">Fixed-price proposal in 24h</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-[#9A9AA5]">If there&apos;s a fit, we send a tight scope, timeline (2-4 weeks), and fixed price. No hourly, no surprises.</p>
              </div>
            </Card>

            <Card className="flex gap-4 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(52,211,153,0.15)]">
                <ShieldCheck className="h-5 w-5 text-[#34D399]" />
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#F5F5F7]">You own everything</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-[#9A9AA5]">Code, models, docs, data. Working system your team can run without us. No lock-in.</p>
              </div>
            </Card>
          </div>

          <div className="mt-10 rounded-[12px] border border-[rgba(255,255,255,0.06)] bg-[#131318] p-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#9A9AA5]">What happens after you submit</p>
            <div className="mt-4 flex gap-4">
              {[
                { step: "1", title: "We review", desc: "Within 4 hours" },
                { step: "2", title: "We reach out", desc: "Within 24 hours" },
                { step: "3", title: "Scoping call", desc: "30 min, no deck" },
              ].map((s, i) => (
                <div key={s.step} className="flex flex-1 items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5B5FEF] text-[11px] font-bold text-white">
                    {s.step}
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-[#F5F5F7]">{s.title}</p>
                    <p className="text-[11px] text-[#9A9AA5]">{s.desc}</p>
                  </div>
                  {i < 2 && <div className="ml-2 mt-3 hidden h-px flex-1 bg-[rgba(255,255,255,0.08)] md:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card className="h-fit p-8">
          <h2 className="text-[20px] font-semibold text-[#F5F5F7]">Tell us about your business</h2>
          <p className="mt-2 text-[14px] leading-[1.5] text-[#9A9AA5]">Response within 24 hours. No spam, ever.</p>

          <div className="mt-8">
            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm />
            </Suspense>
          </div>
        </Card>
      </div>
    </div>
  );
}
