import { LucideIcon, Megaphone, TrendingUp, Bot, Shield, ShoppingCart, LineChart } from "lucide-react";

export type ServiceSlug =
  | "marketing-ai"
  | "sales-ai"
  | "ai-agents"
  | "security-mssp"
  | "ecommerce-ai"
  | "trading-ai";

export interface ServiceDefinition {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  hook: string;
  description: string;
  icon: LucideIcon;
  color: string;
  accent: string;
  problem: {
    title: string;
    points: string[];
  };
  approach: {
    title: string;
    points: { title: string; description: string }[];
  };
  benefits: string[];
  cta: string;
  keywords: string[];
}

export const services: ServiceDefinition[] = [
  {
    slug: "marketing-ai",
    title: "Marketing AI",
    shortTitle: "Marketing",
    hook: "Content that converts, on autopilot.",
    description: "AI-powered content generation, campaign optimization, and audience targeting that scales your acquisition without scaling headcount.",
    icon: Megaphone,
    color: "#5B5FEF",
    accent: "rgba(91, 95, 239, 0.1)",
    problem: {
      title: "Marketing teams are drowning in execution",
      points: [
        "Creating consistent, high-quality content across channels takes 20+ hours weekly",
        "Campaign optimization is guesswork without real-time data analysis",
        "Personalization at scale is impossible with manual workflows",
        "Most teams run 3-5 disconnected tools that don't share insights",
      ],
    },
    approach: {
      title: "How LarpTech builds your Marketing AI",
      points: [
        {
          title: "Content Engine",
          description: "Custom-trained models that generate on-brand content for your exact audience, with human approval workflows built in.",
        },
        {
          title: "Campaign Intelligence",
          description: "Real-time analysis of ad performance, email open rates, and SEO trends — automatically adjusting spend and messaging.",
        },
        {
          title: "Audience Brain",
          description: "Unified customer data layer that learns from every interaction and powers personalization across all touchpoints.",
        },
      ],
    },
    benefits: ["3-5x more content output", "40% lower CAC", "Real-time optimization", "Unified reporting"],
    cta: "Scale your marketing with AI",
    keywords: ["AI marketing", "content automation", "campaign optimization"],
  },
  {
    slug: "sales-ai",
    title: "Sales AI",
    shortTitle: "Sales",
    hook: "Every lead worked. No lead wasted.",
    description: "Intelligent lead scoring, automated outreach, and conversation intelligence that turns your sales process into a predictable revenue engine.",
    icon: TrendingUp,
    color: "#5B5FEF",
    accent: "rgba(91, 95, 239, 0.1)",
    problem: {
      title: "Sales teams chase ghosts",
      points: [
        "70% of leads are never properly followed up due to bandwidth constraints",
        "Rep time is wasted on unqualified prospects that will never close",
        "Follow-up sequences are manual, inconsistent, and easy to forget",
        "No visibility into which outreach actually moves deals forward",
      ],
    },
    approach: {
      title: "How LarpTech builds your Sales AI",
      points: [
        {
          title: "Lead Intelligence",
          description: "Scoring model trained on your historical closed-won data. Knows which signals predict revenue, not just activity.",
        },
        {
          title: "Outreach Autopilot",
          description: "Personalized email and LinkedIn sequences that adapt based on prospect behavior — stops when humans should take over.",
        },
        {
          title: "Conversation Coach",
          description: "Analyzes calls and emails to surface winning patterns, objection handling, and next-best actions for every rep.",
        },
      ],
    },
    benefits: ["2x qualified pipeline", "60% less manual work", "Faster ramp for new reps", "Predictable forecasting"],
    cta: "Build your AI sales engine",
    keywords: ["AI sales", "lead scoring", "sales automation"],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    shortTitle: "Agents",
    hook: "Custom AI workers for your exact workflow.",
    description: "Bespoke AI agents that automate complex, multi-step processes — from ops to support to research — built for how you actually work.",
    icon: Bot,
    color: "#22D3EE",
    accent: "rgba(34, 211, 238, 0.1)",
    problem: {
      title: "Generic tools don't fit real workflows",
      points: [
        "Off-the-shelf automation breaks on edge cases that define your business",
        "Teams waste hours on repetitive research, data entry, and triage",
        "Knowledge is trapped in docs, Slack, and people's heads — not actionable",
        "You need AI that understands your context, not just generic prompts",
      ],
    },
    approach: {
      title: "How LarpTech builds your AI Agents",
      points: [
        {
          title: "Workflow Mapping",
          description: "We shadow your team, document the actual process (including the messy parts), and identify highest-leverage automation points.",
        },
        {
          title: "Agent Architecture",
          description: "Multi-agent systems with memory, tools, and human-in-the-loop checkpoints. Built with your stack, not around it.",
        },
        {
          title: "Continuous Learning",
          description: "Agents improve from feedback and corrections. We monitor performance and retrain as your business evolves.",
        },
      ],
    },
    benefits: ["10-30 hrs/week saved per team", "Consistent execution", "Institutional knowledge preserved", "Scales with you"],
    cta: "Automate your critical workflows",
    keywords: ["AI agents", "workflow automation", "custom AI"],
  },
  {
    slug: "security-mssp",
    title: "Security MSSP",
    shortTitle: "Security",
    hook: "AI that watches while you build.",
    description: "Managed security powered by AI detection, automated response, and continuous compliance — enterprise-grade protection without enterprise overhead.",
    icon: Shield,
    color: "#22D3EE",
    accent: "rgba(34, 211, 238, 0.1)",
    problem: {
      title: "Security is a full-time job you don't have time for",
      points: [
        "Threat landscape evolves daily, but security reviews happen quarterly",
        "Alert fatigue from noisy tools that flag everything and prioritize nothing",
        "Compliance requirements (SOC 2, etc.) demand expertise you don't have in-house",
        "One breach can kill a growing business — but a full security team costs $500k+/year",
      ],
    },
    approach: {
      title: "How LarpTech builds your Security AI",
      points: [
        {
          title: "Intelligent Monitoring",
          description: "AI models trained on your infrastructure patterns that detect anomalies human analysts would miss — with 90% fewer false positives.",
        },
        {
          title: "Automated Response",
          description: "Playbooks that contain threats in seconds, not hours. Isolation, patching, and notification without waking anyone up at 3am.",
        },
        {
          title: "Compliance Autopilot",
          description: "Continuous evidence collection and policy enforcement for SOC 2, ISO 27001, and custom requirements. Audit-ready always.",
        },
      ],
    },
    benefits: ["24/7 monitoring", "90% fewer false positives", "SOC 2 ready in weeks", "Fraction of in-house cost"],
    cta: "Secure your business with AI",
    keywords: ["AI security", "MSSP", "threat detection"],
  },
  {
    slug: "ecommerce-ai",
    title: "E-commerce AI",
    shortTitle: "Commerce",
    hook: "More revenue per visitor, automatically.",
    description: "Personalization, pricing optimization, and inventory intelligence that turns browsers into buyers and one-time buyers into lifers.",
    icon: ShoppingCart,
    color: "#5B5FEF",
    accent: "rgba(91, 95, 239, 0.1)",
    problem: {
      title: "E-commerce is a game of tiny margins",
      points: [
        "95% of visitors bounce without buying — generic experiences don't convert",
        "Manual merchandising and pricing can't keep up with real-time demand",
        "Inventory either sits (cash trapped) or stocks out (revenue lost)",
        "Personalization tools are either too basic or require a data science team",
      ],
    },
    approach: {
      title: "How LarpTech builds your E-commerce AI",
      points: [
        {
          title: "Conversion Brain",
          description: "Real-time personalization engine that adjusts product recommendations, copy, and layout per visitor based on behavior and intent signals.",
        },
        {
          title: "Dynamic Commerce",
          description: "Pricing and inventory models that optimize for margin, not just volume — factoring in seasonality, competition, and customer LTV.",
        },
        {
          title: "Lifecycle Intelligence",
          description: "Predictive models for churn, repeat purchase, and upsell timing. Automated flows that feel personal because they are.",
        },
      ],
    },
    benefits: ["15-35% lift in conversion", "Higher AOV & LTV", "Smarter inventory", "Personalization at scale"],
    cta: "Optimize your storefront with AI",
    keywords: ["AI ecommerce", "personalization", "conversion optimization"],
  },
  {
    slug: "trading-ai",
    title: "Trading AI",
    shortTitle: "Trading",
    hook: "Alpha that compounds while you sleep.",
    description: "Quantitative research, strategy development, and execution infrastructure — institutional-grade trading intelligence for modern operators.",
    icon: LineChart,
    color: "#22D3EE",
    accent: "rgba(34, 211, 238, 0.1)",
    problem: {
      title: "Trading without infrastructure is gambling",
      points: [
        "Manual research can't process the data volume needed for real edge",
        "Emotional decision-making destroys even good strategies",
        "Backtesting is hard — live execution with slippage is harder",
        "You need quant infrastructure, not just another signal or indicator",
      ],
    },
    approach: {
      title: "How LarpTech builds your Trading AI",
      points: [
        {
          title: "Research Platform",
          description: "Data pipelines, feature engineering, and backtesting infrastructure customized to your market and timeframe. No black boxes.",
        },
        {
          title: "Strategy Engine",
          description: "ML models for signal generation, portfolio construction, and risk management — with full explainability and human oversight.",
        },
        {
          title: "Execution Stack",
          description: "Low-latency execution, smart order routing, and real-time risk checks. Built to handle your volume, not just demo size.",
        },
      ],
    },
    benefits: ["Systematic edge discovery", "Emotion-free execution", "Institutional-grade risk", "Scales with capital"],
    cta: "Build your trading infrastructure",
    keywords: ["AI trading", "quantitative trading", "algorithmic trading"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
