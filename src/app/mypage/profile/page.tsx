import UserOnlyContainer from '../../_global/wrappers/UserOnlyContainer'
import ContentBox from '../../_global/components/ContentBox'
import { MainTitle } from '../../_global/components/TitleBox'
import ProfileContainer from '../_containers/ProfileContainer'

export default function ProfilePage() {
  return (
    <UserOnlyContainer>
      <ContentBox>
        <MainTitle border="true">회원정보수정</MainTitle>
        <ProfileContainer />
      </ContentBox>
    </UserOnlyContainer>
  )
}
