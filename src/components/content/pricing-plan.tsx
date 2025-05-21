import Image from "next/image";
import PlanList from "../../../public/landing/icons-small/list.svg";

export interface Pricing {
    head: string;
    price: string;
    description: string;
    notes: string;
    features: string[];
    version: "Primary" | "Secondary";
    popularity?: boolean;
}

export const pricing: Pricing[] = [
    {
        head: 'Plus',
        price: '$39',
        description: 'Per user / month. Billed monthly',
        notes: 'For Growing Team',
        features: [
            "Instant team collaboration",
            "Smart workflow automation",
            "Up to 5 projects",
            "Basic integrations",
            "Community support"
        ],
        version: "Secondary"
    },
    {
        head: 'Pro',
        price: '$69',
        description: 'Per user / month. Billed monthly',
        notes: 'For Scaling Businesses',
        features: [
            "Everything in Plus",
            "Advanced reporting & analystics",
            "Up to 20 projects",
            "Workflow Automation",
            "Priority email support"
        ],
        version: "Primary",
        popularity: true
    },
    {
        head: 'Enterprise',
        price: '$119',
        description: 'Per user / month. Billed monthly',
        notes: 'For Large Organizations',
        features: [
            "Everything in Pro",
            "Custom roles & permissions",
            "Unlimited project",
            "AI-powered insights",
            "Dedicated onboarding support"
        ],
        version: "Secondary"
    }
]

export default function PricingPlans() {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-full grid md:grid-cols-3 gap-8">
                    {pricing.map((plan) => (
                        <div
                            key={plan.head}
                            className={`rounded-2xl border ${plan.version === "Primary"
                                    ? "bg-gradient-to-b from-blue-50 to-white border-blue-200 shadow-md"
                                    : "bg-white border-gray-200"
                                } p-6 flex flex-col justify-between`}
                        >
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {plan.head}
                                    </h2>
                                    {plan.popularity && (
                                        <span className="text-sm text-white bg-blue-600 px-2 py-0.5 rounded-full">
                                            Most Value
                                        </span>
                                    )}
                                </div>
                                <p className="mt-2 text-5xl font-semibold">{plan.price}</p>
                                <p className="text-sm text-gray-500">{plan.description}</p>

                                <p className="mt-6 font-medium text-gray-700">{plan.notes}</p>
                                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start space-x-2">
                                            <Image src={PlanList} alt="Pricing-List-Number"></Image>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6">
                                {plan.head === "Enterprise" ? (
                                    <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50">
                                        Talk to Sales
                                    </button>
                                ) : (
                                    <button
                                        className={`w-full py-2 px-4 rounded-xl ${plan.version === "Primary"
                                                ? "bg-gray-900 hover:bg-gray-800 text-white"
                                                : "border border-gray-300 bg-white hover:bg-gray-200 text-gray-900"
                                            }`}
                                    >
                                        Go with {plan.head}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}