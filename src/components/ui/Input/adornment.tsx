interface AdornmentProps {
  children: React.ReactNode
  position: 'start' | 'end'
}

export const Adornment = ({ children, position }: AdornmentProps) => {
  if (position === 'start') {
    return (
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-7">
        <span className="text-[#9CA3AF]">{children}</span>
      </span>
    )
  } else {
    return (
      <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none h-7">
        <span className="text-[#9CA3AF]">{children}</span>
      </span>
    )
  }
}
