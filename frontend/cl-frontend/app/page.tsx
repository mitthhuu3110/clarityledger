import HeroSection from "@/components/HeroSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialSection";
import ImmediateHelp from "@/components/ImmediateHelp"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <div className="mx-auto space-y-10 px-6 py-8">
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
        <ImmediateHelp />
        <Footer />
    </div>
  );
}
