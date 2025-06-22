
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import WhatYouLearn from "@/components/WhatYouLearn";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Benefits />
      <Testimonials />
      <WhatYouLearn />
      <FinalCTA />
    </div>
  );
};

export default Index;
