export default function Stats() {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-6 text-center">

            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-4xl md:text-6xl font-semibold">20K+</h1>
                <h1 className="text-grayscale-500 text-lg md:text-xl">
                    Customer records that have benefited <br className="hidden md:block" />
                    from and utilized our services.
                </h1>
            </div>

            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-4xl md:text-6xl font-semibold">132+</h1>
                <h1 className="text-grayscale-500 text-lg md:text-xl">
                    Companies from various countries have <br className="hidden md:block" />
                    used the feature we designed.
                </h1>
            </div>

            <div className="p-6 md:p-12 bg-[#F5F8FC] flex justify-center items-center">
                <h1 className="text-xl md:text-2xl font-semibold">
                    We design workflows, deploy AI, <br className="hidden md:block" />
                    integrate data, and make reports.
                </h1>
            </div>
        </div>
    );
}
  