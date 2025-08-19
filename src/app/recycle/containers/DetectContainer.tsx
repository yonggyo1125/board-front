'use client'
import React, { useCallback, useState } from 'react'
import DetectObject from '../components/DetectObject'
import DetectedItems from '../components/DetectedItems'

const DetectContainer = () => {
  const [items, setItems] = useState([])
  const callback = useCallback((items) => {
    setItems(items)
  }, [])

  return (
    <>
      <DetectObject width={640} height={640} callback={callback} />
      <DetectedItems items={items} />
    </>
  )
}

export default React.memo(DetectContainer)
