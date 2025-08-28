import ContentBox from '@/app/_global/components/ContentBox'
import { MainTitle } from '@/app/_global/components/TitleBox'
import { getBoardConfig } from '../../_services/boardConfig'
import { getList } from '../../_services/boardData'
import type { BoardConfigType, BoardSearchType } from '../../_types/BoardType'
import ListContainer from '../../_containers/ListContainer'
export default async function ListPage({
  params,
  searchParams,
}: {
  params: Promise<{ bid: string }>
  searchParams: Promise<BoardSearchType>
}) {
  const { bid } = await params
  const board: BoardConfigType = await getBoardConfig(bid)
  const search = await searchParams

  const data = await getList(bid, search)
  console.log('data', data)
  return (
    <ContentBox>
      <MainTitle border="true">{board.name}</MainTitle>
      <ListContainer board={board} />
    </ContentBox>
  )
}
