'use client'
import { memo, useEffect, useState, useRef } from 'react'
import styled, { css } from 'styled-components'
declare global {
  interface Window {
    Tmapv3: any
  }
}

type MapType = {
  width?: number
  height?: number
  zoom?: number
}

const Wrapper = styled.div<{ width?: number; height?: number }>`
  width: 100%;
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
  ${({ height }) => (height ? height : 400)}px
`

const Map = ({ width, height, zoom }: MapType) => {
  const [map, setMap] = useState<any>()

  const mapRef = useRef<HTMLDivElement | null>(null)
  height = height ?? 400
  zoom = zoom ?? 18

  useEffect(() => {
    if (!mapRef.current) {
      return
    }
    const { Tmapv3 } = window
    // 현재 위치 좌표 가져오기
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords

      // 현재 좌표 기준에서 지도 띄우기

      const map = new Tmapv3.Map(mapRef.current, {
        center: new Tmapv3.LatLng(latitude, longitude), // 지도 초기 좌표
        width: `100%`,
        height: `${height}px`,
        zoom,
      })

      // 현재 위치 마커 표기하기
      const marker = new Tmapv3.Marker({
        position: new Tmapv3.LatLng(latitude, longitude),
        map,
      })
      marker.on('Click', (e) => {
        console.log('클릭 테스트')
      })
      // 병원 데이터 마커 표시

      setMap(map) // Tmapv3.Map 객체 활용을 위해서 상태관리
    })
  }, [width, height, zoom])

  useEffect(() => {
    if (!map) return

    
  }, [map])

  return (
    <Wrapper width={width} height={height}>
      <div ref={mapRef}></div>
    </Wrapper>
  )
}

export default memo(Map)
