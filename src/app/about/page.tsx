import GuidedCard from "@/components/about/components/card/guidedCard";
import { Badge } from "@/components/ui/badge";

export default function About() {
    return (
        <div className="max-w-full w-full h-auto py-8 px-4 md:py-[104px] md:px-[64px] gap-2">
            <div className="w-full h-auto md:h-[196px] gap-4 justify-center items-center flex flex-col mx-auto">
                <Badge>
                    About
                </Badge>
                <div className="w-full h-auto justify-center items-center flex flex-col gap-1 text-center">
                    <h2 className="font-semibold text-xl md:text-4xl leading-[120%] text-grayscale-900">The CRM Behind</h2>
                    <p className="font-normal text-xl md:text-4xl leading-[120%] text-grayscale-900">Thousands of Companies</p>
                </div>
                <p className="font-normal text-sm md:text-base leading-[150%] text-grayscale-700 text-center">
                    Pipeliner is on a mission to craft tools that support business growth through smart.
                </p>
            </div>
            <div className="w-full h-auto gap-8 flex flex-col items-center mx-auto">
                <div className="w-full h-auto gap-4 flex flex-col justify-between items-center text-center">
                    <Badge>
                        Guided
                    </Badge>
                    <h2 className="font-semibold text-xl md:text-4xl leading-[120%] text-grayscale-900">Value Driven Actions</h2>
                    <p className="font-normal text-sm md:text-base leading-[150%] text-grayscale-700">
                        Don’t hesitate to reach out to us if you need further assistance.
                    </p>
                    <GuidedCard />
                </div>
            </div>
        </div>
    );
}