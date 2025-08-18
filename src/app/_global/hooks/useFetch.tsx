'use client'
import useSWR from 'swr'
import { useEffect, useState, useContext } from 'react'

type FetchOptionType = RequestInit

const fetcher = (url: string, options: FetchOptionType) =>
  fetch(url, options).then((res) => res.json())

export default function useFetch(url) {
  const token = 1234
  useEffect(() => {
    ;(async () => {
      //const _token = await getToken()
      // setToken(_token)
    })()
  }, [token])

  // token이 있다면 로그인한 회원 기반의 요청을 해야 하므로
  // 요청 헤더 Authorization: Bearer 토큰
  const options = {
    method: 'GET',
    headers: {},
  }
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`
  }

  return useSWR(url, (url) => fetcher(url, options))
}
