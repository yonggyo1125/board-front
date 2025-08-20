'use client'
import SocialApi from './SocialApi'
import { fetchSSR } from '@/app/_global/libs/utils'

export default class KakaoApi implements SocialApi {
  constructor(
    private apiKey: string | undefined = process.env.NEXT_PUBLIC_KAKAO_API_KEY,
    private domain: string | undefined = process.env.NEXT_PUBLIC_DOMAIN,
    private redirectUri: string = `${
      this.domain ?? ''
    }/member/social/kakao/callback`,
  ) {}

  getToken(code: string) {
    'use server'

    const formData = new FormData()
    formData.append('grant_type', 'authorization_code')
    formData.append('client_id', this.apiKey ?? '')
    formData.append('code', code)
    formData.append('redirect_uri', this.redirectUri)

    return ''
  }

  getProfile(token: string) {
    return { id: '' }
  }

  getUrl(redirectUrl: string = '/') {
    return `https://kauth.kakao.com/oauth/authorize?client_id=${this.apiKey}&redirect_uri=${this.redirectUri}&response_type=code&state=${redirectUrl}`
  }
}
