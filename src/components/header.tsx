import { Palette } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Palette className="h-6 w-6 text-foreground" />
          <span className="text-xl font-bold">ConversorCores</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#converter"
            className="text-sm font-medium transition-colors hover:text-zinc-400"
          >
            Conversor
          </a>
          <a
            href="#educacao"
            className="text-sm font-medium transition-colors hover:text-zinc-400"
          >
            Educação
          </a>
          <a
            href="#paletas"
            className="text-sm font-medium transition-colors hover:text-zinc-400"
          >
            Paletas
          </a>
        </nav>
      </div>
    </header>
  );
}
