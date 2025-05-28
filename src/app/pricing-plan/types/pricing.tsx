export type Pricing = {
    head: string;
    price: string;
    description: string;
    notes: string;
    features: string[];
    version: "Primary" | "Secondary";
    popularity?: boolean;
}