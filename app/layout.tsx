import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fegaduolize Company | Marketing Digital',
  description: 'Agência de marketing digital especializada em transformar sua marca em resultados reais. Gestão de redes sociais, tráfego pago, identidade visual e muito mais.',
  keywords: 'marketing digital, redes sociais, tráfego pago, identidade visual, design, landing pages, Brasil',
  authors: [{ name: 'Fegaduolize Company' }],
  }

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#972462',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
