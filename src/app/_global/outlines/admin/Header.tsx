import React from 'react'
import styled from 'styled-components'
import { FiLogOut } from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/images/logo.png'
import { Button } from '../../components/Buttons'
import LinkLoading from '../../components/LinkLoading'
import useUser from '../../hooks/useUser'
import color from '../../styles/color'
const { info } = color

const StyledHeader = styled.header`
  display: flex;
  height: 120px;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 0 20px;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    img {
      width: auto;
      height: 55px;
      align: center;
    }
    a {
      margin-right: 25px;
    }
  }
  .right a + a {
    margin-left: 10px;
  }

  .badge {
    background: ${info};
    padding: 5px 10px;
    border-radius: 5px;
  }
`

const Header = () => {
  const { loggedMember } = useUser()

  return (
    <StyledHeader>
      <div className="left">
        <Link href="/">
          <Image src={logo} alt="로고" />
        </Link>
        <span className="badge">
          {loggedMember.name}({loggedMember.email})님 환영합니다.
        </span>
      </div>
      <div className="right">
        <a href="/member/api/logout">
          <Button type="button" color="secondary">
            <FiLogOut />
            로그아웃
          </Button>
        </a>
        <Link href="/" prefetch={false}>
          <Button type="button">
            <FaExternalLinkAlt />
            사이트 메인
            <LinkLoading />
          </Button>
        </Link>
      </div>
    </StyledHeader>
  )
}

export default React.memo(Header)
