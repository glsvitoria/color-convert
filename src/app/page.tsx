"use client";

import { Result } from "@/components/Result";
import { Picker } from "@/components/picker";
import { Color } from "@/types";
import BreadcrumbSchema from "@/utils/breadcrumbSchema";
import { siteNavigationElementData } from "@/utils/siteNavigationElementData";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const trial = [
  {
    name: "Home Page",
    path: "/",
  },
];

export default function Home() {
  const [color, setColor] = useState<Color>({
    red: "0",
    green: "0",
    blue: "0",
    alpha: "100",
  });

  const [selectValue, setSelectValue] = useState<"HEX" | "RGB">("RGB");

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
        className="flex h-screen w-screen flex-col items-center justify-center gap-4 px-6 py-6 md:flex-row md:gap-6 lg:gap-8"
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

        <ArrowRight className="h-8 w-8 rotate-90 text-white md:rotate-0" />

        <Result.Container>
          <Result.ColorBoard color={color} />
          <div className="flex w-full flex-col gap-2 text-[#5a5a5a] sm:gap-4 lg:flex-row">
            <Result.Output type="HEX" color={color} />
            <Result.Output type="RGB" color={color} />
          </div>
        </Result.Container>
      </main>
    </>
  );
}
