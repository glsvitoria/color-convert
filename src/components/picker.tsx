import { HexColorPicker } from 'react-colorful'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { useState } from 'react'
import { Indicator } from './Indicator'
import { Color } from '@/types'
import { convert } from '@/utils/convert'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { regex } from '@/utils/regex'
import { Input } from './ui/Input'

interface PickerProps {
  color: Color
  handleChangeColor: (color: Color) => void
}

export const Picker = ({ color, handleChangeColor }: PickerProps) => {
  const [selectValue, setSelectValue] = useState<'HEX' | 'RGB'>('HEX')

  const schema = z.object({
    color: z.string().refine(
      (value) => {
        if (selectValue === 'HEX') {
          return regex.hex.test(value)
        } else {
          return regex.rgb.test(value) || regex.rgba.test(value)
        }
      },
      {
        message:
          selectValue === 'HEX'
            ? 'Insira uma cor no formato HEX'
            : 'Insira uma cor no formato RGB ou RGBA',
      },
    ),
  })

  type IFormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      color: '',
    },
    resolver: zodResolver(schema),
  })

  const handleFormSubmit = handleSubmit((data) => {
    console.log(data)
  })

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

        <form onSubmit={handleFormSubmit}>
          <Input.Container>
            <Input.Adornment position="start">
              {selectValue === 'HEX' ? '#' : null}
            </Input.Adornment>
            <Input.Root
              className={`w-44 ${selectValue === 'HEX' && 'pl-6'}`}
              error={!!errors.color}
              {...register('color', {
                onChange: (event) => {
                  const value = event.target.value
                  if (selectValue === 'HEX' && regex.hex.test(value)) {
                    if (value.length === 3) {
                      handleChangeColor({
                        red: convert.hexToDecimalString(
                          value.substring(0, 1).repeat(2),
                        ),
                        green: convert.hexToDecimalString(
                          value.substring(1, 2).repeat(2),
                        ),
                        blue: convert.hexToDecimalString(
                          value.substring(2, 3).repeat(2),
                        ),
                        alpha: convert.hexToDecimalString('FF'),
                      })
                    } else if (value.length === 4) {
                      handleChangeColor({
                        red: convert.hexToDecimalString(
                          value.substring(0, 1).repeat(2),
                        ),
                        green: convert.hexToDecimalString(
                          value.substring(1, 2).repeat(2),
                        ),
                        blue: convert.hexToDecimalString(
                          value.substring(2, 3).repeat(2),
                        ),
                        alpha: convert.hexToDecimalString(
                          value.substring(3, 4).repeat(2),
                        ),
                      })
                    } else if (value.length === 6) {
                      handleChangeColor({
                        red: convert.hexToDecimalString(value.substring(0, 2)),
                        green: convert.hexToDecimalString(
                          value.substring(2, 4),
                        ),
                        blue: convert.hexToDecimalString(value.substring(4, 6)),
                        alpha: convert.hexToDecimalString('FF'),
                      })
                    } else if (value.length === 8) {
                      handleChangeColor({
                        red: convert.hexToDecimalString(value.substring(0, 2)),
                        green: convert.hexToDecimalString(
                          value.substring(2, 4),
                        ),
                        blue: convert.hexToDecimalString(value.substring(4, 6)),
                        alpha: convert.hexToDecimalString(
                          value.substring(6, 8),
                        ),
                      })
                    }
                  } else if (
                    (selectValue === 'RGB' && regex.rgb.test(value)) ||
                    regex.rgba.test(value)
                  ) {
                    const values = value
                      .replace(/[^\d,]/g, '')
                      .split(',')
                      .map((item: string) => Number(item))

                    handleChangeColor({
                      red: values[0].toString(),
                      green: values[1].toString(),
                      blue: values[2].toString(),
                      alpha: values[3]?.toString() || '100',
                    })
                  }
                },
              })}
            />
            <Input.Error
              error={!!errors.color}
              message={errors.color?.message}
            />
          </Input.Container>
        </form>
        {/* <Input
          adornment="%"
          adornmentPosition="end"
          className="w-16"
          value={color.alpha}
          onChange={(e) => {
            let value = e.target.value

            const decreaseTo100IfWasBiggerThan = () => {
              if (Number(value) > 100) {
                return '100'
              }

              return value
            }

            const increaseTo0IfWasSmallerThan = () => {
              if (Number(value) < 0) {
                return '0'
              }

              return value
            }

            value = decreaseTo100IfWasBiggerThan()
            value = increaseTo0IfWasSmallerThan()

            handleChangeColor({
              ...color,
              alpha: value,
            })
          }}
          maxLength={3}
        /> */}
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Indicator.Color
          type="red"
          value={color.red}
          onChange={(value) => handleChangeColor({ ...color, red: value })}
          selectedValue={selectValue}
        />

        <Indicator.Color
          type="green"
          value={color.green}
          onChange={(value) => handleChangeColor({ ...color, green: value })}
          selectedValue={selectValue}
        />

        <Indicator.Color
          type="blue"
          value={color.blue}
          onChange={(value) => handleChangeColor({ ...color, blue: value })}
          selectedValue={selectValue}
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
