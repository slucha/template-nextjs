import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zentrum für Deutsche Innovation, Zukunft und Transformation (DIZT)',
  description:
    'DIZT – Zentrum für Deutsche Innovation, Zukunft und Transformation. Wissenschaftlich fundierte Innovationsimpulse und praxisnahe Zukunftslösungen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
} 