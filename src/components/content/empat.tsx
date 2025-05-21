import Image from "next/image";

export type LandingFor = {
    icons: string;
    title: string;
    text: string;
}

export const landingfor: LandingFor[] = [
    {
        icons: "volunter.svg",
        title: "Custom Attributes",
        text: "Store and update any kind of data your business needs."
    },
    {
        icons: "recorder.svg",
        title: "Activity Timelines",
        text: "Get instant visibility into the full history of every interaction."
    },
    {
        icons: "public/landing/icons-small/box.svg",
        title: "Detailed Views",
        text: "From basic to tables, visualize your data the way that works for you."
    }
]

const LandingForSection = () => {
    return (
      <div className="ml-[20px] w-full divide-y divide-gray-700">
        {landingfor.map((item, index) => (
          <div key={index} className="flex items-start gap-2 py-6">
            
            <div>
              <h4 className="text-lg font-semibold text-[#1F2937] dark:text-gray-900">{item.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default LandingForSection;