import type { BoardDataType } from '../_types/BoardType'
import { v4 as uuid } from 'uuid'
import { fetchSSR } from '@/app/_global/libs/utils'

export async function get(seq?: number): Promise<BoardDataType> {
  'use server'
  let data: BoardDataType = {
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
  if (seq) {
    // 게시글 조회
    const res = await fetchSSR(`/board/info/${seq}`)

    if (res.status === 200) {
      data = await res.json()
      data.mode = 'update'
      data.bid = data.board?.bid;
      
      return data
    }

    data.mode = 'update'
  }

  return data
}
