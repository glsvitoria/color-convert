import { Input } from '../ui/input'
import { SliderTransparency } from '../ui/sliderTransparency'

interface TransparencyProps {
  color: string
  value: string
  onChange: (value: string) => void
}

export const Transparency = ({ color, value, onChange }: TransparencyProps) => {
  console.log(value)
  return (
    <div className="flex flex-row gap-6 w-full">
      <Input className="w-16" value={value} />
      <SliderTransparency
        max={100}
        step={1}
        backgroundColor={color}
        value={[parseInt(value)]}
        onValueChange={(value) => onChange(value.toString())}
      />
    </div>
  )
}
