import type { Metadata, Viewport } from 'next'
// import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

import Toast from '@/components/common/Toast'
import ConfirmModal from '@/components/common/ConfirmModal'

// const inter = Inter({ subsets: ['latin'] })
const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'MFC',
  description: 'My Fashion Coordinator',
  manifest: '/manifest.json',
  icons: { icon: '/images/mfc-logo.png' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <Toast />
        <ConfirmModal />
        {children}
      </body>
    </html>
  )
}
