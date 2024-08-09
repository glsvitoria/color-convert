'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'
import { GripVertical } from 'lucide-react'

interface SliderTransparencyProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  backgroundColor: string
}

const SliderTransparency = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderTransparencyProps
>(({ className, backgroundColor, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className="relative h-4 w-full grow overflow-hidden rounded-full"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(${backgroundColor}, 0) 0%, rgba(${backgroundColor}, 1) 100%)`,
      }}
    >
      <SliderPrimitive.Range className="absolute h-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="flex items-center justify-center h-7 w-7 rounded-full border-[3px] border-[#757575] bg-background ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer">
      <GripVertical className="w-5 text-[#757575] font-bold" />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))

SliderTransparency.displayName = SliderPrimitive.Root.displayName

export { SliderTransparency }
