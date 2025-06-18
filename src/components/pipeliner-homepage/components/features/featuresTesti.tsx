import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import samsul from "../../../../../public/Relationship/samsul.png"
import PreviewPage from "../previews";

export default function Testimony() {
    return (
        <div className="max-w-full h-auto block static px-16 py-20 bg-[#F5F8FC] justify-center items-center">
            <div className="w-full h-auto static flex flex-col gap-16 bg-transparent">
                <div className="w-full h-auto static flex flex-col gap-4 justify-center items-center text-center">
                    <Badge>Testimonials</Badge>
                    <h2 className="font-sans font-semibold text-[40px] text-center text-grayscale-900">Their Favorites Feature</h2>
                    <p className="font-sans font-normal text-base text-center text-grayscale-700">Leverage insights from your business, customer, and product data <br /> to drive and enhance your team&apos;s performance and success.</p>
                </div>
                <div className="w-full h-auto static flex flex-row gap-5">
                    <div className="w-full h-[450px] static flex flex-col p-[40px] rounded-xl gap-[40px] bg-[#EBEDFD]">
                        <h3 className="font-sans font-normal text-3xl leading-[140%] text-grayscale-900">
                            Pipeliner is the first CRM that feels truly modern. It&apos;s powerful, flexible, and fast to build with. There&apos;s nothing like it.
                        </h3>
                        <div className="w-full h-auto static flex flex-row gap-4">
                            <Image src={samsul} alt="photo" className="w-13 h-13"></Image>
                            <div className="w-full static gap-1 flex flex-col">
                                <p className="w-full font-sans font-semibold text-base text-grayscale-900 leading-[150%]">Sahil Mansuri</p>
                                <p className="w-full font-sans font-normal text-base text-grayscale-600 leading-[150%]">CEO & Head of Finance</p>
                            </div>
                        </div>
                        <div className="border-1 text-grayscale-300 border-dashed"></div>
                        <div className="w-full h-auto flex flex-col"></div>
                        <div className="w-full h-auto static flex flex-col bg-transparent gap-4">
                            <p className="w-full h-auto font-sans font-normal text-sm text-graycale-600">Favorites Future</p>
                            <div className="w-full h-auto static flex flex-row"></div>
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
