import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '게시판',
  description: '게시판 설명...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
