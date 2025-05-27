import { FAQ } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FeaturesFAQ() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto p-4">
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
  );
}
