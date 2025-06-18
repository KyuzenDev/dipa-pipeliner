import CEO from "@/components/about/components/card/ceoCard";
import GuidedCard from "@/components/about/components/card/guidedCard";
import { Badge } from "@/components/ui/badge";
import FeaturesFAQ from "@/components/pipeliner-homepage/components/features/featuresFAQ";
import CTA from "@/components/CTA";
import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="max-w-full w-full h-auto pt-12 px-4 md:px-[64px] gap-2">
                <div className="relative w-full gap-4 justify-between items-center flex flex-col mx-auto mb-52">
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

                    <div className="absolute -bottom-8">
                        <Image
                            src="/ornament.svg"
                            alt="Ornament Image"
                            width={718}
                            height={347}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="relative z-10">
                        <Image
                            src="/imageAbout.svg"
                            alt="About Hero"
                            width={539}
                            height={329}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
                <div className="w-full h-auto flex justify-center items-center px-8">
                    <div className="w-full max-w-7xl py-8 flex justify-center items-center">
                        <Image src="/hero/pipeliner.png" alt="Pipeliner" width={1400} height={32} />
                    </div>
                </div>
                <div className="w-full py-28 h-auto gap-16 flex flex-col items-between mx-auto">
                    <div className="w-full h-auto gap-4 flex flex-col justify-between items-center text-center">
                        <Badge variant="default">
                            Guided
                        </Badge>
                        <h2 className="font-semibold text-xl md:text-4xl leading-[120%] text-grayscale-900">Value Driven Actions</h2>
                        <p className="font-normal text-sm md:text-base leading-[150%] text-grayscale-700">
                            Don&apos;t hesitate to reach out to us if you need further assistance.
                        </p>
                    </div>
                    <GuidedCard />
                </div>
                <div className="w-full h-auto flex flex-col items-center mx-auto">
                    <div className="w-full bg-[#F5F8FC] flex justify-center items-center border border-grayscale-200 py-10 px-5">
                        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center items-center gap-10 relative">
                            <div className="w-[203px] h-[230px] relative bg-gradient-to-br from-[#D9F8C0] to-[#88CCF8] border-[10px] border-white rounded-lg p-5">
                                <Image
                                    src="/filterImage.png"
                                    alt="Filter Image"
                                    width={212}
                                    height={213}
                                    className="absolute bottom-0 left-0 z-10"
                                />
                            </div>
                            <div className="flex flex-col h-full justify-center items-start text-center lg:text-left gap-4">
                                <p className="font-sans font-normal text-2xl leading-[130%] text-grayscale-900">
                                    Pipeliner is the first CRM that feels truly<br />
                                    modern. It&apos;s powerful, flexible, and fast<br />
                                    to build with. There&apos;s nothing like it.
                                </p>
                                <div className="flex flex-col gap-1 text-md">
                                    <p className="font-sans font-bold text-grayscale-900">Odessa Mira</p>
                                    <p className="font-sans font-normal text-grayscale-600">CEO & Head of Finance</p>
                                </div>
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
