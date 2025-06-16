import { SmileySadIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative py-16 px-4 sm:py-24 sm:px-8 md:py-32 md:px-20 lg:py-50 lg:px-40 bg-white">
            <div className="absolute inset-y-0 left-0 w-1/4 backdrop-blur-lg bg-gradient-to-l from-transparent to-[#D9F8C0] "></div>
            <div className="absolute inset-y-0 right-0 w-1/4 backdrop-blur-lg bg-gradient-to-r from-transparent to-[#88CCF8] "></div>
            <div className="absolute inset-x-0 top-0 h-1/4 backdrop-blur-lg bg-gradient-to-t from-transparent to-white opacity-80"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/4 backdrop-blur-lg bg-gradient-to-b from-transparent to-white opacity-80"></div>

            <div className="flex flex-col md:px-12 mx-auto items-center justify-center py-8 sm:py-12 md:py-18 gap-6 sm:gap-10 md:gap-12 rounded-3xl sm:rounded-4xl bg-white relative">
                <h1 className="absolute inset-0 flex items-center justify-center text-[120px] sm:text-[200px] md:text-[300px] lg:text-[408px] font-extrabold bg-gradient-to-b from-[#F5F8FC] to-[#FFFFFF] bg-clip-text text-grayscale-300 opacity-10 z-[1] drop-shadow-404">
                    404
                </h1>

                <SmileySadIcon size={30} />

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-grayscale-900 text-center">
                    <span className="text-primary-400">Uh-oh!</span> We can&apos;t seem <br className="hidden sm:block" /> to locate that page
                </h1>
                <p className="text-base sm:text-lg text-grayscale-500 text-center">
                    No worries — you can always start fresh from the homepage.
                </p>
                <Link
                    href="/"
                    className="inline-flex z-[1] items-center justify-center whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none cursor-pointer h-9 px-4 sm:px-5 py-3 sm:py-5 rounded-xl transition duration-300 ease-in-out drop-shadow-custom hover:drop-shadow-hover bg-linear-to-t border-1 border-[#FFFFFF33] bg-[#181B25] from-[#FFFFFF00] to-[#FFFFFF29] text-sm font-medium text-white"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
