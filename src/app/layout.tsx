import type { Metadata, Viewport } from 'next'
// import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

import React from 'react'
import Toast from '@/components/common/Toast'
import ConfirmModal from '@/components/common/ConfirmModal'
import GlobalModal from '@/components/common/GlobalModal'
import AuthProvider from '@/components/provider/AuthProvider'

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
  metadataBase: new URL('https://myfaco.site'),
  openGraph: {
    url: 'https://myfaco.site',
    title: '나를 입다 MFC',
    description:
      '당신만의 스타일을 찾아주는 맞춤형 패션 코디네이팅 플랫폼 MFC에서 나만의 스타일을 발견하는 즐거움을 경험하세요.',
    images: '/og_image.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <AuthProvider>
          <Toast />
          <ConfirmModal />
          <GlobalModal />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
