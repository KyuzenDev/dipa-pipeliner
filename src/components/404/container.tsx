export default function Hero404() {
    return (
        <section className="max-w-full w-full h-730 border-b py-[269px] px-16 gap-16 justify-center items-center bg-linear-to-r from-green-200 to-blue-200">
            <div className="w-[1072px] h-[192px] gap-10 flex flex-col justify-center items-center">
                <div className="w-full h-[112px] gap-4 flex flex-col justify-center items-center">
                    <h1 className="w-[191px] h-[67px] font-sans font-semibold text-2xl leading-[120%] text-gray-950">Oh no...</h1>
                    <text className="w-[361px] h-[30px] font-sans font-normal text-large leading-[160%] text-gray-600">The page you are looking for doesn’t exist.</text>
                </div>
            </div>
        </section>
    )
}