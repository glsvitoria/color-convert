import { Color } from '@/types'
import { Input } from './ui/input'
import { convert } from '@/utils/convert'

interface ResultProps {
  color: Color
}

export const Result = ({ color }: ResultProps) => {
  return (
    <div className="w-picker h-picker bg-white items-center justify-center p-4 rounded-2xl flex flex-col gap-6">
      <div
        className="w-full h-full rounded-lg"
        style={{
          backgroundColor: `rgba(${color.red}, ${color.green}, ${color.blue}, ${Number(color.alpha) / 100})`,
        }}
      />

      <div className="flex flex-row gap-4">
        <Input
          value={
            color.alpha === '100'
              ? `rgb(${color.red}, ${color.green}, ${color.blue})`
              : `rgba(${color.red}, ${color.green}, ${color.blue}, ${Number(color.alpha) / 100})`
          }
        />
        <Input
          value={
            color.alpha === '100'
              ? `${convert.decimalToHexString(color)}`
              : `${convert.decimalToHexString(color)}`
          }
        />
      </div>
    </div>
  )
}
