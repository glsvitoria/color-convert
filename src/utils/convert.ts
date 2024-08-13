import { Color } from '@/types'

export const convert = {
  hexToDecimalString: (hexString: string): string => {
    const decimalValue = parseInt(hexString, 16)
    return decimalValue.toString()
  },
  decimalToHexString: (color: Color): string => {
    const redValue = parseInt(color.red).toString(16).toUpperCase()
    const greenValue = parseInt(color.green).toString(16).toUpperCase()
    const blueValue = parseInt(color.blue).toString(16).toUpperCase()
    const alphaValue = parseInt(color.alpha).toString(16).toUpperCase()

    const decimalValue = `${redValue.length === 1 ? `0${redValue}` : redValue}${greenValue.length === 1 ? `0${greenValue}` : greenValue}${blueValue.length === 1 ? `0${blueValue}` : blueValue}${alphaValue.length === 1 ? `0${alphaValue}` : alphaValue}`

    if (color.alpha === '100') {
      return decimalValue.substring(0, 6)
    }

    return decimalValue
  },
  uniqueDecimalToHexString: (value: string): string => {
    const decimal = parseInt(value)

    if (decimal < 0) {
      return '00'
    }

    if (decimal > 255) {
      return 'FF'
    }

    return decimal.toString(16).padStart(2, '0').toUpperCase()
  },
  uniqueHexToDecimalString: (value: string): string => {
    const decimal = parseInt(value, 16)

    if (decimal < 0) {
      return '0'
    }

    if (decimal > 255) {
      return '255'
    }
    return decimal.toString()
  },
  alphaDecimalToHexString: (value: string): string => {
    const normalized = Number(value) / 100

    const decimalValue = Math.round(normalized * 255)

    return decimalValue.toString(16).padStart(2, '0').toUpperCase()
  },
  alphaHexToDecimalString: (value: string): string => {
    console.log(value)
    const decimalValue = parseInt(value, 16)

    return (decimalValue / 255).toString()
  },
}
