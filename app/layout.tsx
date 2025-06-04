import type { Metadata } from 'next'
import './globals.css'
import { AppConfig } from '@/config/app.config'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='font-[Grotesk] scroll-smooth'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
