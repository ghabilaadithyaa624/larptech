import Link from "next/link";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#0A0A0F]">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#5B5FEF] text-white font-bold text-[14px]">
                L
              </div>
              <span className="text-[18px] font-semibold tracking-tight text-[#F5F5F7]">LarpTech</span>
            </Link>
            <p className="mt-4 max-w-[320px] text-[14px] leading-[1.6] text-[#9A9AA5]">
              One AI partner across every revenue-driving function. We build the AI that runs your business.
            </p>
            <p className="mt-6 text-[12px] font-mono text-[#9A9AA5]/60">AI_SOLUTIONS_FOR_EVERYTHING_THAT_PAYS</p>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-widest text-[#F5F5F7]">Services</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[14px] text-[#9A9AA5] hover:text-[#F5F5F7] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-widest text-[#F5F5F7]">Company</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li><Link href="/about" className="text-[14px] text-[#9A9AA5] hover:text-[#F5F5F7] transition-colors">About</Link></li>
              <li><Link href="/case-studies" className="text-[14px] text-[#9A9AA5] hover:text-[#F5F5F7] transition-colors">Case Studies</Link></li>
              <li><Link href="/pricing" className="text-[14px] text-[#9A9AA5] hover:text-[#F5F5F7] transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="text-[14px] text-[#9A9AA5] hover:text-[#F5F5F7] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-widest text-[#F5F5F7]">Connect</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li><span className="text-[14px] text-[#9A9AA5]">hello@larptech.ai</span></li>
              <li><span className="text-[14px] text-[#9A9AA5]">San Francisco • Remote</span></li>
            </ul>
            <div className="mt-6 rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[#131318] p-4">
              <p className="text-[12px] font-mono uppercase tracking-widest text-[#9A9AA5]">System Status</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#34D399] animate-pulse" />
                <span className="text-[13px] text-[#F5F5F7]">All systems operational</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.06)] pt-8 md:flex-row">
          <p className="text-[13px] text-[#9A9AA5]">© {new Date().getFullYear()} LarpTech. AI solutions for everything that pays.</p>
          <div className="flex items-center gap-6">
            <span className="text-[12px] font-mono text-[#9A9AA5]/60">BUILT_WITH_NEXTJS • POSTGRES • AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
