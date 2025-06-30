"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function CTA() {
    const badgeRef = useRef(null);
    const headerRef = useRef(null);
    const buttonRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Slide in from top untuk badge dan heading
        gsap.from([badgeRef.current, headerRef.current], {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
        });

        // Grow effect untuk button
        gsap.from(buttonRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "back.out(1.7)",
        });

        // Grow effect untuk image
        gsap.from(imageRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            delay: 0.7,
            ease: "power2.out",
        });
    }, []);

    return (
        <div className="w-full sm:px-5 md:px-18 lg:px-20 px-8 pt-12 bg-gradient-cta shadow-blur-top">
            <div className="w-full mx-auto flex flex-col gap-10 items-center text-center relative z-10">
                <Badge ref={badgeRef}>Pipeliner Platform</Badge>

                <div className="flex flex-col gap-5">
                    <h1
                        ref={headerRef}
                        className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-grayscale-900"
                    >
                        Start Creating Powerful <br className="hidden sm:block" /> Relationship Today
                    </h1>
                    <p className="md:text-md lg:text-xl text-md text-grayscale-700 max-w-2xl mx-auto">
                        Don&apos;t hesitate to reach out to us if you need further assistance.
                    </p>
                </div>

                <div
                    ref={buttonRef}
                    className="flex flex-row gap-3 items-center justify-center"
                >
                    <Button className="min-w-[160px]">Start for Free</Button>
                    <Button variant="secondary" className="min-w-[160px]">Contact Sales</Button>
                </div>

                <div className="relative w-full flex justify-center items-center" ref={imageRef}>
                    <Image
                        src="ctaItem.svg"
                        alt="ctaItem"
                        width={1500}
                        height={180}
                        className="absolute bottom-0 -z-1 sm:hidden md:hidden lg:block"
                    />
                    <Image
                        src="ctaTablet.svg"
                        alt="ctaTablet"
                        width={908}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
}
