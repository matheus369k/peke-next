import { DefaultLayout } from '../components/Layout'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Poke Next',
  description: 'pokedex',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DefaultLayout>
          {children}
        </DefaultLayout>
      </body>
    </html>
  )
}
