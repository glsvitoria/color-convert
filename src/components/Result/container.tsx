import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-picker h-picker bg-white items-center justify-center p-4 rounded-2xl flex flex-col gap-6 shadow-xl">
      {children}
    </div>
  )
}
