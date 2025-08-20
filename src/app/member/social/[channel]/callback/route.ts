import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import KakaoApi from '../../_services/KakaoApi'
import NaverApi from '../../_services/NaverApi'
import { fetchSSR } from '@/app/_global/libs/utils'

export async function GET(request: NextRequest) {
  const channel = request.nextUrl.pathname.split('/')[3]
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  const redirectUrl = searchParams.get('state') ?? '/'
  const api = channel === 'naver' ? new NaverApi() : new KakaoApi()
  try {
    if (!code) {
      throw new Error('인증코드 누락')
    }

    const token = await api.getToken(code)
    if (!token) {
      throw new Error('Access Token 발급 실패')
    }

    const id = await api.getProfile(token)

    const formData = new FormData()
    formData.append('socialChannel', channel.toUpperCase())
    formData.append('socialToken', id)

    const res = await fetchSSR('/member/token', {
      method: 'POST',
      body: formData,
    })

    if (res.status === 200) {
      console.log('res', await res.json())
    }

    console.log('res2', res)

    return NextResponse.json({})
  } catch (err) {
    console.error(err)
    redirect(`/member/login?redirectUrl=${redirectUrl}`)
  }
}
