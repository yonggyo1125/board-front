'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { BoardConfigType, BoardDataType } from '../_types/BoardType'
import useAlertDialog from '@/app/_global/hooks/useAlertDialog'
import useUser from '@/app/_global/hooks/useUser'

const CommonContainer = ({
  children,
  board,
  data,
}: {
  children: React.ReactNode
  board?: BoardConfigType
  data?: BoardDataType
}) => {
  const alertDialog = useAlertDialog()
  const router = useRouter()
  const [isError, setError] = useState<boolean>(false)
  const { isLogin } = useUser()

  useEffect(() => {
    // 게시글 수정, 보기일때 게시글이 있는지 체크
    if (
      data &&
      data.mode &&
      ['update', 'view'].includes(data.mode) &&
      !data.seq
    ) {
      alertDialog({
        text: '게시글을 찾을 수 없습니다.',
        callback: () => {
          router.back()
        },
      })
      setError(true)
      return
    }

    if (!board || !board.bid) {
      alertDialog({
        text: '게시판을 찾을 수 없습니다.',
        callback: () => {
          router.back()
        },
      })
      setError(true)
    }

    /**
     * 글수정, 삭제
     * 회원 게시글인데, 미로그인 상태,
     *  - 로그인 페이지로 이동
     * 회원 게시글인데, 다른 회원으로 로그인 한 경우
     *  - 접근 권한이 없습니다. 알림을 보여주고 이전페이지로 이동
     * 비회원 게시글이고 인증이 안된 경우(mine - false)
     *  - 비회원 비밀번호 확인 화면으로 전환
     */
    if (data && ['update', 'delete'].includes(data.mode ?? '') && !data.mine) {
      if (data.guest) { // 비회원 게시글

      } else { // 회원 게시글 
        if (isLogin) {
          alertDialog({
            text: '접근 권한이 없습니다.',
            callback: () => {
              router.back()
            },
          })
        } else {
          const redirectUrl =
            data.mode === 'delete'
              ? `/board/delete/${data.seq}`
              : `/board/update/${data.seq}`

          router.replace(`/member/login?redirectUrl=${redirectUrl}`)
        }
      }

      setError(true)
    }
  }, [board, alertDialog, router, data, isLogin])

  return isError ? <></> : children
}

export default React.memo(CommonContainer)
