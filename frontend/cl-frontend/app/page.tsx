import HeroSection from "@/components/HeroSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialSection";


export default function Home() {
  return (
    <div className="mx-auto space-y-10 px-6 py-8">
      <h1 className="text-3xl font-bold">Welcome to ClarityLedger 💰</h1>
      {/* Add the following sections as components later */}
      {/* <Overview />
          <TransactionSection />
          <BudgetSection />
          <ForecastSection />
          <DashboardSection /> */}
        <HeroSection />
        <FeatureHighlights />
        <HowItWorks />
        <TestimonialsSection />
    </div>
  );
}
