import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "success";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wider uppercase font-mono",
        {
          "bg-[rgba(255,255,255,0.08)] text-[#9A9AA5] border border-[rgba(255,255,255,0.08)]": variant === "default",
          "bg-[rgba(91,95,239,0.15)] text-[#5B5FEF] border border-[rgba(91,95,239,0.2)]": variant === "accent",
          "bg-[rgba(52,211,153,0.15)] text-[#34D399] border border-[rgba(52,211,153,0.2)]": variant === "success",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
