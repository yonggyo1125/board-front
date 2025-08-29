'use client'
import React from 'react'
import Comment from '../_components/Comment'
import type { CommentType } from '../_types/CommentType'

const CommentContainer = ({ board }: CommentType) => {
  return <Comment board={board} />
}

export default React.memo(CommentContainer)
