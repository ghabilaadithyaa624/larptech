import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0F] px-6 py-24 text-center">
      <p className="font-mono text-[14px] uppercase tracking-widest text-[#5B5FEF]">404_NOT_FOUND</p>
      <h1 className="mt-4 text-[48px] font-semibold tracking-[-0.03em] text-[#F5F5F7] md:text-[64px]">Page not found</h1>
      <p className="mt-4 max-w-[420px] text-[16px] leading-[1.6] text-[#9A9AA5]">
        The page you&apos;re looking for doesn&apos;t exist or was moved. Let&apos;s get you back to something that pays.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/">
          <Button size="lg">Back to homepage</Button>
        </Link>
        <Link href="/services">
          <Button variant="secondary" size="lg" className="gap-2">
            Explore services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
