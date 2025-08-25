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
}) => {}

const Pagination = ({ pagination, onClick }: PropType) => {
  if (!pagination || pagination.pages.length === 0) return <></>
  console.log('pagination', pagination)
  const { pages, page } = pagination

  return (
    <Wrapper>
      {pages.map((p) =>
        onClick ? (
          <span
            key={'page-' + p}
            onClick={() => onClick(Number(p[0]))}
            className={classNames('page', { on: page === Number(p[0]) })}
          >
            {p[0]}
          </span>
        ) : (
          <a
            key={'page-' + p}
            href={p[1]}
            className={classNames('page', { on: page === Number(p[0]) })}
          >
            {p[0]}
          </a>
        ),
      )}
    </Wrapper>
  )
}

export default React.memo(Pagination)
