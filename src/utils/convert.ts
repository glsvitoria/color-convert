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

    const decimalValue = `#${redValue.length === 1 ? `0${redValue}` : redValue}${greenValue.length === 1 ? `0${greenValue}` : greenValue}${blueValue.length === 1 ? `0${blueValue}` : blueValue}${alphaValue.length === 1 ? `0${alphaValue}` : alphaValue}`

    if (color.alpha === '100') {
      return decimalValue.substring(0, 7)
    }

    return decimalValue
  },
}
