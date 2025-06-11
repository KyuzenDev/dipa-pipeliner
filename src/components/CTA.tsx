import {
    Button
} from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function CTA() {
    return (
            <div className="max-w-full w-full shadow-blur-top pt-12 px-18 gap-16 bg-gradient-cta">

                <div className="w-full mx-auto gap-8 items-center z-2 flex flex-col relative">
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

                    <div className=" relative w-full flex justify-center items-center">
                        <Image
                            src="ctaItem.svg"
                            alt="ctaItem"
                            width={2088}
                            height={200}
                            className="absolute bottom-0 z-0"
                        />
                        <Image
                            src="ctaTablet.svg"
                            alt="ctaTablet"
                            width={908}
                            height={200}
                        />
                    </div>
                </div>
            </div>
    )
}