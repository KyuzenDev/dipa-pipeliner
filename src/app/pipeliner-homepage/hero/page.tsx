import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col gap-20">
      <div className="text-center items-center flex flex-col gap-5">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          New
        </span>
        <h1 className="text-4xl font-bold">Customer Relationship Magic</h1>
        <p className="text-lg">
          AI-powered CRM designed to build, scale, and elevate your business.
        </p>
        <div>
          <button className="bg-black text-white px-6 py-2 rounded-full mr-4">
            Start for Free
          </button>
          <button className="bg-white text-black border border-black px-6 py-2 rounded-full">
            Contact Sales
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="relative w-fit">
          <Image src="/hero/reports.png" alt="Reports" className="w-fit mx-2" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-transparent/50 via-transparent to-transparent pointer-events-none"></div>
        </div>
        <Image src="/hero/pipeliner.png" alt="Pipeliner" className="w-fit mx-2" />
      </div>
    </div>
  );
};