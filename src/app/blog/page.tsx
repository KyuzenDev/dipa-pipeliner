import CTA from "@/components/CTA";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
    return (
        <>
            <div className="max-w-full h-auto border-b border-grayscale-200 pt-32 pb-16 px-16 gap-4 flex flex-col bg-white justify-center items-center">
                <Badge>Announcement</Badge>
                <h2 className="m-auto w-full font-sans font-semibold text-4xl text-grayscale-900 text-center leading-[120%]">Read Blog & Articles</h2>
                <p className="m-auto w-full font-sans font-normal text-base text-grayscale-700 text-center leading-[150%]">Learn from our team and top experts on Pipeliner, CRM, and GTM.</p>
            </div>
            <CTA />
        </>
    )
}
