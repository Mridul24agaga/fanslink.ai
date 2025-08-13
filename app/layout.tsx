import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: "Fanslink — Agency's All‑in‑One Automation Suite",
  description:
    'Repurpose once, distribute everywhere. Turn one recording into a month of content and publish to all platforms with one click.',
}

const Display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-display: ${Display.variable};
}
        `}</style>
      </head>
      <body className={`${Display.variable}`}>{children}</body>
    </html>
  )
}
