import type { BoardDataType } from '../_types/BoardType'
import { v4 as uuid } from 'uuid'
import { fetchSSR } from '@/app/_global/libs/utils'

export async function get(seq?: number): Promise<BoardDataType> {
  'use server'
  if (seq) {
    // 게시글 조회
    const res = await fetchSSR(`/board/info/${seq}`)
    const data = await res.json()
    if (res.status !== 200) {
      throw new Error('게시글을 찾을 수 없습니다.')
    }
    
    return data
  } else {
    // 게시글 등록을 위한 초기 데이터
    return {
      mode: 'write',
      bid: '',
      gid: uuid(),
      category: '',
      poster: '',
      guestPw: '',
      subject: '',
      content: '',
      notice: false,
      secret: false,
      guest: false,
      editorImages: [],
      attachFiles: [],
    }
  }
}
