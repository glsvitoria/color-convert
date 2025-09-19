"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export function ColorPalettes() {
  const palettes = [
    {
      name: "Tons Pastel",
      description: "Cores suaves e delicadas",
      colors: ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF"],
    },
    {
      name: "Neon Vibrante",
      description: "Cores intensas e chamativas",
      colors: ["#FF073A", "#FF8C00", "#FFD700", "#32CD32", "#00BFFF"],
    },
    {
      name: "Tons Terrosos",
      description: "Inspirado na natureza",
      colors: ["#8B4513", "#CD853F", "#DEB887", "#F4A460", "#D2B48C"],
    },
    {
      name: "Monocromático Azul",
      description: "Variações de azul",
      colors: ["#E3F2FD", "#90CAF9", "#42A5F5", "#1E88E5", "#0D47A1"],
    },
  ];

  const copyPalette = (colors: string[], name: string) => {
    const paletteText = colors.join(", ");
    navigator.clipboard.writeText(paletteText);
    toast("Paleta copiada!", {
      description: `Paleta "${name}" copiada para a área de transferência.`,
    });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold">
            Paletas de cores prontas
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Explore combinações harmoniosas para seus projetos
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {palettes.map((palette, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-balance">{palette.name}</CardTitle>
                <CardDescription className="text-pretty">
                  {palette.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-20 overflow-hidden rounded-lg">
                  {palette.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="flex flex-1 items-end justify-center pb-2"
                      style={{ backgroundColor: color }}
                    >
                      <span className="rounded bg-black/50 px-1 font-mono text-xs text-white">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyPalette(palette.colors, palette.name)}
                  className="w-full"
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copiar paleta
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
