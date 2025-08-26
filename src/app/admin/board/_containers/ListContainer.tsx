'use client'
import React, { useCallback, useState } from 'react'
import type { BoardConfigType } from '@/app/board/_types/BoardType'
import Pagination from '@/app/_global/components/Pagination'
import BoardItems from '../_components/BoardItems'
import BoardSearchForm from '../_components/BoardSearchForm'

type PropType = {
  items?: Array<BoardConfigType>
  pagination?: any
}

const ListContainer = ({ items, pagination }: PropType) => {
  const [_items, setItems] = useState<Array<BoardConfigType> | undefined>(items)
  const [isCheckAll, setCheckAll] = useState<boolean>(false)

  const onToggle = useCallback((bid?: string, mode?: 'check' | 'uncheck') => {
    setItems((prevItems) => {
      return prevItems?.map((item) =>
        item.bid === bid ? { ...item, chk: !Boolean(item.chk) } : item,
      )
    })
  }, [])
  return (
    <>
      <BoardSearchForm />
      <BoardItems items={_items} onToggle={onToggle} isCheckAll={isCheckAll} />
      <Pagination pagination={pagination} />
    </>
  )
}

export default React.memo(ListContainer)
