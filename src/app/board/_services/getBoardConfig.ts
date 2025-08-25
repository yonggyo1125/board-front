'use server'
import type { BoardConfigType } from '../_types/BoardType'
import { fetchSSR } from '@/app/_global/libs/utils'

export const defaultData: BoardConfigType = {
  mode: 'register',
  bid: '',
  name: '',
  rowsForPage: 20,
  pageCount: 10,
  skin: 'default',
  category: '',
  active: false,
  editor: false,
  imageUpload: false,
  attachFile: false,
  comment: false,
  afterWritingRedirect: false,
  showViewList: false,
  listAuthority: 'ALL',
  viewAuthority: 'ALL',
  writeAuthority: 'ALL',
  commentAuthority: 'ALL',
}

export default async function getBoardConfig(
  bid?: string,
): Promise<BoardConfigType> {
  if (bid) {
    const res = await fetchSSR(`/board/config/${bid}`)
    if (res.status === 200) {
      const _data = await res.json()
      _data.mode = 'update'
      return _data
    }
  }

  return defaultData
}
