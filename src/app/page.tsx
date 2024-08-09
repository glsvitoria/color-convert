'use client'

import { Picker } from '@/components/picker'
import { Result } from '@/components/result'
import { Color } from '@/types'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [color, setColor] = useState<Color>({
    red: '255',
    green: '255',
    blue: '255',
    alpha: '100',
  })

  return (
    <main
      className="w-screen h-screen flex-row flex items-center justify-center gap-8"
      style={{
        backgroundColor: `rgba(${color.red}, ${color.green}, ${color.blue}, ${Number(color.alpha) / 100})`,
      }}
    >
      <Picker color={color} handleChangeColor={(color) => setColor(color)} />
      <ArrowRight className="text-white w-8 h-8" />
      <Result color={color} />
    </main>
  )
}
