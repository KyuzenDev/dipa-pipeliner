import { pricing } from "@/data/pricing"

export default function PricingPlan() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 p-6 max-w-7xl mx-auto">
            {pricing.map((plan) => (
                <div
                    key={plan.head}
                    className={`border border-grayscale-200 justify-between flex flex-col gap-8 p-6 shadow-sm ${plan.version === 'Primary' ? 'bg-gradient-to-b from-white to-[#B7E2FA] from-45%' : 'bg-white'
                        }`}
                >
                    {plan.popularity && (
                        <div className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-4">
                            Most Value
                        </div>
                    )}
                    <h3 className="text-xl font-semibold">{plan.head}</h3>
                    <p className="text-3xl font-bold my-2">{plan.price}</p>
                    <p className="text-sm text-gray-500 mb-2">{plan.description}</p>
                    <p className="text-sm text-gray-700 font-medium mb-4">{plan.notes}</p>
                    <ul className="space-y-2 mb-6">
                        {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start text-sm text-gray-800">
                                <span className="text-blue-600 mr-2">✔️</span> {feature}
                            </li>
                        ))}
                    </ul>
                    <button
                        className={`w-full py-2 px-4 rounded-xl text-sm font-semibold ${plan.head === 'Enterprise'
                                ? 'border border-gray-300 hover:bg-gray-50'
                                : 'bg-gray-900 text-white hover:bg-gray-800'
                            }`}
                    >
                        {plan.head === 'Enterprise' ? 'Talk to Sales' : `Go with ${plan.head}`}
                    </button>
                </div>
            ))}
        </div>
    )
}
