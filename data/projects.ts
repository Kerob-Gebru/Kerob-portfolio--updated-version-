export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "In progress" | "Shipped" | "Prototype";
  links?: { label: string; href: string }[];
  featured?: boolean;
};

// Edit this file to add, remove, or update your projects.
export const projects: Project[] = [
  {
    id: "kbcoffeelink",
    name: "KBCoffeeLink (BirrBeans B2B)",
    tagline: "Ethiopian B2B coffee marketplace",
    description:
      "A digital marketplace connecting regional coffee washing station owners and suppliers directly with licensed export companies. Covers lot management, contracting, negotiation, in-app messaging, quality tracking, and analytics — built for the realities of the Ethiopian coffee trade, with Amharic/English localization and ECTA regulatory considerations in mind.",
    stack: [
      "React",
      "Express",
      "TypeScript",
      "Zustand",
      "Firebase Firestore",
      "Gemini AI",
      "Vite",
    ],
    status: "In progress",
    featured: true,
    links: [
      // TODO: add your repo/live links
      { label: "Repository", href: "#" },
    ],
  },
  {
    id: "doweit-voice",
    name: "Doweit_Voice",
    tagline: "Voice-first AI platform for generative-voice agents",
    description:
      "A reusable JS/React SDK paired with a Next.js UI to build, run, and embed generative-voice agents. Integrates multiple generative and voice providers that call registered JS functions seamlessly, with optimized JavaScript to resolve latency bottlenecks and improve component runtime efficiency. Standardized code patterns and Git workflows keep it reliable as it grows.",
    stack: ["Next.js", "React", "JavaScript", "Node.js", "Tailwind CSS", "Git"],
    status: "Shipped",
    links: [{ label: "Repository", href: "#" }],
  },
  {
    id: "ecommerce-microservices",
    name: "E-Commerce Microservices Platform",
    tagline: "High-throughput microservices for catalog search and cart",
    description:
      "A microservices architecture built to process real-time catalog search and cart management. Distributed messaging between services runs on NestJS and RabbitMQ, scaling parallel request throughput by 40%. Redis caching drops database lookup latency into the sub-10ms range.",
    stack: ["TypeScript", "NestJS", "RabbitMQ", "Redis"],
    status: "Shipped",
    links: [{ label: "Repository", href: "#" }],
  },
];
