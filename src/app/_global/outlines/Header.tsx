'use client'
import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
const StyledHeader = styled.header`
  .inner {
    display: flex;
    div {
      width: 0;
      flex-grow: 1;
    }

    .logo-section {
      text-align: center;
    }

    .right {
      text-align: right;
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="inner layout-width">
        <div className="left"></div>
        <div className="logo-section">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right">
          <Link href="/member/join">회원가입</Link>
          <Link href="/member/login">로그인</Link>
        </div>
      </div>
    </StyledHeader>
  )
}

export default React.memo(Header)
