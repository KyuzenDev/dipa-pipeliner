"use client";
import { useState } from "react";
import { FAQ, FAQSosialMedia } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";

export default function FeaturesFAQ() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<{ title: string; content: string } | null>(null);

  const openModal = (item: typeof FAQ[number]) => {
    setActiveFAQ(item);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center gap-20 py-12 px-4 sm:px-6 md:px-12 lg:px-20">
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
        <Accordion type="single" className="flex flex-col gap-4" collapsible>
          {FAQ.slice(0, Math.ceil(FAQ.length / 2)).map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="cursor-pointer">{item.title}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-5">
                {item.content}
                <div className="border-t-2 border-dashed border-grayscale-200"></div>
                <button
                  onClick={() => openModal(item)}
                  className="text-sm text-grayscale-600 flex items-center justify-between gap-1 cursor-pointer group"
                >
                  <p className="text-grayscale-600 font-medium">Learn more</p>
                  <ArrowRightIcon
                    size={18}
                    className="transition-transform duration-300 ease-in-out -translate-x-1 group-hover:translate-x-0.5"
                  />
                </button>

              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Accordion type="single" className="flex flex-col gap-4" collapsible>
          {FAQ.slice(Math.ceil(FAQ.length / 2)).map((item, index) => (
            <AccordionItem key={index} value={`item-${index + Math.ceil(FAQ.length / 2)}`}>
              <AccordionTrigger className="cursor-pointer">{item.title}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-5">
                {item.content}
                <div className="border-1 text-grayscale-300 border-dashed"></div>
                <button
                  onClick={() => openModal(item)}
                  className="text-sm text-grayscale-600 flex items-center justify-between gap-1 cursor-pointer group"
                >
                  <p className="text-grayscale-600 font-medium">Learn more</p>
                  <ArrowRightIcon
                    size={18}
                    className="transition-transform duration-300 ease-in-out -translate-x-1 group-hover:translate-x-0.5"
                  />
                </button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white border-1 border-grayscale-200 rounded-2xl">
          <DialogHeader className="border-b border-grayscale-200 pb-3 flex flex-row items-center gap-4">
            <Image src="/icons/qMark.svg" alt="Question Mark Icon" width={40} height={40} />
            <DialogTitle>{activeFAQ?.title}</DialogTitle>
          </DialogHeader>
          <div className="text-grayscale-600 whitespace-pre-line text-sm leading-relaxed">
            {activeFAQ?.content}
          </div>
          <DialogFooter className="border-t border-grayscale-200 pt-4 flex justify-between items-center">
            <div className="self-start flex items-center gap-4">
              <p className="text-grayscale-500">Share post on</p>
              <div className="flex gap-2">
                {FAQSosialMedia.map(({ platform, url }) => (
                  <Link href={url} key={platform} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="icon"
                      className="w-6 h-6 p-1 relative flex cursor-pointer justify-center items-center rounded bg-grayscale-200 hover:bg-gray-300"
                    >
                      <Image
                        src={`/socialMedia/${platform}.svg`}
                        alt={platform}
                        width={14}
                        height={14}
                        className="absolute z-1"
                      />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>

  );
}
