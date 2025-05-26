import { Guided } from "../../../data/guide.tsx"

export default function GuidePage() {
    return (
        <section className="max-w-full w-full h-[741px] py-[104px] px-[64px] gap-2">
            <div className="w-[1072px] h-[533px] gap-[64px] flex flex-col justify-between items-center">
                <div className="w-full h-[148px] gap-4 flex flex-col justify-between items-center">
                    <div className="w-[73px] h-[44px] rounded-20 border border-gray-200 px-4 gap-2 bg-white justify-center items-center">
                        <h6 className="font-sans font-medium text-sm leading-[150%] align-middle text-gray-900 tetx-center">About</h6>
                    </div>
                    <h2 className="w-full h-12 font-sans font-semibold text-2xl leading-[120%] text-gray-900">Value Driven Actions</h2>
                    <p className="w-full h-[24px] font-sans font-normal text-base leading-[150%] text-gray-700">
                        Don’t hesitate to reach out us if you need further assistance.
                    </p>
                    <Guided/>
                </div>
            </div>
        </section>
    )
}
