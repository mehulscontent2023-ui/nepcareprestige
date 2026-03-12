import HeroSection from "@/components/sections/HeroSection";
import ChallengeSection from "@/components/sections/ChallengeSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FootprintSection from "@/components/sections/FootprintSection";
import TrustSection from "@/components/sections/TrustSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <FootprintSection />
      <TrustSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
