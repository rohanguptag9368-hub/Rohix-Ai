import PricingHero from "../components/pricing/PricingHero";
import PricingCards from "../components/pricing/PricingCards";
import FeatureComparison from "../components/pricing/FeatureComparison";
import CTASection from "../components/pricing/CTASection";

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <FeatureComparison />
      <CTASection />
    </>
  );
}