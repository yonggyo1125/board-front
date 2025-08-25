'use client'
import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

const Wrapper = styled.div``

type PropType = {
  pagination?: any
  onClick?: (page: number) => void
}

const PageItem = ({
  pages,
  page,
  onClick,
}: {
  pages: Array<string>
  page: number
  onClick?: (page: number) => void
}) => {
  return onClick ? (
    <span
      onClick={() => onClick(Number(pages[0]))}
      className={classNames('page', { on: page === Number(pages[0]) })}
    >
      {pages[0]}
    </span>
  ) : (
    <a
      href={pages[1]}
      className={classNames('page', { on: page === Number(pages[0]) })}
    >
      {pages[0]}
    </a>
  )
}

const Pagination = ({ pagination, onClick }: PropType) => {
  if (!pagination || pagination.pages.length === 0) return <></>
  console.log('pagination', pagination)
  const { pages, page } = pagination

  return (
    <Wrapper>
      {pages.map((p) => (
        <PageItem
          key={'page-' + p[0]}
          pages={p}
          page={page}
          onClick={onClick}
        />
      ))}
    </Wrapper>
  )
}

export default React.memo(Pagination)
