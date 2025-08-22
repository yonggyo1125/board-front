/* eslint-disable @next/next/no-sync-scripts */
'use client'
import React, { useEffect } from 'react'

declare global {
  interface Window {
    Tmapv3: any
  }
}

const Tmap = () => {
  useEffect(() => {
    const { Tmapv3 } = window
    new Tmapv3.Map('map_div', {
      // 지도가 생성될 div
      center: new Tmapv3.LatLng(37.5652045, 126.98702028),
      width: '100%', // 지도의 넓이
      height: '400px', // 지도의 높이
      zoom: 16, // 지도 줌레벨
    })
  }, [])
  return (
    <>
      <script src="https://apis.openapi.sk.com/tmap/vectorjs?version=1&appKey=Zn5hqJeAaN1PnA3ovM8Y03NTGQ0uFQ3X7v1dl01M"></script>

      <div id="map_div"></div>
    </>
  )
}

export default React.memo(Tmap)
