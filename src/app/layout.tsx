import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import Provider from '@/lib/provider'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { GlobalStyled } from '@/styles/global'

const inter = Inter({ subsets: ['latin'] })

export const dynamicParams = false;

export const metadata: Metadata = {
  title: 'PokeNext',
  description: 'Projeto desenvolvido no curso de NextJs do Matheus Battisti - Hora de Codar'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <NavBar />
          {children}
          <Footer />
          <GlobalStyled />
        </Provider>
      </body>
    </html>
  )
}
