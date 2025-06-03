"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { founders } from "@/data/founders";

const socialPlatforms = ["facebook", "instagram", "dribble", "linkedin"];

export default function FounderCards() {
    return (
        <section className="max-w-full w-full px-4 md:px-15 py-20 bg-white border-y border-gray-300">
            {/* Grid Responsif */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                {founders.map((founder) => (
                    <div
                        key={founder.name}
                        className={`w-full px-6 md:px-10 bg-gray-100 border border-gray-300 rounded-xl 
                                    flex flex-col md:flex-row-reverse justify-between items-center gap-6`}
                    >
                        {/* Foto Founder */}
                        <Image
                            src={founder.image}
                            alt={founder.name}
                            width={240}
                            height={560}
                            className="w-auto"
                        />

                        {/* Detail Founder */}
                        <div className="flex flex-col gap-6 text-center md:text-left">
                            <div className="flex flex-col gap-3">
                                <p className="font-bold text-xl text-gray-900">{founder.name}</p>
                                <p className="font-normal text-md text-gray-600">{founder.title}</p>
                            </div>

                            {/* Ikon Media Sosial */}
                            <div className="flex gap-2 justify-center md:justify-start">
                                {socialPlatforms.map((platform) => (
                                    <Button
                                        key={platform}
                                        className="w-2 h-2 relative flex justify-center items-center rounded bg-gray-200 hover:bg-gray-300"
                                    >
                                        <Image src={`/socialMedia/${platform}.svg`} alt={platform} width={18} height={18} priority className="absolute z-1" />
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
