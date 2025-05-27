
import FeaturesCRM from "@/app/pipeliner-homepage/features/featuresCRM";
import Hero from "@/app/pipeliner-homepage/hero/page";
import Stats from "@/app/pipeliner-homepage/stats/page";
import FeaturesDataModel from "./pipeliner-homepage/features/featuresDataModel";
import FAQList from "./pipeliner-homepage/features/frequentlyAskedQuestions";

export default function RootPage() {
  return (
    <div className="w-full py-12 px-12">
      <Hero />
      <FeaturesCRM />
      <Stats />
      <FeaturesDataModel />
      <FAQList />
    </div>
  );
}
