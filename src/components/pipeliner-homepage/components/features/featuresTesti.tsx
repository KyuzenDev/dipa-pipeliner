import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import samsul from "../../../../../public/Relationship/samsul.png"
import PreviewPage from "../previews";
import auto from "../../../../../public/icons/flow/conect.png"
import produce from "../../../../../public/icons/flow/files.png"
import source from "../../../../../public/icons/flow/source.png"

export default function Testimony() {
    return (
        <div className="max-w-full h-auto block static px-16 py-20 bg-[#F5F8FC] justify-center items-center">
            <div className="w-full h-auto static flex flex-col gap-16 bg-transparent">
                <div className="w-full h-auto static flex flex-col gap-4 justify-center items-center text-center">
                    <Badge>Testimonials</Badge>
                    <h2 className="font-sans font-semibold text-[40px] text-center text-grayscale-900">Their Favorites Feature</h2>
                    <p className="font-sans font-normal text-base text-center text-grayscale-700">Leverage insights from your business, customer, and product data <br /> to drive and enhance your team&apos;s performance and success.</p>
                </div>
                <div className="w-full h-auto static flex flex-col lg:flex-row gap-5">
                    <div className="w-full h-auto static flex flex-col p-6 sm:p-10 rounded-xl gap-6 bg-[#EBEDFD] border-10 border-white">
                        <h3 className="font-sans font-normal text-xl sm:text-2xl md:text-3xl leading-[140%] text-grayscale-900">
                            Pipeliner is the first CRM that feels truly modern. It&apos;s powerful, flexible, and fast to build with. There&apos;s nothing like it.
                        </h3>
                        <div className="w-full h-auto static flex items-center gap-4">
                            <Image src={samsul} alt="photo" className="w-13 h-13 rounded-full"></Image>
                            <div className="flex flex-col">
                                <p className="font-sans font-semibold text-base text-grayscale-900 leading-[150%]">Sahil Mansuri</p>
                                <p className="font-sans font-normal text-sm text-grayscale-600 leading-[150%]">CEO & Head of Finance</p>
                            </div>
                        </div>
                        <div className="border-t border-dashed border-grayscale-300"></div>
                        <div className="w-full h-auto flex flex-col"></div>
                        <div className="w-full h-auto static flex flex-col bg-transparent gap-4 mt-[5px]">
                            <p className="w-full h-auto font-sans font-normal text-sm text-grayscale-600">Favorites Future</p>
                            <div className="w-full h-auto static flex flex-row gap-4">
                                <div className="w-30 h-auto static flex flex-row gap-2">
                                    <Image src={auto} width={24} height={24} alt="image"></Image>
                                    <p className="font-sans font-medium text-base leading-[150%] text-grayscale-900">Automation</p>
                                </div>
                                <div className="w-30 h-auto static flex flex-row gap-2">
                                    <Image src={produce} width={24} height={24} alt="image"></Image>
                                    <p className="font-sans font-medium text-base leading-[150%] text-grayscale-900">Productivity</p>
                                </div>
                                <div className="w-30 h-auto static flex flex-row gap-2">
                                    <Image src={source} width={24} height={24} alt="image"></Image>
                                    <p className="font-sans font-medium text-base leading-[150%] text-grayscale-900">Pipeline</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto">
                        <PreviewPage/>
                    </div>
                </div>
            </div>
        </div>
    )
}
