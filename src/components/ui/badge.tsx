"use client";
import * as React from "react"
import { useRef } from "react";
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import {
  useSlideFromTop,
} from "@/components/animations/hooks";
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-1 border-grayscale-200 rounded-full px-4 py-2 bg-white text-secondary-foreground text-grayscale-900 text-sm font-medium",
        secondary:
          "border-transparent pl-1 pr-2 py-0.5 rounded-xl bg-gradient-to-b from-[#ECF0F190] to-[#FFFFFF90] text-secondary-foreground",
        blue:
          "border-transparent px-2 py-0.5 rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#B7E2FA] text-secondary-foreground",
        outline:
          "text-foreground [a&]:hover:bg-accent rounded-md [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"
  const badgeRef = useRef<HTMLDivElement>(null);
  useSlideFromTop(badgeRef, 0.1);

  return (
    <Comp
      data-slot="badge"
      ref={badgeRef}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
