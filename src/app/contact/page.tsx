import FormContact from "@/components/contact/components/form/formContact";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
    return (
        <div className="relative max-w-full w-full h-auto py-8 px-4 md:py-[104px] md:px-[64px] gap-2">
            <div className="absolute w-[610px] top-0 right-0 -z-5 h-64 bg-[linear-gradient(to_bottom_right,_#D9F8C0_10%,_#88CCF8)] rounded-xl blur-[120px]"></div>
            <div className="relative w-full h-auto gap-8 flex flex-col items-center mx-auto">
                <div className="w-full h-auto gap-4 flex flex-col justify-between items-center text-center">
                    <Badge>
                        Contact
                    </Badge>
                    <h2 className="font-semibold text-xl md:text-4xl leading-[120%] text-grayscale-900">Support Center</h2>
                    <p className="font-normal text-sm md:text-base leading-[150%] text-grayscale-700">
                        Don&apos;t hesitate to reach out to us if you need further assistance.
                    </p>
                    <FormContact />
                </div>
            </div>
            <div className="absolute w-[610px] bottom-0 left-0 -z-5 h-64 bg-[linear-gradient(to_bottom_right,_#88CCF8_10%,_#D9F8C0)] rounded-xl blur-[120px]"></div>
        </div>
    );
}
