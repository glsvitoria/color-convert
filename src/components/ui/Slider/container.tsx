"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";

interface ContainerProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  children: React.ReactNode;
}

const Container = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  ContainerProps
>(({ className, children, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    {children}
    <SliderPrimitive.Thumb className="flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-[#757575] bg-background ring-offset-background transition-colors hover:cursor-pointer focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
      <GripVertical className="w-5 font-bold text-[#757575]" />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Container.displayName = SliderPrimitive.Root.displayName;

export { Container };
