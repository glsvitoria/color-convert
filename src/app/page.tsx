"use client";

import { Result } from "@/components/Result";
import { AdSpace } from "@/components/ad-space";
import { ColorPalettes } from "@/components/color-palettes";
import { EducationalSection } from "@/components/educational";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
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
    alpha: "255",
  });

  const [selectValue, setSelectValue] = useState<"HEX" | "RGB">("RGB");

  return (
    <div className="flex min-h-screen flex-col">
      <script
        id="site-navigation-element"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteNavigationElementData),
        }}
      />

      <BreadcrumbSchema trial={trial} />
      <Header />

      <main className="max-w-[100vw]">
        <section
          id="converter"
          className="flex w-screen flex-col items-center justify-center gap-4 px-6 py-6 md:h-screen md:flex-row md:gap-6 lg:gap-8"
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
              <Result.OutputHEX color={color} />
              <Result.OutputRGB color={color} />
            </div>
          </Result.Container>
        </section>

        <div className="bg-muted/20 py-8">
          <div className="container mx-auto flex justify-center px-4">
            <AdSpace size="banner" />
          </div>
        </div>

        <section id="educacao">
          <EducationalSection />
        </section>

        <section id="paletas">
          <ColorPalettes />
        </section>

        <div className="bg-muted/20 py-8">
          <div className="container mx-auto flex justify-center px-4">
            <AdSpace size="banner" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
