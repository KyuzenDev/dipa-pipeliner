import Image from "next/image"

export default function CEO() {
    return (
        <section className="max-w-full w-full border-y px-15 bg-white justify-center items-center gap-3 bg-white">
            <div className="m-auto w-full h-[390px] border-x px-10 py-20 bg-gray-200 border-gray-200">
                <Image src="" alt=""></Image>
                <div className="m-auto w-full h-[203px] gap-7 flex flex-col">
                    <p className="font-sans font-normal text-2xl leading-[130%] text-gray-900 text-left">
                        Pipeliner is the first CRM that feels truly 
                        modern. It’s powerful, flexible, and fast
                        to build with. There’s nothing like it.
                    </p>
                    <div className="w-[155px] h-[49px] gap-1">
                        <p className="font-sans font-semibold text-base leading-[150%] text-gray-900">Odessa Mira</p>
                        <text className="font-sans font-normal text-sm leading-[150%] text-gray-600">CEO & Head of Finance</text>
                    </div>
                </div>
            </div>
        </section>
    )
}