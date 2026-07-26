import PricingCard from "./PricingCard";

const plans = [
  {
    title: "Free",
    price: "₹0",
    period: "Forever",
    description:
      "Perfect for getting started with ROHIX AI.",
    features: [
      "Standard AI Chat",
      "Daily Messages",
      "Basic Vault",
      "1 GB Storage",
      "20 Bookmarks",
      "Explore",
      "Community Support",
    ],
    buttonText: "Start Free",
    buttonColor:
      "border border-white/10 bg-white/10 hover:bg-cyan-500 text-white",
    borderColor: "border-white/10",
    glowColor:
      "bg-[radial-gradient(circle_at_top,rgba(255,255,255,.05),transparent_65%)]",
  },

  {
    badge: "⭐ MOST POPULAR",
    badgeColor:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl",
    title: "Plus",
    price: "₹1,599",
    period: "/ month",
    description:
      "Perfect for creators, students and developers.",
    features: [
      "Unlimited AI Chat",
      "Advanced AI Models",
      "Smart Memory",
      "PDF Analysis",
      "DOCX Analysis",
      "Image Understanding",
      "Web Search",
      "100 GB Vault",
      "Unlimited Bookmarks",
      "Priority Queue",
      "Email Support",
    ],
    buttonText: "Upgrade to Plus",
    buttonColor:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white",
    borderColor: "border-cyan-400",
    glowColor:
      "bg-[radial-gradient(circle_at_top,rgba(34,211,238,.18),transparent_65%)]",
  },

  {
    badge: "👑 PROFESSIONAL",
    badgeColor:
      "bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white shadow-xl",
    title: "Pro",
    price: "₹9,999",
    period: "/ month",
    description:
      "Built for professionals and founders.",
    features: [
      "Everything in Plus",
      "Premium AI Models",
      "AI Coding Workspace",
      "Research Assistant",
      "Website Generator",
      "Unlimited Vault",
      "Unlimited Projects",
      "Workflow Automation",
      "Priority Support",
      "Advanced Security",
    ],
    buttonText: "Upgrade to Pro",
    buttonColor:
      "bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white",
    borderColor: "border-purple-500",
    glowColor:
      "bg-[radial-gradient(circle_at_top,rgba(168,85,247,.18),transparent_65%)]",
  },

  {
    badge: "🚀 ENTERPRISE",
    badgeColor:
      "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-xl",
    title: "Ultra",
    titleColor: "text-yellow-300",
    price: "₹19,999",
    period: "/ month",
    description:
      "Enterprise-grade AI platform.",
    features: [
      "Everything in Pro",
      "Unlimited AI Chat",
      "Unlimited Memory",
      "Unlimited Vault",
      "Multi AI Workspace",
      "AI Agents",
      "Enterprise Dashboard",
      "24×7 Premium Support",
      "Priority Features",
    ],
    buttonText: "Get Ultra",
    buttonColor:
      "bg-gradient-to-r from-yellow-400 to-amber-500 text-black",
    borderColor: "border-yellow-400",
    glowColor:
      "bg-[radial-gradient(circle_at_top,rgba(250,204,21,.18),transparent_65%)]",
  },
];

export default function PricingCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">

      <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-4">

        {plans.map((plan) => (
          <PricingCard
            key={plan.title}
            {...plan}
          />
        ))}

      </div>

    </section>
  );
}