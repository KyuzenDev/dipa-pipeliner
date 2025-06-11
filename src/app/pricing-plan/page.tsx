import { pricing } from "@/data/pricing"
import { Button } from "@/components/ui/button";
import CTA from "@/components/CTA";
import FeaturesFAQ from "@/components/pipeliner-homepage/components/features/featuresFAQ";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Plate from "../../../public/pricing-plan/head.svg"

export default function PricingPlan() {
    return (
        <>
            <div className="max-w-full h-auto border-b border-grayscale-200 pt-32 pb-16 px-16 gap-4 flex flex-col bg-gradient-to-r from-white via-green-100 to-blue-200 : bg-white">
                <Badge>Pricing</Badge>
                <h2 className="m-auto w-full font-sans font-semibold text-4xl text-grayscale-900 leading-[120%]">Hack to Unicorn</h2>
                <p className="m-auto w-full font-sans font-normal text-base text-grayscale-700 leading-[150%]">Start small, dream big. Get going in minutes—no commitment needed.</p>

                <Image src={Plate} alt="photos" className="absolute right-0 top-40"></Image>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 max-w-7xl mx-auto">
                {pricing.map((plan) => (
                    <div
                        key={plan.head}
                        className={`border border-grayscale-200 justify-between flex flex-col gap-8 p-6 shadow-sm ${plan.version === 'Primary' ? 'bg-gradient-to-b from-white to-[#B7E2FA] from-45%' : 'bg-white'
                            }`}>
                        <div className="flex flex-row justify-between items-center">
                            <h3 className="text-xl font-medium">{plan.head}</h3>
                            {plan.popularity && (
                                <div className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full inline-block ml-4">
                                    Most Value
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-4xl font-bold">{plan.price}</p>
                            <p className="text-sm text-gray-500">{plan.description}</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-md text-grayscale-800 font-medium">{plan.notes}</p>
                            <ul className="flex flex-col gap-4">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start text-sm text-gray-800">
                                        <span className="text-blue-600">✔️</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant={plan.version === 'Primary' ? 'default' : 'outline'}
                                className="w-full py-2 px-4 rounded-xl text-sm font-semibold"
                            >
                                {plan.head === 'Enterprise' ? 'Talk to Sales' : `Go with ${plan.head}`}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <FeaturesFAQ />
            <CTA />
        </>
    )
}
