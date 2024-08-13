import { HexColorPicker } from 'react-colorful'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Dispatch, SetStateAction } from 'react'
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
  selectValue: 'HEX' | 'RGB'
  setSelectValue: Dispatch<SetStateAction<'HEX' | 'RGB'>>
}

export const Picker = ({
  color,
  handleChangeColor,
  selectValue,
  setSelectValue,
}: PickerProps) => {
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
    resetField,
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
    <div className="w-picker h-picker bg-white items-center justify-center p-4 rounded-2xl flex flex-col gap-6 shadow-xl">
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
          onValueChange={(value) => {
            resetField('color')
            setSelectValue(value as 'HEX' | 'RGB')
          }}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="RGB">RGB</SelectItem>
            <SelectItem value="HEX">Hex</SelectItem>
          </SelectContent>
        </Select>

        <form onSubmit={handleFormSubmit}>
          <Input.Container>
            <Input.Root
              className="w-44"
              error={!!errors.color}
              {...register('color', {
                onChange: (event) => {
                  const value = event.target.value
                  if (selectValue === 'HEX' && regex.hex.test(value)) {
                    const valueWithoutHash = value.replace('#', '')
                    if (valueWithoutHash.length === 3) {
                      handleChangeColor({
                        red: convert.hexToDecimalString(
                          valueWithoutHash.substring(0, 1).repeat(2),
                        ),
                        green: convert.hexToDecimalString(
                          valueWithoutHash.substring(1, 2).repeat(2),
                        ),
                        blue: convert.hexToDecimalString(
                          valueWithoutHash.substring(2, 3).repeat(2),
                        ),
                        alpha: convert.hexToDecimalString('FF'),
                      })
                    } else if (valueWithoutHash.length === 4) {
                      handleChangeColor({
                        red: convert.hexToDecimalString(
                          valueWithoutHash.substring(0, 1).repeat(2),
                        ),
                        green: convert.hexToDecimalString(
                          valueWithoutHash.substring(1, 2).repeat(2),
                        ),
                        blue: convert.hexToDecimalString(
                          valueWithoutHash.substring(2, 3).repeat(2),
                        ),
                        alpha: convert.hexToDecimalString(
                          valueWithoutHash.substring(3, 4).repeat(2),
                        ),
                      })
                    } else if (valueWithoutHash.length === 6) {
                      handleChangeColor({
                        red: convert.hexToDecimalString(
                          valueWithoutHash.substring(0, 2),
                        ),
                        green: convert.hexToDecimalString(
                          valueWithoutHash.substring(2, 4),
                        ),
                        blue: convert.hexToDecimalString(
                          valueWithoutHash.substring(4, 6),
                        ),
                        alpha: convert.hexToDecimalString('FF'),
                      })
                    } else if (valueWithoutHash.length === 8) {
                      handleChangeColor({
                        red: convert.hexToDecimalString(
                          valueWithoutHash.substring(0, 2),
                        ),
                        green: convert.hexToDecimalString(
                          valueWithoutHash.substring(2, 4),
                        ),
                        blue: convert.hexToDecimalString(
                          valueWithoutHash.substring(4, 6),
                        ),
                        alpha: convert.hexToDecimalString(
                          valueWithoutHash.substring(6, 8),
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
          selectedValue={selectValue}
        />
      </div>
    </div>
  )
}
