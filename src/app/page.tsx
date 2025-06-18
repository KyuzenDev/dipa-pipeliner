import FeaturesCRM from "@/components/pipeliner-homepage/components/features/featuresCRM";
import Hero from "@/app/pipeliner-homepage/hero/page";
import Stats from "@/app/pipeliner-homepage/stats/page";
import FeaturesDataModel from "@/components/pipeliner-homepage/components/features/featuresDataModel";
import Testimony from "@/components/pipeliner-homepage/components/features/featuresTesti";
import FeaturesFAQ from "@/components/pipeliner-homepage/components/features/featuresFAQ";
import CTA from "@/components/CTA";

export default function RootPage() {
  return (
    <div className="w-full">
      <Hero />
      <FeaturesCRM />
      <Stats />
      <FeaturesDataModel />
      <Testimony/>
      <FeaturesFAQ />
      <CTA />
    </div>
  );
}
