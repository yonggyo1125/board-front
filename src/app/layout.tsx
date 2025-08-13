import type { Metadata } from 'next'
import './globals.css'
import Header from './_global/outlines/Header'
import Footer from './_global/outlines/Footer'
import StyledComponentsRegistry from './registry'
import { getLoggedMember } from './member/_services/actions'

export const metadata: Metadata = {
  title: '게시판',
  description: '게시판 설명...',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const member = await getLoggedMember()
  console.log('member:', member)
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
