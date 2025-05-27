import FeaturesCRM from "@/app/pipeliner-homepage/features/featuresCRM";
import Hero from "@/app/pipeliner-homepage/hero/page";
import Stats from "@/app/pipeliner-homepage/stats/page";
import FeaturesDataModel from "@/app/pipeliner-homepage/features/featuresDataModel";
import FeaturesFAQ from "@/app/pipeliner-homepage/features/featuresFAQ";

export default function RootPage() {
  return (
    <div className="w-full py-12 px-18">
      <Hero />
      <FeaturesCRM />
      <Stats />
      <FeaturesDataModel />
      <FeaturesFAQ />
    </div>
  );
}
