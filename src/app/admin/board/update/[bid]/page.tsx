import UpdateContainer from '../../_containers/UpdateContainer'
import { MainTitle } from '@/app/_global/components/TitleBox'
import AdminOnlyContainer from '@/app/_global/wrappers/AdminOnlyContainer'

export default async function BoardUpdatePage({ params }) {
  const { bid } = await params
  return (
    <AdminOnlyContainer>
      <MainTitle border="true">게시판 설정 수정</MainTitle>
      <UpdateContainer bid={bid} />
    </AdminOnlyContainer>
  )
}
