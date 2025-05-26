export default function AboutHeader() {
    return (
        <section className="max-w-full h-[759px] border-b px-[64px] pt-[64px] pb-[112px] gap-[64px] bg-white border-gray-200 justify-center">
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
        </section>
    )
}