import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Color Converter',
  description:
    'Convert color between HEX and RGB easily and quickly. You can also convert HEX to RGBA and RGB to RGBA.',
  keywords:
    'color, converter, hex, rgb, alpha, convert color, color converter, hex to rgb, rgb to hex, hex to rgba, rgba to hex, rgba to rgb, rgb to rgba, converter hex to rgb, converter hex in rgb, converter rgb to hex, converter rgb in hex, converter hex to rgba, converter rgba to hex, converter rgba to rgb, converter rgb to rgba',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
