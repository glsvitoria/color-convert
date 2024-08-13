import { Color } from '@/types'

interface ColorBoardProps {
  color: Color
}

export const ColorBoard = ({ color }: ColorBoardProps) => {
  return (
    <div
      className="w-full h-full border border-zinc-400/25 rounded-lg"
      style={{
        backgroundColor: `rgba(${color.red}, ${color.green}, ${color.blue}, ${Number(color.alpha) / 100})`,
      }}
    />
  )
}
