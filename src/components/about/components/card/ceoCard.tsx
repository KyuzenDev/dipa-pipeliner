"use client";
import Image from "next/image";

export default function FounderCard() {
    return (
        <section className="max-w-full w-full px-15 py-20 flex justify-center items-center bg-white border-y border-gray-300">
            <div className="max-w-md w-full px-10 py-12 bg-gray-100 border border-gray-300 rounded-xl flex flex-col items-center gap-6">

                {/* Foto CEO */}
                <Image
                    src="/ceo/terry.svg"
                    alt="Odessa Mira"
                    width={120}
                    height={120}
                    className="rounded-full shadow-lg"
                />

                {/* Deskripsi CEO */}
                <p className="font-sans font-normal text-2xl leading-[130%] text-gray-900 text-center">
                    &quot;Pipeliner is the first CRM that feels truly modern. It&apos;s powerful, flexible, and fast to build with. There&apos;s nothing like it.&quot;
                </p>

                {/* Nama dan Jabatan */}
                <div className="text-center">
                    <p className="font-sans font-semibold text-lg text-gray-900">Odessa Mira</p>
                    <p className="font-sans font-normal text-sm text-gray-600">CEO & Head of Finance</p>
                </div>

                {/* Ikon Media Sosial dari `public/socialMedia/` */}
                <div className="flex gap-4">
                    <Image src="/socialMedia/facebook.svg" alt="Facebook" width={24} height={24} className="hover:opacity-80 transition duration-300" />
                    <Image src="/socialMedia/instagram.svg" alt="Instagram" width={24} height={24} className="hover:opacity-80 transition duration-300" />
                    <Image src="/socialMedia/dribble.svg" alt="Dribble" width={24} height={24} className="hover:opacity-80 transition duration-300" />
                    <Image src="/socialMedia/linkedin.svg" alt="LinkedIn" width={24} height={24} className="hover:opacity-80 transition duration-300" />
                </div>
            </div>
        </section>
    );
}
