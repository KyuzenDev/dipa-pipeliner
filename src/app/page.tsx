import FeaturesCRM from "@/components/pipeliner-homepage/components/features/featuresCRM";
import Hero from "@/app/pipeliner-homepage/hero/page";
import Stats from "@/app/pipeliner-homepage/stats/page";
import FeaturesDataModel from "@/components/pipeliner-homepage/components/features/featuresDataModel";
import FeaturesFAQ from "@/components/pipeliner-homepage/components/features/featuresFAQ";
import CTA from "@/components/CTA";

export default function RootPage() {
  return (
    <div className="w-full py-12 px-18">
      <Hero />
      <FeaturesCRM />
      <Stats />
      <FeaturesDataModel />
      <FeaturesFAQ />
      <CTA />
    </div>
  );
}
