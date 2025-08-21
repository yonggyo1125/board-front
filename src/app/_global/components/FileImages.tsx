'use client'
import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { FaRegWindowClose } from 'react-icons/fa'
import LayerPopup from './LayerPopup'
import useFetchCSR from '../hooks/useFetchCSR'
import color from '../styles/color'
const { dark } = color

const ImageItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    border: 3px solid ${dark};
    position: relative;
    margin: 3px 0;
    border-radius: 3px;

    .remove {
      position: absolute;
      top: 5px;
      right: 5px;
      cursor: pointer;
      font-size: 1.5rem;
      color: ${dark};
    }

    img {
      cursor: pointer;
      display: block;
    }
  }

  li + li {
    margin-left: 5px;
  }
`

type FileType = {
  items: any
  width?: number
  height?: number
  callback?: (item: any) => void
}

const ImageItem = ({ item, width, height, callback }) => {
  const { seq, fileUrl, thumbBaseUrl, fileName, image } = item
  const [open, setOpen] = useState<boolean>(false)
  const fetchCSR = useFetchCSR()

  const onClose = useCallback(() => setOpen(false), [])
  const onShow = useCallback(() => setOpen(true), [])

  const onRemove = useCallback(
    (seq) => {
      fetchCSR(`/file/delete/${seq}`, { method: 'DELETE' })
        .then((res) => res.json())
        .then((item) => {
          //  삭제 후 후속처리
          if (typeof callback === 'function') {
            callback(item)
          }
        })
    },
    [fetchCSR, callback],
  )

  return (
    image && (
      <li>
        <FaRegWindowClose className="remove" onClick={() => onRemove(seq)} />
        <Image
          src={`${thumbBaseUrl}&width=${width}&height=${height}&crop=true`}
          alt={fileName}
          width={width}
          height={height}
          onClick={onShow}
        />
        <LayerPopup width={500} isOpen={open} onClose={onClose}>
          <Image
            className="org-image"
            width={500}
            height={500}
            src={fileUrl}
            alt={fileName}
          />
        </LayerPopup>
      </li>
    )
  )
}

const FileImages = ({ items, width, height, callback }: FileType) => {
  items = Array.isArray(items) ? items : items ? [items] : []
  if (items.length === 0) return <></>
  width = width ?? 100
  height = height ?? 100

  return (
    <ImageItems>
      {items.map((item) => (
        <ImageItem
          key={'file-' + item.seq}
          item={item}
          width={width}
          height={height}
          callback={callback}
        />
      ))}
    </ImageItems>
  )
}

export default React.memo(FileImages)
