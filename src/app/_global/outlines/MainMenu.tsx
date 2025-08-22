'use client'
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledNav = styled.nav``

const MainMenu = () => {
  return (
    <>
      <StyledNav>
        <div className="layout-width">
          <Link href="/board/list/notice">공지사항</Link>
          <Link href="/board/list/freetalk">자유게시판</Link>
        </div>
      </StyledNav>
    </>
  )
}

export default React.memo(MainMenu)
