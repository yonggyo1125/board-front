import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import KakaoApi from '../../_services/KakaoApi'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  const redirectUrl = searchParams.get('state') ?? '/'
  try {
    if (!code) {
      throw new Error('인증코드 누락')
    }
    

    return NextResponse.json({})
  } catch (err) {
    console.error(err)
    redirect(`/member/login?redirectUrl=${redirectUrl}`)
  }
}
