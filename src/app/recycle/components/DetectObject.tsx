import React, { useRef, useEffect, useCallback } from 'react'
import { color, category } from '../libs'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  video {
    display: none;
  }

  .layer {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const DetectObject = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const layerRef = useRef<HTMLCanvasElement | null>(null)

  const detect = useCallback(() => {
    const canvas = canvasRef.current
    const layer = layerRef.current
    if (!canvas || !layer) return

    const ctx = layer.getContext('2d')
    if (!ctx) return

    ctx.lineWidth = 5
    ctx.strokeStyle = 'red'
    ctx.clearRect(0, 0, 500, 500)

    canvas.toBlob((blob) => {
      if (!blob) return

      const formData = new FormData()
      formData.append('file', blob, 'canvas.jpg')

      fetch(`${process.env.NEXT_PUBLIC_AI_API_URL2}/detect`, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((items) => {
          for (const [x1, y1, x2, y2, , , cls] of items) {
            const w = Math.abs(x2 - x1)
            const h = Math.abs(y2 - y1)
            ctx.strokeRect(x1, y1, w, h)
            console.log(cls, category[cls])
          }
        })
    })
  }, [canvasRef, layerRef])

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current

    let videoInterval, detectInterval

    navigator.mediaDevices
      .getUserMedia({
        video: { width: 500, height: 500 },
        audio: false,
      })
      .then((stream) => {
        if (video) video.srcObject = stream

        detectInterval = setInterval(() => {
          detect()
        }, 1000)
      })
      .catch((err) => {
        // 웹캠이 설치되어 있지 않거나, 웹캠 권한을 허용하지 않은 경우..
        console.log('err', err)
      })

    const ctx = canvas?.getContext('2d')
    video?.addEventListener('play', () => {
      videoInterval = setInterval(() => {
        ctx?.drawImage(video, 0, 0, canvas?.width ?? 500, canvas?.height ?? 500)
      }, 0)
    })

    return () => {
      clearInterval(videoInterval)
      clearInterval(detectInterval)
    }
  }, [videoRef, canvasRef, detect])

  return (
    <Wrapper>
      <video ref={videoRef} width={500} height={500} autoPlay></video>
      <canvas ref={canvasRef} width={500} height={500}></canvas>
      <canvas
        className="layer"
        ref={layerRef}
        width={500}
        height={500}
      ></canvas>
    </Wrapper>
  )
}

export default React.memo(DetectObject)
