'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'
import { GripVertical } from 'lucide-react'

interface ContainerProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  children: React.ReactNode
}

const Container = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  ContainerProps
>(({ className, children, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    {children}
    <SliderPrimitive.Thumb className="flex items-center justify-center h-7 w-7 rounded-full border-[3px] border-[#757575] bg-background ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer">
      <GripVertical className="w-5 text-[#757575] font-bold" />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Container.displayName = SliderPrimitive.Root.displayName

export { Container }
