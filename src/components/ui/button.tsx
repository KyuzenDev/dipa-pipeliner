import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import clsx from "clsx"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm ring-offset-white transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "cursor-pointer drop-shadow-custom hover:drop-shadow-hover bg-gradient-to-t from-[#FFFFFF00] to-[#FFFFFF29] border border-[#FFFFFF33] bg-[#181B25] text-sm font-medium text-white hover:bg-[#20232E]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "cursor-pointer border border-grayscale-200 drop-shadow-custom hover:drop-shadow-hover bg-white text-black text-sm font-medium hover:bg-gray-100",
        secondary:
          "cursor-pointer drop-shadow-custom hover:drop-shadow-hover bg-white text-black text-sm font-medium hover:bg-gray-200",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        conect:
          "text-white cursor-pointer bg-blue-700 px-5 border border-blue-700 rounded-4xl hover:bg-white hover:text-blue-500 transition-all duration-300 ease-in-out",
      },
      size: {
        default: "h-9 px-5 py-5 rounded-xl has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
