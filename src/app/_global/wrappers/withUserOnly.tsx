/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import useUser from '../hooks/useUser'
import LoginContainer from '@/app/member/_containers/LoginContainer'
export default function withUserOnly(Component) {
  const { isLogin } = useUser()
  return isLogin ? LoginContainer : Component
}
