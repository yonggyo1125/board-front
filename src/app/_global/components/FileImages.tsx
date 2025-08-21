'use client'
import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
const ImageItems = styled.ul``

type FileType = {
  items: any
  width?: number
  height?: number
}

const ImageItem = ({ item, width, height }) => {
  const { seq, fileUrl, thumbBaseUrl, fileName } = item
  return (
    <li>
      <Image
        src={`${thumbBaseUrl}&width=${width}&height=${height}&crop=true`}
        alt={fileName}
        width={width}
        height={height}
      />
    </li>
  )
}

const FileImages = ({ items, width, height }: FileType) => {
  items = Array.isArray(items) ? items : items ? [items] : []
  if (items.length === 0) return <></>
  width = width ?? 100
  height = height ?? 100
  return (
    <ImageItems>
      {items.forEach((item) => (
        <ImageItem
          key={'file-' + item.seq}
          item={item}
          width={width}
          height={height}
        />
      ))}
    </ImageItems>
  )
}

export default React.memo(FileImages)
