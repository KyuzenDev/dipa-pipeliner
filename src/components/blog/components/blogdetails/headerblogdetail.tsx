interface HeadBlog {
    title: string;
    date: string;
    detail: string
}

export default function SubBlog({title, date, detail}: HeadBlog) {
    return (
        <div className="w-full gap-6 flex flex-col justify-center items-center">
            <div className="w-full gap-[6px] flex flex-row justify-center items-center">
                <p className="font-sans font-medium text-sm leading-[150%] text-grayscale-900">Blog</p>
            </div>
            <h2 className="w-full font-sans font-semibold text-2xl leading-[120%] text-grayscale-900">{title}</h2>
            <div className="w-full gap-3 flex flex-row">
                <p className="font-sans font-normal text-base leading-[150%] text-grayscale-600">{date}</p> | <p className="font-sans font-normal text-base leading-[150%] text-grayscale-600">{detail}</p>
            </div>
        </div>
    )
}
