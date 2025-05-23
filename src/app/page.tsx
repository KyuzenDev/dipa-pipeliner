
import FeaturesCRM from "@/app/pipeliner-homepage/features/featuresCRM";
import Hero from "@/app/pipeliner-homepage/hero/page";
import Stats from "@/app/pipeliner-homepage/stats/page";
import FeaturesDataModel from "./pipeliner-homepage/features/featuresDataModel";

export default function RootPage() {
  return (
    <>
      <Hero />
      <FeaturesCRM />
      <Stats />
      <FeaturesDataModel />
    </>
  );
}
