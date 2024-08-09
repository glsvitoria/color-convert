import { HexColorPicker } from 'react-colorful'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Input } from './ui/input'
import { useState } from 'react'
import { Indicator } from './Indicator'
import { Color } from '@/types'
import { convert } from '@/utils/convert'

interface PickerProps {
  color: Color
  handleChangeColor: (color: Color) => void
}

export const Picker = ({ color, handleChangeColor }: PickerProps) => {
  const [selectValue, setSelectValue] = useState<'HEX' | 'RGB'>('HEX')

  return (
    <div className="w-picker h-picker bg-white items-center justify-center p-4 rounded-2xl flex flex-col gap-6">
      <HexColorPicker
        color={convert.decimalToHexString(color)}
        onChange={(value) => {
          handleChangeColor({
            ...color,
            red: convert.hexToDecimalString(value.substring(1, 3)),
            green: convert.hexToDecimalString(value.substring(3, 5)),
            blue: convert.hexToDecimalString(value.substring(5, 7)),
          })
        }}
      />

      <div className="mr-auto flex flex-row gap-2">
        <Select
          defaultValue={selectValue}
          onValueChange={(value) => setSelectValue(value as 'HEX' | 'RGB')}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="HEX">Hex</SelectItem>
            <SelectItem value="RGB">RGB</SelectItem>
          </SelectContent>
        </Select>

        <Input className="w-24" />
        <Input className="w-16" />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Indicator.Color
          type="red"
          value={color.red}
          onChange={(value) => handleChangeColor({ ...color, red: value })}
        />

        <Indicator.Color
          type="green"
          value={color.green}
          onChange={(value) => handleChangeColor({ ...color, green: value })}
        />

        <Indicator.Color
          type="blue"
          value={color.blue}
          onChange={(value) => handleChangeColor({ ...color, blue: value })}
        />

        <Indicator.Transparency
          color={`${color.red}, ${color.green}, ${color.blue}`}
          value={color.alpha}
          onChange={(value) => {
            handleChangeColor({ ...color, alpha: value })
          }}
        />
      </div>
    </div>
  )
}
