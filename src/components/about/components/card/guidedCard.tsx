import { guide } from "@/data/guide"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function GuidedCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
            {guide.map((item, index) => (
                <div
                    key={index}
                    className={`rounded-xl h-auto w-full flex flex-col justify-between gap-6 
                        bg-[linear-gradient(30deg,white_0%,#B7E2FA30_100%)] 
                        shadow-sm p-6 border border-gray-100
                        ${index === 2 ? 'sm:col-span-2' : ''}`}
                >
            
                    <div className="flex flex-col gap-6">
                        {/* Header: Value + Icon */}
                        <div className="flex items-center justify-between">
                            <span className="text-4xl font-semibold">{item.persentation}</span>
                            <Image
                                src={item.icons}
                                alt={item.title}
                                width={40}
                                height={40}
                                className="w-10 h-10"
                            />
                        </div>

                        {/* Title + Description */}
                        <div className="flex flex-col gap-2 text-left">
                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                            <p className="text-md text-grayscale-500 leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                    <div className="border-t-2 border-dashed border-grayscale-200"></div>
                    <Link
                        href="#"
                        className="text-sm text-grayscale-600 flex items-center justify-between gap-1 cursor-pointer group"
                    >
                        <p className="text-grayscale-600 font-medium">Learn more</p>
                        <ArrowRightIcon
                            size={18}
                            className="transition-transform duration-300 ease-in-out -translate-x-1 group-hover:translate-x-0.5"
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
}
