import { Palette, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-zinc-900" />
              <span className="font-bold">ConversorCores</span>
            </div>
            <p className="text-pretty text-sm text-muted-foreground">
              A ferramenta mais simples e eficiente para converter cores entre
              formatos HEX e RGB.
            </p>
          </div>

          <div className="w-1/2 md:w-1/5">
            <h3 className="mb-4 font-semibold">Ferramentas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#converter"
                  className="text-muted-foreground transition-colors hover:text-zinc-500"
                >
                  Conversor HEX/RGB
                </a>
              </li>
              <li>
                <a
                  href="#paletas"
                  className="text-muted-foreground transition-colors hover:text-zinc-500"
                >
                  Paletas de cores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-zinc-500"
                >
                  Gerador de gradientes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            Feito com <Heart className="h-4 w-4 text-red-500" /> para designers
            e desenvolvedores
          </p>
        </div>
      </div>
    </footer>
  );
}
