import { BarChart3, Brain, Building2, Megaphone, PenTool, Rocket, Share2, Sparkles, Target, TrendingUp } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    title: "AI Marketing Strategy",
    slug: "ai-marketing-strategy",
    icon: Sparkles,
    summary: "Practical AI campaigns, automation, and customer journeys designed for measurable growth.",
    detail: "Build an AI-powered marketing system that improves targeting, content production, lead nurturing, and campaign decisions without losing the human voice of your brand.",
    benefits: ["Smarter campaigns", "Better customer targeting", "Faster content workflows", "Clear growth metrics"],
    process: ["Business and audience audit", "AI opportunity map", "Campaign architecture", "Launch, measure, and refine"],
    audience: "Entrepreneurs, service businesses, creators, and growing brands that want to use AI with a clear business purpose."
  },
  {
    title: "Business Growth Consulting",
    slug: "business-growth-consulting",
    icon: TrendingUp,
    summary: "Premium consulting for offers, positioning, funnels, and growth systems.",
    detail: "Clarify your offer, sharpen your market position, and create a practical roadmap for sustainable business growth.",
    benefits: ["Stronger positioning", "Revenue-focused strategy", "Cleaner customer journey", "Prioritized action plan"],
    process: ["Growth diagnosis", "Offer and market review", "Strategy design", "Execution guidance"],
    audience: "Business owners and teams ready to move from scattered marketing to focused growth."
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    icon: Share2,
    summary: "Content systems and campaigns that turn attention into trust and leads.",
    detail: "Create a consistent social presence with strategy-led content, platform positioning, and conversion-focused messaging.",
    benefits: ["Higher brand visibility", "Consistent content calendar", "Better engagement", "More qualified inquiries"],
    process: ["Profile and audience audit", "Content pillars", "Campaign planning", "Performance optimization"],
    audience: "Founders, coaches, consultants, and businesses that want meaningful visibility."
  },
  {
    title: "Personal Branding",
    slug: "personal-branding",
    icon: PenTool,
    summary: "Build a premium identity that makes your expertise clear and memorable.",
    detail: "Shape your public identity, message, content style, and authority assets so people understand what you stand for and why they should trust you.",
    benefits: ["Clear personal identity", "Authority-building content", "Memorable messaging", "Premium online presence"],
    process: ["Brand discovery", "Message framework", "Visual and content direction", "Publishing rhythm"],
    audience: "Experts, speakers, consultants, and leaders building authority in their market."
  },
  {
    title: "Sales Funnel Strategy",
    slug: "sales-funnel-strategy",
    icon: Target,
    summary: "Convert attention into booked calls, leads, and revenue with structured funnels.",
    detail: "Design the path from awareness to consultation with offers, landing pages, emails, lead magnets, and follow-up flows.",
    benefits: ["Better lead conversion", "Clear offer journey", "Automated follow-up", "More booked consultations"],
    process: ["Funnel audit", "Offer and lead magnet strategy", "Page and email map", "Tracking and iteration"],
    audience: "Service providers and growing brands that need a predictable lead generation system."
  },
  {
    title: "Mindset and Motivation Coaching",
    slug: "mindset-motivation-coaching",
    icon: Brain,
    summary: "Develop the clarity, confidence, and discipline needed for ambitious growth.",
    detail: "Strengthen your mindset, decision-making, and personal performance so your inner habits match your external goals.",
    benefits: ["Higher confidence", "Clearer focus", "Better decision habits", "Consistent action"],
    process: ["Goal clarity", "Mindset pattern review", "Personal action framework", "Accountability rhythm"],
    audience: "Entrepreneurs, students, creators, and professionals who want stronger execution and self-belief."
  },
  {
    title: "Digital Transformation Consulting",
    slug: "digital-transformation-consulting",
    icon: Building2,
    summary: "Upgrade business operations with AI tools, digital systems, and smarter workflows.",
    detail: "Identify where technology can save time, improve customer experience, and unlock growth across your business.",
    benefits: ["More efficient operations", "Modern customer experience", "AI-ready workflows", "Scalable systems"],
    process: ["Workflow audit", "Tool and automation plan", "Implementation roadmap", "Team adoption support"],
    audience: "Traditional businesses and teams ready to modernize their marketing, operations, and client experience."
  }
];

export const blogPosts = [
  { title: "How AI Marketing Changes Business Growth", category: "AI Marketing", date: "July 23, 2026", excerpt: "AI is not replacing strategy. It is making strong strategy faster, sharper, and easier to execute." },
  { title: "The New Growth Mindset for Digital Entrepreneurs", category: "Mindset", date: "July 18, 2026", excerpt: "Future-ready founders combine discipline, learning speed, and emotional clarity." },
  { title: "Build a Personal Brand People Remember", category: "Personal Branding", date: "July 12, 2026", excerpt: "A premium personal brand begins with a clear promise, a distinct voice, and consistent proof." },
  { title: "Why Funnels Still Matter in the AI Era", category: "Growth Strategy", date: "July 5, 2026", excerpt: "Even with smarter tools, customers need a clear journey from awareness to trust." },
  { title: "The Future of Marketing Is Human plus AI", category: "Future of Marketing", date: "June 28, 2026", excerpt: "The best brands will use automation to create more relevant, personal experiences." }
];

export const stats = [
  { value: "AI", label: "Powered Strategy" },
  { value: "7", label: "Core Growth Services" },
  { value: "360", label: "Brand Growth View" }
];

export const trustItems = [
  { icon: Rocket, title: "Growth Focused", text: "Strategy is shaped around visibility, leads, revenue, and long-term brand authority." },
  { icon: BarChart3, title: "Data Minded", text: "Every campaign is guided by practical metrics instead of guesswork." },
  { icon: Megaphone, title: "Brand Led", text: "Your message stays sharp, human, and memorable while using modern AI systems." }
];
