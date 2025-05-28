import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function FeaturesCTA() {
    return (
        <div className="max-w-full w-full pt-20 px-16 gap-16">
            <div className="w-full mx-auto gap-8 items-center flex flex-col">
                <Badge>Pipeliner Platform</Badge>
                <div className="flex flex-col gap-5 text-center">
                    <h1 className="text-4xl font-semibold leading-[120%]">Start Creating Powerful <br/> Relationship Today</h1>
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
    )
}
