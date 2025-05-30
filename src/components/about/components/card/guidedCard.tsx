import { guide } from "@/data/guide"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function GuidedCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {guide.map((item, index) => (
                <div
                    key={index}
                    className="rounded-xl h-[250px] max-w-[341px] flex flex-col justify-between bg-white shadow-sm p-6 border border-gray-100"
                >
                    <div className="flex items-center justify-between">
                        <span className="text-4xl font-semibold">{item.persentation}</span>
                        <Image
                            src={item.icons}
                            alt={item.title}
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="text-md text-grayscale-500">{item.description}</p>
                    </div>
                    <div className="border-t-2 border-dashed border-grayscale-200 pb-4"></div>
                    <Link href="#" className="text-sm text-grayscale-600 flex items-center justify-between gap-1 cursor-pointer">
                        <p className="font-medium">Learn more</p>
                       <ArrowRightIcon size={20} />
                    </Link>
                </div>
            ))}
        </div>
    )
}
