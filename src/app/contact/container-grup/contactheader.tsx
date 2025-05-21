type phones = {
    title: string;
    description: string;
}

export default function Conder({title , description}: phones) {
    return (
        <section className="flex flex-col w-[1072px] h-[148px] gap-3 justify-center items-center">
            <div className="mb-10 justify-center items-center w-[86px] h-[44px] rounded-[80px] p-[10px] border-1 border-gray-500 bg-gradient-to-t from-white to-gray-300 px-4 gap-2">
                <h6 className="w-[54px] h-[21px] text-center leading-[24px] font-semibold font-sans text-sm text-gray-900">Contact</h6>
            </div>
            <h2 className="mb-10 w-full h-12 font-sans font-semibold text-xl text-gray-900 leading-[19.2px] text-center">{title}</h2>
            <p className="w-full h-[24px] font-sans font-normal leading-[24px] text-base text-gray-700 text-center">{description}</p>
        </section>
    )
}