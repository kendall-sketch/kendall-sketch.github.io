import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatYoureHearingSection from "@/components/WhatYoureHearingSection";
import BuildTrapSection from "@/components/BuildTrapSection";
import SignsSection from "@/components/SignsSection";
import ForwardSection from "@/components/ForwardSection";
import SourceBar from "@/components/SourceBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <WhatYoureHearingSection />
      <BuildTrapSection />
      <SignsSection />
      <ForwardSection />
      <SourceBar />
      <Footer />
    </div>
  );
};

export default Index;
