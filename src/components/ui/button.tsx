import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-visible:border-ring hover:cursor-pointer focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        "default-lighter":
          "bg-primary-lighter text-primary hover:bg-primary-lighter/80",
        destructive:
          "bg-destructive-lighter border-destructive-light hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        outline:
          "border-border bg-background hover:bg-muted/40 hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",

        "outline-destructive":
          "border-destructive-light text-destructive bg-background hover:bg-destructive-lighter dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",
        link: "text-primary underline-offset-4 hover:underline",

        // TEAL
        "teal-lighter":
          "bg-teal-lighter border-teal-light hover:bg-teal-light/20 " +
          "focus-visible:ring-teal-light/20 dark:focus-visible:ring-teal-light/40 " +
          "dark:bg-teal-light/20 text-teal-light focus-visible:border-teal-light/40 " +
          "dark:hover:bg-teal-light/30",

        "outline-teal":
          "border-teal-light text-teal-light bg-background hover:bg-teal-lighter " +
          "dark:bg-input/30 dark:border-input dark:hover:bg-input/50 " +
          "aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",

        // PURPLE
        "purple-lighter":
          "bg-purple-lighter border-purple-light hover:bg-purple-light/20 " +
          "focus-visible:ring-purple-light/20 dark:focus-visible:ring-purple-light/40 " +
          "dark:bg-purple-light/20 text-purple-light focus-visible:border-purple-light/40 " +
          "dark:hover:bg-purple-light/30",

        "outline-purple":
          "border-purple-light text-purple-light bg-background hover:bg-purple-lighter " +
          "dark:bg-input/30 dark:border-input dark:hover:bg-input/50 " +
          "aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",

        // ORANGE
        "orange-lighter":
          "bg-orange-light border-orange-dark hover:bg-orange-dark/20 " +
          "focus-visible:ring-orange-dark/20 dark:focus-visible:ring-orange-dark/40 " +
          "dark:bg-orange-dark/20 text-orange-dark focus-visible:border-orange-dark/40 " +
          "dark:hover:bg-orange-dark/30",

        "outline-orange":
          "border-orange-dark text-orange-dark bg-background hover:bg-orange-light " +
          "dark:bg-input/30 dark:border-input dark:hover:bg-input/50 " +
          "aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",

        // GREEN
        "green-lighter":
          "bg-green-light border-green-dark hover:bg-green-dark/20 " +
          "focus-visible:ring-green-dark/20 dark:focus-visible:ring-green-dark/40 " +
          "dark:bg-green-dark/20 text-green-dark focus-visible:border-green-dark/40 " +
          "dark:hover:bg-green-dark/30",

        "outline-green":
          "border-green-dark text-green-dark bg-background hover:bg-green-light " +
          "dark:bg-input/30 dark:border-input dark:hover:bg-input/50 " +
          "aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",

        // YELLOW
        "yellow-lighter":
          "bg-yellow-light border-yellow-dark hover:bg-yellow-dark/20 " +
          "focus-visible:ring-yellow-dark/20 dark:focus-visible:ring-yellow-dark/40 " +
          "dark:bg-yellow-dark/20 text-yellow-dark focus-visible:border-yellow-dark/40 " +
          "dark:hover:bg-yellow-dark/30",

        "outline-yellow":
          "border-yellow-dark text-yellow-dark bg-background hover:bg-yellow-light " +
          "dark:bg-input/30 dark:border-input dark:hover:bg-input/50 " +
          "aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",
      },
      size: {
        default:
          "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-2 rounded-[min(var(--radius-md),10px)] px-3 py-[0.375rem] in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
