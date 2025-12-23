import React from "react";

// Import all sections
import HeroSection from "./Compoents/HeroSection";
import IntegrationsBar from "./Compoents/IntegrationsBar";
import FeaturesFlow from "./Compoents/FeaturesFlow";
import DifferentiationSection from "./Compoents/DifferentiationSection";
import ValueTable from "./Compoents/ValueTable";
import TestimonialsSection from "./Compoents/TestimonialsSection";
import ObjectionHandling from "./Compoents/ObjectionHandling";
import RatingsSection from "./Compoents/RatingsSection";
import GuaranteeSection from "./Compoents/GuaranteeSection";
import FinalCTASection from "./Compoents/FinalCTASection";


const App = () => {
  return (
    <>
      <HeroSection />
      <IntegrationsBar />
      <FeaturesFlow />
      <DifferentiationSection />
      <ValueTable />
      <TestimonialsSection />
      <ObjectionHandling />
      <RatingsSection />
      <GuaranteeSection />
      <FinalCTASection />
     
    </>
  );
};

export default App;
