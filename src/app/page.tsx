'use client'
import { useState } from 'react'
import LayerPopup from './_global/components/LayerPopup'
export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        열기
      </button>
      <LayerPopup
        isOpen={isOpen}
        title="제목 테스트"
        onClose={() => setIsOpen(false)}
      >
        <h3>내용!!!!</h3>
      </LayerPopup>
    </>
  )
}
