import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[10px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-[#5B5FEF] text-white hover:bg-[#4A4EDB] hover:shadow-[0_0_20px_rgba(91,95,239,0.4)] active:scale-[0.98]":
              variant === "primary",
            "bg-[#131318] text-[#F5F5F7] border border-[rgba(255,255,255,0.08)] hover:bg-[#1A1A22] hover:border-[rgba(255,255,255,0.15)]":
              variant === "secondary",
            "text-[#9A9AA5] hover:text-[#F5F5F7] hover:bg-[rgba(255,255,255,0.05)]":
              variant === "ghost",
            "border border-[#5B5FEF] text-[#5B5FEF] hover:bg-[#5B5FEF] hover:text-white":
              variant === "outline",
          },
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-5 text-[14px]": size === "md",
            "h-12 px-7 text-[15px]": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
