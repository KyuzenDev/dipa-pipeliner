import TopNavbar from "@/components/TopNavbar"
import PricingGrid from "./planer/plan"
import FeaturesFAQ from "../pipeliner-homepage/features/featuresFAQ"
import FeaturesCTA from "../pipeliner-homepage/features/featuresCTA"
import Footer from "@/components/Footer"

export default function PricingPlan() {
    return (
        <section className="max-w-full w-full flex flex-col">
            <TopNavbar/>
            <PricingGrid/>
            <FeaturesFAQ/>
            <Footer/>
        </section>
    )
}