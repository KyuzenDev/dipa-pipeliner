import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="text-center flex flex-col items-center gap-10">
        <Badge variant="secondary">
          <Badge variant="blue">
            New
          </Badge>
          The Best AI CRM
        </Badge>
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-semibold leading-[120%]">Customer<br /> Relationship Magic</h1>
          <p className="text-lg font-normal text-grayscale-700">
            AI-powered CRM designed to build, scale, and elevate your business.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          <Button>Start for Free</Button>
          <Button variant="secondary">Contact Sales</Button>
        </div>
      </div>
      <div className="flex flex-col gap-20 items-center">
        <Image
          src="/hero/reports.png"
          alt="Reports"
          width={1150}
          height={464}
        />
      </div>
      <Image
        src="/hero/pipeliner.png"
        alt="Pipeliner"
        width={1400}
        height={32}
      />
    </div>
  );
}
