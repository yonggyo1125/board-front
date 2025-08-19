'use client'
import React, { useCallback, useState } from 'react'
import DetectObject from '../components/DetectObject'
import DetectedItems from '../components/DetectedItems'
import { Button } from '@/app/_global/components/Buttons'
import { processDetectData } from '../services/actions'

const DetectContainer = () => {
  const [items, setItems] = useState<any>([])
  const callback = useCallback((items) => {
    if (items.length === 0) return
    setItems([...items])
  }, [])

  const onClick = useCallback(() => {
    // items 값을 저장 후속 처리
    const _items: Array<{ category1: string; category2: string }> = []
    const formData = new FormData()

    for (const { category1, category2, blob } of items) {
      formData.append('file', blob, 'detect.jpg')
      _items.push({ category1, category2 })
    }

    formData.append('items', JSON.stringify(_items))

    processDetectData(formData) // API 백엔드 반영
  }, [items])

  return (
    <>
      <DetectObject width={640} height={640} callback={callback} />
      <DetectedItems items={items} />
      {items.length > 0 && (
        <Button type="button" onClick={onClick}>
          저장하기
        </Button>
      )}
    </>
  )
}

export default React.memo(DetectContainer)
