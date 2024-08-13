import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="md:w-picker sm:w-picker-sm w-full h-picker bg-white items-center justify-center p-4 rounded-2xl flex flex-col lg:gap-6 md:gap-4 gap-2 shadow-xl">
      {children}
    </div>
  )
}
