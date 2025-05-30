import { pricing } from "@/data/pricing"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export default function PricingPlan() {
    return (
        <>
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
                                variant={plan.version === 'Primary' ? 'default' : 'outline'} // Gunakan variant sesuai kondisi
                                className="w-full py-2 px-4 rounded-xl text-sm font-semibold"
                            >
                                {plan.head === 'Enterprise' ? 'Talk to Sales' : `Go with ${plan.head}`}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="max-w-full w-full pt-20 px-16 gap-16">
                <div className="w-full mx-auto gap-8 items-center flex flex-col">
                    <Badge>Pipeliner Platform</Badge>
                    <div className="flex flex-col gap-5 text-center">
                        <h1 className="text-4xl font-semibold leading-[120%]">Start Creating Powerful <br /> Relationship Today</h1>
                        <p className="font-normal text-grayscale-700">
                            Don&apos;t hesitate to reach out us if you need further assistance.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center justify-center">
                        <Button>Start for Free</Button>
                        <Button variant="secondary">Contact Sales</Button>
                    </div>

                    <div className="relative w-[708px] h-[503.48px]">
                    </div>
                </div>
            </div>
        </>
    )
}