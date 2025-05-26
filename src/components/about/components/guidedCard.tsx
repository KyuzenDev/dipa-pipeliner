import { guide } from "@/data/guide"
import Image from "next/image";

export default function GuidedCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {guide.map((item, index) => (
                <div
                    key={index}
                    className="rounded-2xl bg-white shadow-sm p-6 border border-gray-100"
                >
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-semibold">{item.persentation}</span>
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <Image
                                src={item.icons}
                                alt={item.title}
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                    <div className="text-sm text-blue-500 flex items-center gap-1 cursor-pointer">
                        Learn more <span>→</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
