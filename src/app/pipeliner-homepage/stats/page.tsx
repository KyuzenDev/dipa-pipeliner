export default function Stats() {
    return (
        <div className="flex justify-between gap-6">

            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-6xl font-semibold">20K+</h1>
                <h1 className="text-center text-grayscale-500 text-xl">Customer records that have benefited <br /> from and utilized our services.</h1>
            </div>

            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-6xl font-semibold">132+</h1>
                <h1 className="text-center text-grayscale-500 text-xl">Companies from various countries have <br /> used the feature we designed.</h1>
            </div>

            <div className="p-12 bg-[#F5F8FC] items-center">
                <h1 className="text-2xl font-semibold">We design workflows, deploy AI, <br /> integrate data, and make reports</h1>
            </div>
        </div>
    );
}
