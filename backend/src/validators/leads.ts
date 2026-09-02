import { z } from "zod";

export const serviceInterests = [
  "marketing-ai",
  "sales-ai",
  "ai-agents",
  "security-mssp",
  "ecommerce-ai",
  "trading-ai",
  "not-sure",
] as const;

export type ServiceInterest = (typeof serviceInterests)[number];

export const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  company: z.string().max(100).optional().or(z.literal("")),
  serviceInterest: z.enum(serviceInterests),
  message: z.string().max(2000).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
