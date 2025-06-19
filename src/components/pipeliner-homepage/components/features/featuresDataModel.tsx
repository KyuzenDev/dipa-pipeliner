import { SlidersHorizontalIcon, StackIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function FeaturesDataModel() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 py-12 px-6 md:px-12 lg:px-18">
            {/*Text Section*/}
            <div className="flex flex-col items-start gap-8 max-w-xl">
                <div className="flex flex-col gap-2 text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">The Ultimate Data Model <br />
                        for Go-to-Market Success</h1>
                    <p className="text-grayscale-600 text-base md:text-lg">Leverage insights from your business, customer, and product data <br />
                        to drive and enhance your teams performance and success.</p>
                </div>

                {/*Features List*/}
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-1 border-b border-grayscale-200 pb-4">
                        <p className="text-grayscale-900 text-lg md:text-xl font-medium flex gap-2 items-center"><SlidersHorizontalIcon className="text-primary-400" /> Custom Attributes</p>
                        <p className="text-grayscale-600">Store and update any kind of data your business needs.</p>
                    </div>
                    <div className="flex flex-col gap-1 border-b-1 border-grayscale-200 pb-4">
                        <p className="text-grayscale-900 text-lg md:text-xl font-medium flex gap-2 items-center"><SlidersHorizontalIcon className="text-primary-400" /> Activity Timelines</p>
                        <p className="text-grayscale-600">Get instant visibility into the full history of every interaction.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-grayscale-900 text-lg md:text-xl font-medium flex gap-2 items-center"><StackIcon className="text-primary-400" /> Detailed Views</p>
                        <p className="text-grayscale-600">From basic to tables, visualize your data the way that works for you.</p>
                    </div>

                </div>
            </div>

            {/* Image Section */}
           <Image src="/vectorFeatures.png" alt="Data Model" width={454} height={278} className="object-cover w-full max-w-md md:max-w-lg" />
        </div>
    );
}
