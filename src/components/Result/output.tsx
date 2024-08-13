import { Copy } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { Color } from '@/types'
import { useState } from 'react'
import { convert } from '@/utils/convert'

interface OutputProps {
  type: 'HEX' | 'RGB'
  color: Color
}

export const Output = ({ type, color }: OutputProps) => {
  const [copyWithSuccess, setCopyWithSuccess] = useState(false)

  const handleCopy = () => {
    const value =
      type === 'RGB'
        ? `rgb(${color.red}, ${color.green}, ${color.blue})`
        : `#${convert.decimalToHexString(color)}`

    navigator.clipboard.writeText(value)

    setCopyWithSuccess(true)
  }

  return (
    <div className="w-full flex flex-row justify-between border border-[#E5E7EB] px-1.5 py-1 rounded-sm">
      <p className="text-inherit">
        {type === 'HEX'
          ? color.alpha === '100'
            ? `#${convert.decimalToHexString(color)}`
            : `#${convert.decimalToHexString(color)}`
          : color.alpha === '100'
            ? `rgb(${color.red}, ${color.green}, ${color.blue})`
            : `rgba(${color.red}, ${color.green}, ${color.blue}, ${Number(color.alpha) / 100})`}
      </p>
      <TooltipProvider>
        <Tooltip
          delayDuration={0}
          onOpenChange={(open) => {
            if (open) {
              setCopyWithSuccess(false)
            }
          }}
        >
          <TooltipTrigger
            onClick={(event) => {
              event.preventDefault()
            }}
          >
            <Copy
              className="text-inherit w-5 h-5 hover:cursor-pointer"
              onClick={handleCopy}
            />
          </TooltipTrigger>
          <TooltipContent
            onPointerDownOutside={(event) => {
              event.preventDefault()
            }}
          >
            {copyWithSuccess
              ? 'Copiada para área de transferência'
              : 'Copie o código da cor'}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
