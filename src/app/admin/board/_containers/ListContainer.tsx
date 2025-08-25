'use client'
import React from 'react'
import type { BoardConfigType } from '@/app/board/_types/BoardType'

type PropType = {
  items?: Array<BoardConfigType>
  pagination?: any
}

const ListContainer = ({ items, pagination}: PropType) => {
  return <></>
}

export default React.memo(ListContainer)
