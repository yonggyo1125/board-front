'use client'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { format, formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'
import { BoardDataType } from '@/app/board/_types/BoardType'

const StyledItems = styled.ul`
  li {
    display: flex;
    height: 50px;
    border-bottom: 1px solid #ccc;
    padding: 0 10px;

    &:first-of-type {
      border-top: 1px solid #ccc;
    }

    .post-info {
      min-width: 350px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span + span {
        margin-left: 10px;
      }
    }

    .subject {
      flex-grow: 1;
      display: flex;
      align-items: center;

      div {
        width: calc(100% - 1px);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
`

const BoardItem = ({ item }) => {
  const { seq, subject, poster, member, viewCount, createdAt } = item

  const dateStr = useMemo(() => {
    const gap = Date.now() - createdAt.getTime()
    const hours = Math.ceil(gap / (60 * 60 * 1000))
    const mins = Math.floor(gap / (60 * 1000))
    if (mins < 1) return '방금전'

    return hours >= 6
      ? format(createdAt, 'yyyy.MM.dd HH:mm')
      : formatDistanceToNow(createdAt, { locale: ko }) + '전'
  }, [createdAt])
  return (
    <li>
      <a href={'/board/view/' + seq} className="subject">
        <div>{subject}</div>
      </a>
      <span className="post-info">
        <span>
          {poster}
          {member && '(' + member.email + ')'}
        </span>
        <span>{dateStr}</span>
        {viewCount > 0 && <span>{viewCount.toLocaleString()}</span>}
      </span>
    </li>
  )
}

const BoardListItems = ({ items }: { items?: Array<BoardDataType> }) => {
  return (
    <StyledItems>
      {items && items.length > 0 ? (
        items.map((item) => (
          <BoardItem key={'board-item-' + item.seq} item={item} />
        ))
      ) : (
        <li className="no-data">조회된 게시글이 없습니다.</li>
      )}
    </StyledItems>
  )
}

export default React.memo(BoardListItems)
