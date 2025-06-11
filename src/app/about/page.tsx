import CEO from "@/components/about/components/card/ceoCard";
import GuidedCard from "@/components/about/components/card/guidedCard";
import { Badge } from "@/components/ui/badge";
import FeaturesFAQ from "@/components/pipeliner-homepage/components/features/featuresFAQ";
import CTA from "@/components/CTA";
import Image from "next/image";
import Captain from "../../../public/Relationship/ceo.svg"

export default function About() {
    return (
        <>
            <div className="max-w-full w-full h-auto pt-12 px-4 md:px-[64px] gap-2">
                <div className="w-full h-auto md:h-[196px] gap-4 justify-center items-center flex flex-col mx-auto">
                    <Badge variant="default">
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
                <div className="w-full py-20 h-auto gap-8 flex flex-col items-center mx-auto">
                    <div className="w-full h-auto gap-4 flex flex-col justify-between items-center text-center">
                        <Badge variant="default">
                            Guided
                        </Badge>
                        <h2 className="font-semibold text-xl md:text-4xl leading-[120%] text-grayscale-900">Value Driven Actions</h2>
                        <p className="font-normal text-sm md:text-base leading-[150%] text-grayscale-700">
                            Don&apos;t hesitate to reach out to us if you need further assistance.
                        </p>
                        <GuidedCard />
                    </div>
                </div>
                <div className="max-w-full w-full h-[390px] bg-white px-15 border-y border-grayscale-200">
                    <div className="m-auto w-full h-full border-x px-15 py-20 gap-10 bg-grayscale-200 border-grayscale-200 flex flex-row justify-center items-center">
                        <Image src={Captain} alt="ceo-founder"></Image>
                        <div className="w-[630px] h-[205px] gap-14 mt-[-30px] flex flex-col">
                            <p className="w-full h-[126px] font-sans font-normal text-4xl text-grayscale-900 leading-[140%]">
                                Pipeliner is the first CRM that feels truly 
                                modern. It’s powerful, flexible, and fast
                                to build with. There’s nothing like it.
                            </p>
                            <div className="w-[155px] h-[45px] gap-1 flex flex-col">
                                <p className="font-sans font-semibold text-base leading-[150%] text-grayscale-900">Odessa Mira</p>
                                <p className="w-full font-sans font-normal text-sm leading-[150%] text-grayscale-600">CEO & Head of Finance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full py-20 h-auto gap-8 flex flex-col items-center mx-auto">
                    <div className="w-full h-auto gap-4 flex flex-col justify-between items-center text-center">
                        <Badge variant="default">
                            Founder
                        </Badge>
                        <h2 className="font-semibold text-xl md:text-4xl leading-[120%] text-grayscale-900">Meet the Team</h2>
                        <p className="font-normal text-sm md:text-base leading-[150%] text-grayscale-700">
                            We transform big ideas into smart solutions for today&apos;s teams.
                        </p>
                        <CEO />
                    </div>
                </div>

            </div>
            <FeaturesFAQ />
            <CTA />
        </>
    );
}
