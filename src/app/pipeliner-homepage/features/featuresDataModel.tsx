import { SlidersHorizontalIcon, StackIcon } from "@phosphor-icons/react/dist/ssr";

export default function FeaturesDataModel() {
    return (
        <div className="flex flex-col justifity-between gap-20 py-25">
            <div className="flex flex-col items-start gap-8">
                <div className="flex flex-col gap-2 ">
                    <h1 className="text-4xl font-semibold">The Ultimate Data Model <br />
                        for Go-to-Market Success</h1>
                    <p className="text-grayscale-600">Leverage insights from your business, customer, and product data <br />
                        to drive and enhance your team&rsquo;s performance and success.   </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1 border-b-1 border-grayscale-200 pb-4">
                        <p className="text-grayscale-900 text-xl font-medium flex gap-2 items-center"><SlidersHorizontalIcon className="text-primary-400" /> Custom Attributes</p>
                        <p className="text-grayscale-600">Store and update any kind of data your business needs.</p>
                    </div>
                    <div className="flex flex-col gap-1 border-b-1 border-grayscale-200 pb-4">
                        <p className="text-grayscale-900 text-xl font-medium flex gap-2 items-center"><SlidersHorizontalIcon className="text-primary-400" /> Activity Timelines</p>
                        <p className="text-grayscale-600">Get instant visibility into the full history of every interaction.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-grayscale-900 text-xl font-medium flex gap-2 items-center"><StackIcon className="text-primary-400" /> Detailed Views</p>
                        <p className="text-grayscale-600">From basic to tables, visualize your data the way that works for you.</p>
                    </div>

                </div>
            </div>
            <div></div>
        </div>
    );
}