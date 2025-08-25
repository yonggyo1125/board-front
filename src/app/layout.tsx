/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import './globals.css'
import Script from 'next/script'
import StyledComponentsRegistry from './registry'
import { getLoggedMember } from './member/_services/actions'
import { UserProvider } from './_global/contexts/UserContext'
import { CommonProvider } from './_global/contexts/CommonContext'
import LayoutContainer from './_global/wrappers/LayoutContainer'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: '게시판',
  description: '게시판 설명...',
}

const tmapApiUrl = `https://apis.openapi.sk.com/tmap/vectorjs?version=1&appKey=${process.env.NEXT_PUBLIC_TMAP_API_KEY}`

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const member = await getLoggedMember()
  const cookie = await cookies()
  if (member == null && cookie.has('token')) {
    redirect('/member/api/logout?redirectUrl=/')
  }

  return (
    <html lang="ko">
      <body id="body">
        <StyledComponentsRegistry>
          <CommonProvider>
            <UserProvider
              loggedMember={member}
              token={cookie.get('token')?.value}
            >
              <LayoutContainer>{children}</LayoutContainer>
            </UserProvider>
          </CommonProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
