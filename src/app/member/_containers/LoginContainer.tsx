'use client'
import React, { useActionState, useState, useCallback, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { processLogin } from '../_services/actions'
import LoginForm from '../_components/LoginForm'

type FormType = {
  email: string
  password: string
  redirectUrl?: string
}

const LoginContainer = ({ redirectUrl }) => {
  const [errors, action, pending] = useActionState<any, any>(processLogin, {})
  const [form, setForm] = useState<FormType>({
    email: '',
    password: '',
    redirectUrl: redirectUrl ?? '',
  })

  const searchParams = useSearchParams()

  useEffect(() => {
    const redirectUrl = searchParams.get('redirectUrl')?.toString()
    if (!redirectUrl) return

    setForm((prev) => ({ ...prev, redirectUrl }))
  }, [searchParams])

  const onChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  return (
    <LoginForm
      errors={errors}
      action={action}
      pending={pending}
      form={form}
      onChange={onChange}
    />
  )
}

export default React.memo(LoginContainer)
