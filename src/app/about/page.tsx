import FounderCards from "@/components/about/components/card/ceoCard";
import GuidedCard from "@/components/about/components/card/guidedCard";
import { Badge } from "@/components/ui/badge";
import FeaturesFAQ from "@/components/pipeliner-homepage/components/features/featuresFAQ";
import CTA from "@/components/CTA";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="absolute w-[610px] -z-5 h-64 bg-[linear-gradient(to_top_right,_#88CCF8,_#D9F8C0)] rounded-xl blur-[160px]"></div>
      <div className="max-w-full w-full h-auto pt-12 gap-2">
        <div className="relative w-full flex flex-col gap-6 items-center px-4 md:px-12 xl:px-24 pt-8 md:pt-32 lg:pt-14 pb-12 md:pb-52">
          <Badge variant="default">About</Badge>

          <div className="text-center flex flex-col gap-2 max-w-2xl">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight text-grayscale-900">
              The CRM Behind
            </h2>
            <p className="font-normal text-2xl sm:text-3xl md:text-4xl leading-tight text-grayscale-900">
              Thousands of Companies
            </p>
          </div>

          <p className="text-sm sm:text-base text-grayscale-700 text-center max-w-xl">
            Pipeliner is on a mission to craft tools that support business
            growth through smart.
          </p>

          <div className="relative w-full max-w-3xl mt-8">
            <Image
              src="/imageAbout.png"
              alt="About Hero"
              width={539}
              height={329}
              className="w-full h-auto object-contain z-10 relative"
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[750px] z-0">
              <Image
                src="/ornament.svg"
                alt="Ornament Image"
                width={750}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-[90%] md:w-[610px] h-64 bg-[linear-gradient(to_top_right,_#D9F8C0,_#88CCF8)] blur-[160px] rounded-xl -z-10"></div>
        </div>

        <div className="w-full px-4 sm:px-6 py-8">
          <div className="w-full py-6 flex justify-center items-center">
            <Image
              src="/hero/pipeliner.png"
              alt="Pipeliner"
              width={1400}
              height={32}
              className="w-full h-auto max-w-[1000px]"
            />
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-10 xl:px-[64px] py-16 md:py-24 flex flex-col gap-12 mx-auto">
          <div className="w-full flex flex-col gap-4 items-center text-center">
            <Badge variant="default">Guided</Badge>
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug text-grayscale-900">
              Value Driven Actions
            </h2>
            <p className="text-sm sm:text-base text-grayscale-700 max-w-xl">
              Don&apos;t hesitate to reach out to us if you need further
              assistance.
            </p>
          </div>
          <GuidedCard />
        </div>

        <div className="w-full px-4 md:px-[64px] h-auto flex flex-col items-center mx-auto">
          <div className="w-full bg-[#F5F8FC] flex justify-center items-center border border-grayscale-200 py-10 px-5">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center items-center gap-10 relative">
              <div className="w-[203px] h-[230px] relative bg-gradient-to-br from-[#D9F8C0] to-[#88CCF8] border-[10px] border-white rounded-lg p-5">
                <Image
                  src="/filterImage.png"
                  alt="Filter Image"
                  width={212}
                  height={213}
                  className="absolute bottom-0 left-0 z-10"
                />
              </div>
              <div className="flex flex-col h-full justify-center items-center lg:items-start text-center lg:text-left gap-4">
                <p className="font-sans font-normal text-2xl leading-[130%] text-grayscale-900">
                  Pipeliner is the first CRM that feels truly
                  <br />
                  modern. It&apos;s powerful, flexible, and fast
                  <br />
                  to build with. There&apos;s nothing like it.
                </p>
                <div className="flex flex-col gap-1 text-md text-center lg:text-left items-center lg:items-start">
                  <p className="font-sans font-bold text-grayscale-900">
                    Odessa Mira
                  </p>
                  <p className="font-sans font-normal text-grayscale-600">
                    CEO & Head of Finance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:px-[64px] py-20 h-auto gap-8 flex flex-col items-center mx-auto">
          <div className="w-full h-auto gap-4 flex flex-col justify-between items-center text-center">
            <Badge variant="default">Founder</Badge>
            <h2 className="font-semibold text-xl md:text-4xl leading-[120%] text-grayscale-900">
              Meet the Team
            </h2>
            <p className="font-normal text-sm md:text-base leading-[150%] text-grayscale-700">
              We transform big ideas into smart solutions for today&apos;s
              teams.
            </p>
            <FounderCards />
          </div>
        </div>
      </div>
      <FeaturesFAQ />
      <CTA />
    </>
  );
}
