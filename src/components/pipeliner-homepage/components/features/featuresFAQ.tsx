import { FAQ } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function FeaturesFAQ() {
  return (
    <div className="flex flex-col items-center gap-20 py-12 px-18">
      <div className="text-center flex flex-col items-center gap-6">
        <Badge>
          FAQ’s
        </Badge>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold leading-[120%]">Frequently Asked Questions</h1>
          <p className="font-normal text-grayscale-700">
            Don&apos;t hesitate to reach out us if you need further assistance.
          </p>
        </div>
        <Button className="w-fit" variant="outline">
          Show All Questions
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mx-auto">
        <Accordion type="single" collapsible>
          {FAQ.slice(0, Math.ceil(FAQ.length / 2)).map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="cursor-pointer">{item.title}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-5">
                {item.content}
                <div className="border-t-2 border-dashed border-grayscale-200 pb-4"></div>
                <Link
                  href={item.link}
                  className="text-sm text-grayscale-600 flex items-center justify-between gap-1 cursor-pointer group"
                >
                  <p className="text-grayscale-600 font-medium">Learn more</p>
                  <ArrowRightIcon
                    size={18}
                    className="transition-transform duration-300 ease-in-out -translate-x-1 group-hover:translate-x-0.5"
                  />
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Accordion type="single" collapsible>
          {FAQ.slice(Math.ceil(FAQ.length / 2)).map((item, index) => (
            <AccordionItem key={index} value={`item-${index + Math.ceil(FAQ.length / 2)}`}>
              <AccordionTrigger className="cursor-pointer">{item.title}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-5">
                {item.content}
                <div className="border-1 text-grayscale-300 border-dashed"></div>
                <Link
                  href={item.link}
                  className="text-sm text-grayscale-600 flex items-center justify-between gap-1 cursor-pointer group"
                >
                  <p className="text-grayscale-600 font-medium">Learn more</p>
                  <ArrowRightIcon
                    size={18}
                    className="transition-transform duration-300 ease-in-out -translate-x-1 group-hover:translate-x-0.5"
                  />
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>

  );
}
