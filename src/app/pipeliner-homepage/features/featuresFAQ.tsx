import { FAQ } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function FeaturesFAQ() {
  return (
    <div className="flex flex-col items-center gap-20 py-25">
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
        {FAQ.map((item, index) => (
          <Accordion type="single" key={index} collapsible>
            <AccordionItem value="item">
              <AccordionTrigger className="cursor-pointer">{item.title}</AccordionTrigger>
              <AccordionContent>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>

  );
}
