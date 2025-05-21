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
