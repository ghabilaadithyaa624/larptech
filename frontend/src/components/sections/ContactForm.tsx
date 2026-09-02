"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams, useRouter } from "next/navigation";
import { leadSchema, type LeadInput, serviceInterests } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { services } from "@/lib/services";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const serviceLabels: Record<string, string> = {
  "marketing-ai": "Marketing AI",
  "sales-ai": "Sales AI",
  "ai-agents": "AI Agents",
  "security-mssp": "Security MSSP",
  "ecommerce-ai": "E-commerce AI",
  "trading-ai": "Trading AI",
  "not-sure": "Not sure / Multiple",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const preselected = searchParams.get("service");
  const initialService = preselected && (serviceInterests as readonly string[]).includes(preselected) ? preselected : "not-sure";

  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      serviceInterest: initialService as any,
      message: "",
    },
  });

  const onSubmit = async (data: LeadInput) => {
    setServerError(null);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/leads`
        : "/api/leads";

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to submit");
      }

      setIsSuccess(true);
      setTimeout(() => {
        router.push("/thank-you");
      }, 800);
    } catch (err: any) {
      setServerError(err.message || "Something went wrong. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-[16px] border border-[rgba(52,211,153,0.2)] bg-[rgba(52,211,153,0.08)] p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#34D399]/20">
          <CheckCircle className="h-6 w-6 text-[#34D399]" />
        </div>
        <h3 className="mt-4 text-[18px] font-semibold text-[#F5F5F7]">Message sent!</h3>
        <p className="mt-2 text-[14px] text-[#9A9AA5]">Redirecting you to confirmation...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[13px] font-medium text-[#F5F5F7]">
            Name <span className="text-[#F87171]">*</span>
          </label>
          <Input id="name" placeholder="Alex Morgan" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1.5 text-[12px] text-[#F87171]">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-[13px] font-medium text-[#F5F5F7]">
            Work Email <span className="text-[#F87171]">*</span>
          </label>
          <Input id="email" type="email" placeholder="alex@company.com" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1.5 text-[12px] text-[#F87171]">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-[13px] font-medium text-[#F5F5F7]">
          Company
        </label>
        <Input id="company" placeholder="Acme Inc." {...register("company")} />
        {errors.company && <p className="mt-1.5 text-[12px] text-[#F87171]">{errors.company.message}</p>}
      </div>

      <div>
        <label htmlFor="serviceInterest" className="mb-2 block text-[13px] font-medium text-[#F5F5F7]">
          Which service are you interested in? <span className="text-[#F87171]">*</span>
        </label>
        <Select id="serviceInterest" {...register("serviceInterest")} aria-invalid={!!errors.serviceInterest}>
          {serviceInterests.map((s) => (
            <option key={s} value={s} className="bg-[#0A0A0F]">
              {serviceLabels[s] || s}
            </option>
          ))}
        </Select>
        {errors.serviceInterest && <p className="mt-1.5 text-[12px] text-[#F87171]">{errors.serviceInterest.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[13px] font-medium text-[#F5F5F7]">
          Tell us about your business and what you want to build
        </label>
        <Textarea id="message" placeholder="We're a 50-person e-commerce brand doing $10M ARR. We want to..." {...register("message")} rows={5} />
        {errors.message && <p className="mt-1.5 text-[12px] text-[#F87171]">{errors.message.message}</p>}
      </div>

      {serverError && (
        <div className="flex gap-3 rounded-[10px] border border-[rgba(248,113,113,0.2)] bg-[rgba(248,113,113,0.08)] p-4">
          <AlertCircle className="h-4 w-4 shrink-0 text-[#F87171]" />
          <p className="text-[13px] leading-[1.5] text-[#F87171]">{serverError}</p>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Book a Consultation"
        )}
      </Button>

      <p className="text-center text-[12px] leading-[1.5] text-[#9A9AA5]">
        By submitting, you agree to be contacted about LarpTech services. No spam, response within 24 hours.
      </p>
    </form>
  );
}
