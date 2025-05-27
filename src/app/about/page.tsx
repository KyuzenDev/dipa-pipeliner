import GuidedCard from "@/components/about/components/guidedCard";


export default function About() {
    return (
        <div className="max-w-full w-full h-[741px] py-[104px] px-[64px] gap-2">
            <div className="w-1072px h-[196px] gap-4 justify-center items-center flex flex-col">
                <div className="w-[73px] h-[44px] rounded-20 border border-gray-200 px-4 gap-2 bg-white justify-center items-center">
                    <h6 className="font-sans font-medium text-sm leading-[150%] align-middle text-gray-900 tetx-center">About</h6>
                </div>
                <div className="w-full h-24 justify-center item-center flex flex-col gap-1">
                    <h2 className="font-sans font-semibold text-2xl leading-[120%] text-gray-900">The CRM Behind</h2>
                    <p className="font-sans font-normal text-2xl leading-[120%] text-gray-900">Thousands of Companies</p>
                </div>
                <p className="w-full h-[24px] font-sans font-normal text-base leading-[150%] text-gray-700">
                    Pipeliner is on a mission to craft tools that support business growth through smart.
                </p>
            </div>
            <div className="w-[1072px] h-[533px] gap-[64px] flex flex-col justify-between items-center">
                <div className="w-full h-[148px] gap-4 flex flex-col justify-between items-center">
                    <div className="w-[73px] h-[44px] rounded-20 border border-gray-200 px-4 gap-2 bg-white justify-center items-center">
                        <h6 className="font-sans font-medium text-sm leading-[150%] align-middle text-gray-900 tetx-center">About</h6>
                    </div>
                    <h2 className="w-full h-12 font-sans font-semibold text-2xl leading-[120%] text-gray-900">Value Driven Actions</h2>
                    <p className="w-full h-[24px] font-sans font-normal text-base leading-[150%] text-gray-700">
                        Don’t hesitate to reach out us if you need further assistance.
                    </p>
                    <GuidedCard />
                </div>
            </div>
        </div>
    )
}