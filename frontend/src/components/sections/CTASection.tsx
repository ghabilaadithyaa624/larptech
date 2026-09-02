import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24">
      <div className="relative overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#131318] p-8 md:p-12">
        {/* Background effects */}
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#5B5FEF]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#22D3EE]/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[560px]">
            <p className="font-mono text-[12px] uppercase tracking-widest text-[#5B5FEF]">START_NOW</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#F5F5F7] md:text-[36px]">
              Ready to stop managing vendors and start compounding AI leverage?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#9A9AA5]">
              Pick one vertical to start. 30-minute scoping call, no pitch deck. We&apos;ll map your highest-leverage opportunity and show you what working systems look like.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/contact">
              <Button size="lg" className="w-full gap-2 md:w-auto">
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <p className="text-center text-[12px] text-[#9A9AA5] md:text-left">Response within 24 hours • No spam</p>
          </div>
        </div>
      </div>
    </section>
  );
}
