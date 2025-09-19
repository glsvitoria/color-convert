import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Code, Palette, Zap } from "lucide-react";

export function EducationalSection() {
  const articles = [
    {
      icon: <Lightbulb className="h-6 w-6 text-[#8b5cf6]" />,
      title: "O que são cores HEX e RGB?",
      description:
        "Entenda as diferenças entre os formatos de cores mais utilizados no design digital.",
      content:
        "HEX (hexadecimal) usa 6 dígitos para representar cores (#RRGGBB), enquanto RGB usa valores de 0-255 para vermelho, verde e azul.",
    },
    {
      icon: <Code className="h-6 w-6 text-[#8b5cf6]" />,
      title: "Como usar cores em CSS",
      description:
        "Aprenda a implementar cores em seus projetos web usando CSS.",
      content:
        "Use color: #8b5cf6 para HEX ou color: rgb(139, 92, 246) para RGB. Ambos produzem o mesmo resultado visual.",
    },
    {
      icon: <Palette className="h-6 w-6 text-[#8b5cf6]" />,
      title: "Paletas de cores harmoniosas",
      description:
        "Descubra como criar combinações de cores que funcionam bem juntas.",
      content:
        "Use cores complementares, análogas ou triádicas para criar paletas equilibradas e visualmente atraentes.",
    },
    {
      icon: <Zap className="h-6 w-6 text-[#8b5cf6]" />,
      title: "Dicas de acessibilidade",
      description:
        "Garanta que suas cores atendam aos padrões de acessibilidade web.",
      content:
        "Mantenha contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande, seguindo as diretrizes WCAG.",
    },
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold">
            Aprenda sobre cores
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Expanda seus conhecimentos sobre teoria das cores e suas aplicações
            práticas
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="h-full transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2">{article.icon}</div>
                <CardTitle className="text-balance text-lg">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-pretty">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-sm text-muted-foreground">
                  {article.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
