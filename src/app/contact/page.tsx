

import { Badge } from "@/components/ui/badge";

export default function Contact() {
    return (
        <div className="max-w-full w-full h-auto py-8 px-4 md:py-[104px] md:px-[64px] gap-2">
            <div className="w-full h-auto gap-8 flex flex-col items-center mx-auto">
                <div className="w-full h-auto gap-4 flex flex-col justify-between items-center text-center">
                    <Badge>
                        Contact
                    </Badge>
                    <h2 className="font-semibold text-xl md:text-4xl leading-[120%] text-grayscale-900">Support Center</h2>
                    <p className="font-normal text-sm md:text-base leading-[150%] text-grayscale-700">
                        Don&apos;t hesitate to reach out to us if you need further assistance.
                    </p>

                </div>
            </div>
        </div>
    );
}