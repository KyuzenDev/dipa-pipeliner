"use client";
import { useRef } from "react";
import CTA from "@/components/CTA";
import BlogList from "@/components/blog/components/blogContent";
import { Badge } from "@/components/ui/badge";
import { useSlideFromTop } from "@/components/animations/hooks";


export default function Blog() {
    const badgeRef = useRef<HTMLDivElement>(null);
    const headRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useSlideFromTop(badgeRef, 0.243);
    useSlideFromTop(headRef, 0.249);
    useSlideFromTop(descRef, 0.255);
    
    return (
        <>
            <div className="max-w-full h-auto border-b border-grayscale-200 pt-32 pb-16 px-16 gap-4 flex flex-col bg-white justify-center items-center bg-gradient-to-r from-blue-200 via-gray-100 to-green-200">
                <div ref={badgeRef}>
                    <Badge variant="default">Announcement</Badge>
                </div>
                <h2
                    ref={headRef}
                    className="m-auto w-full font-sans font-semibold text-4xl text-grayscale-900 text-center leading-[120%]"
                >
                    Read Blog & Articles
                </h2>
                <p
                    ref={descRef}
                    className="m-auto w-full font-sans font-normal text-base text-grayscale-700 text-center leading-[150%]"
                >
                    Learn from our team and top experts on Pipeliner, CRM, and GTM.
                </p>
            </div>
            <BlogList />
            <CTA />
        </>
    );
}
