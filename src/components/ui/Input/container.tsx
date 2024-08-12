interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="relative flex flex-col gap-1">{children}</div>
}
