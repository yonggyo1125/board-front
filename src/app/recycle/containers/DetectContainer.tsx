'use client'
import React, { useCallback } from 'react'
import DetectObject from '../components/DetectObject'

const DetectContainer = () => {
  const callback = useCallback((items) => {
    console.log('items', items)
  }, [])
  return <DetectObject width={640} height={640} callback={callback} />
}

export default React.memo(DetectContainer)
