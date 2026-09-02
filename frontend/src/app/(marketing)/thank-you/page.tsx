import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Clock, Mail } from "lucide-react";

export const metadata = {
  title: "Thank You — We'll be in touch within 24 hours",
  description: "Thanks for reaching out to LarpTech. We'll review your submission and reach out within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-24 md:py-32">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#34D399]/15">
          <CheckCircle className="h-8 w-8 text-[#34D399]" />
        </div>

        <h1 className="mt-8 text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#F5F5F7] md:text-[48px]">
          Thank you.
          <br />
          We&apos;ll be in touch within 24 hours.
        </h1>

        <p className="mx-auto mt-6 max-w-[480px] text-[18px] leading-[1.6] text-[#9A9AA5]">
          Your message has been received. We review every submission within 4 hours and reach out within 24 hours to schedule a scoping call.
        </p>

        <div className="mx-auto mt-10 max-w-[480px] rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#131318] p-6 text-left">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#9A9AA5]">What happens next</p>
          <div className="mt-4 space-y-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.06)]">
                <Clock className="h-4 w-4 text-[#9A9AA5]" />
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#F5F5F7]">We review your submission (within 4 hours)</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-[#9A9AA5]">We look at your business, stack, and which service you&apos;re interested in.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5B5FEF]/15">
                <Mail className="h-4 w-4 text-[#5B5FEF]" />
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#F5F5F7]">We reach out to schedule (within 24 hours)</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-[#9A9AA5]">If there&apos;s a fit, we&apos;ll propose a 30-minute scoping call. No generic pitch deck.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#34D399]/15">
                <CheckCircle className="h-4 w-4 text-[#34D399]" />
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#F5F5F7]">Scoping call + fixed-price proposal</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-[#9A9AA5]">30 min call → tight scope → fixed-price proposal in 24h → working system in 2-4 weeks.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/">
            <Button variant="secondary" size="lg">
              Back to homepage
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" className="gap-2">
              Explore services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-[#9A9AA5]/60">
          LEAD_RECEIVED • RESPONSE_WITHIN_24H • NO_SPAM
        </p>
      </div>
    </div>
  );
}
