"use client";
import Image from "next/image";
import { founders } from "@/data/founders";
import Link from "next/link";
export default function FounderCards() {
    return (
        <div className="max-w-full w-full px-4 md:px-15 py-20 bg-white border-y border-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                {founders.map((founder) => (
                    <div
                        key={founder.name}
                        className={`w-full px-6 bg-gradient-to-r from-white to-[#B7E2FA25] md:px-10 bg-white border border-gray-300 rounded-xl 
                                    flex flex-col-reverse md:flex-col lg:flex-row-reverse justify-between items-center gap-6`}
                    >
                        <Image
                            src={founder.image}
                            alt={founder.name}
                            width={240}
                            height={560}
                            className="w-auto"
                        />

                        <div className="flex flex-col gap-6 text-center md:text-left">
                            <div className="flex flex-col gap-3">
                                <p className="font-semibold text-2xl text-grayscale-900">{founder.name}</p>
                                <p className="font-normal text-md text-grayscale-600">{founder.title}</p>
                            </div>

                            <div className="flex gap-2">
                                {founder.socialMedia?.map(({ platform, url }) => (
                                    <Link
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 flex justify-center items-center rounded bg-gray-200 hover:bg-gray-300"
                                    >
                                        <Image
                                            src={`/socialMedia/${platform}.svg`}
                                            alt={platform}
                                            width={16}
                                            height={16}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
