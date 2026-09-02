import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => {
  return (
    <select
      className={cn(
        "flex h-11 w-full rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[#0A0A0F] px-4 py-2 text-[14px] text-[#F5F5F7] focus:border-[#5B5FEF]/50 focus:outline-none focus:ring-2 focus:ring-[#5B5FEF]/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});
Select.displayName = "Select";

export { Select };
