import { useCallback, useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Slider } from '../ui/slider'

interface ColorProps {
  type: 'red' | 'green' | 'blue'
  value: string
  onChange: (value: string) => void
}

export const Color = ({ value, onChange, type }: ColorProps) => {
  const completeBackgroundColor = useCallback(() => {
    switch (type) {
      case 'red':
        return `rgb(${value}, 0, 0)`
      case 'green':
        return `rgb(0, ${value}, 0)`
      case 'blue':
        return `rgb(0, 0, ${value})`
    }
  }, [type, value])

  const [backgroundColorCompleted, setBackgroundColorCompleted] = useState(() =>
    completeBackgroundColor(),
  )

  useEffect(() => {
    setBackgroundColorCompleted(() => completeBackgroundColor())
  }, [value, type, completeBackgroundColor])

  return (
    <div className="flex flex-row gap-6 w-full">
      <Input
        className="w-16"
        value={value}
        onChange={(e) => {
          if (e.target.value === '') {
            onChange('0')
            return
          }

          if (parseInt(e.target.value) > 255) {
            onChange('255')
            return
          }

          onChange(e.target.value)
        }}
        maxLength={3}
      />
      <Slider
        max={255}
        step={1}
        backgroundColor={backgroundColorCompleted}
        value={[parseInt(value)]}
        onValueChange={(value) => onChange(value.toString())}
      />
    </div>
  )
}
