import { get } from '../../_services/boardData'
import { get as getComment } from '../../_services/comment'
import CommonContainer from '../../_wrappers/CommonContainer'
import CommentContainer from '../../_containers/CommentContainer'
import ContentBox from '@/app/_global/components/ContentBox'
import { MainTitle } from '@/app/_global/components/TitleBox'
export default async function CommentEditPage({
  params,
}: {
  params: Promise<{ seq: number }>
}) {
  const { seq } = await params
  const data = await getComment(seq)
  const boardData = await get(data.boardDataSeq)
  const { board } = boardData
  data.mode = 'comment_update'
  return (
    <CommonContainer board={board} data={data} mode={data.mode}>
      <ContentBox>
        <MainTitle border="true">댓글수정</MainTitle>
        <CommentContainer board={board} data={boardData} form={data} />
      </ContentBox>
    </CommonContainer>
  )
}
