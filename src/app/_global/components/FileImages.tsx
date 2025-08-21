'use client'
import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
const ImageItems = styled.ul``

type FileType = {
  items: any
  width?: number
  height?: number
}

const ImageItem = (item) => {
  const { seq, fileUrl, thumbBaseUrl } = item
  return <li></li>
}

const FileImages = ({ items, width, height }: FileType) => {
  items = Array.isArray(items) ? items : items ? [items] : []
  if (items.length === 0) return <></>
  width = width ?? 100
  height = height ?? 100
  return (
    <ImageItems>
      {items.forEach((item) => (
        <ImageItem key={'file-' + item.seq} item={item} />
      ))}
    </ImageItems>
  )
}

export default React.memo(FileImages)
