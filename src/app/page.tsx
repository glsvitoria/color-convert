'use client'

import { Result } from '@/components/Result'
import { Picker } from '@/components/picker'
import { Color } from '@/types'
import BreadcrumbSchema from '@/utils/breadcrumbSchema'
import { siteNavigationElementData } from '@/utils/siteNavigationElementData'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const trial = [
  {
    name: 'Home Page',
    path: '/',
  },
]

export default function Home() {
  const [color, setColor] = useState<Color>({
    red: '0',
    green: '0',
    blue: '0',
    alpha: '100',
  })

  const [selectValue, setSelectValue] = useState<'HEX' | 'RGB'>('RGB')

  return (
    <>
      <script
        id="site-navigation-element"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteNavigationElementData),
        }}
      />

      <BreadcrumbSchema trial={trial} />

      <main
        className="w-screen h-screen md:flex-row flex-col flex items-center justify-center lg:gap-8 md:gap-6 gap-4 py-6 px-6"
        style={{
          backgroundColor: `rgba(${color.red}, ${color.green}, ${color.blue}, ${Number(color.alpha) / 100})`,
        }}
      >
        <Picker
          color={color}
          handleChangeColor={(color) => setColor(color)}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />

        <ArrowRight className="text-white w-8 h-8 md:rotate-0 rotate-90" />

        <Result.Container>
          <Result.ColorBoard color={color} />
          <div className="flex sm:flex-row flex-col sm:gap-4 gap-2 w-full text-[#5a5a5a]">
            <Result.Output type="HEX" color={color} />
            <Result.Output type="RGB" color={color} />
          </div>
        </Result.Container>
      </main>
    </>
  )
}
