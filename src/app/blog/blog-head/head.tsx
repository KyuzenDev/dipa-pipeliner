import { Head } from "../types/blogHead"

export default function Theme({ head, date, gol }: Head) {
    return (
        <div className="w-full flex flex-col justify-between items-left gap-[14px]">
            <h2 className="w-full h-[96px] font-semibold text-[40px] leading-[58px] text-left">{head}</h2>
            <p className="text-sm text-gray-500 mt-[20px]">{date} | {gol}</p>
        </div>
    )
}