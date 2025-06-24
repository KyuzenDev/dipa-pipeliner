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
            <div className="max-w-full relative h-auto border-b border-grayscale-200 pt-32 pb-16 px-4 md:px-16 bg-gradient-to-r from-white via-green-100 to-blue-200 overflow-hidden">
                <div className="gap-4 flex flex-col items-start">
                    <Badge>Pricing</Badge>
                    <h2 className="font-sans font-semibold text-4xl text-grayscale-900 leading-[120%]">Hack to Unicorn</h2>
                    <p className="font-sans font-normal text-base text-grayscale-700 leading-[150%]">
                        Start small, dream big. Get going in minutes—no commitment needed.
                    </p>
                </div>

                {/* Gambar di bawah teks di mobile & tablet, floating kanan hanya di desktop */}
                <div className="mt-10 lg:mt-0 relative w-full flex justify-center lg:absolute lg:bottom-0 lg:right-0 lg:w-auto lg:justify-end">
                    <Image src={Plate} alt="photos" width={900}/>
                </div>
            </div>

            <div className="max-w-full border-b border-grayscale-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 max-w-7xl mx-auto">
                    {pricing.map((plan) => (
                        <div
                            key={plan.head}
                            className={`border border-grayscale-200 flex flex-col justify-between h-full gap-6 sm:gap-8 p-6 shadow-sm rounded-xl transition-all duration-300
                            ${plan.version === 'Primary' ? 'bg-gradient-to-b from-white to-[#B7E2FA] from-45%' : 'bg-white'}
                            ${plan.head === 'Enterprise' ? 'md:col-span-2 lg:col-span-1' : ''}
                          `}
                        >
                            <div className="flex flex-col gap-4 p-6 border-x border-grayscale-200">
                                <div className="flex flex-row justify-between items-center">
                                    <h3 className="text-xl font-semibold text-gray-800">{plan.head}</h3>
                                    {plan.popularity && (
                                        <div className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full">
                                            Most Value
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-4xl font-bold text-grayscale-900">{plan.price}</p>
                                    <p className="text-sm font-normal text-grayscale-500">{plan.description}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 border-grayscale-200 border-x px-6 pt-7 pb-6 h-full">
                                <p className="text-base font-medium text-gray-700">{plan.notes}</p>

                                <ul className="flex flex-col gap-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-800">
                                            <Image
                                                src="/pricing-plan/checklist.svg"
                                                alt="checklist"
                                                width={20}
                                                height={20}
                                            />
                                            <span>{feature}</span>
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
            </div>

            <FeaturesFAQ />
            <CTA />
        </>
    )
}
