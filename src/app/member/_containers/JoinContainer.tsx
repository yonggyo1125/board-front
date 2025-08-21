'use client'
import React, { useActionState, useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { processJoin } from '../_services/actions'
import JoinForm from '../_components/JoinForm'

type FormType = {
  email: string
  password: string
  confirmPassword: string
  name: string
  mobile: string
  termsAgree: boolean
  socialChannel?: string
  socialToken?: string | number
}

const JoinContainer = () => {
  const searchParams = useSearchParams()

  const [errors, action, pending] = useActionState<any, any>(processJoin, {})
  const [form, setForm] = useState<FormType>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    mobile: '',
    termsAgree: false,
    socialChannel: searchParams.get('channel')?.toString(),
    socialToken: searchParams.get('token')?.toString(),
  })

  const onChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const onToggle = useCallback(() => {
    setForm((prev) => ({ ...prev, termsAgree: !prev.termsAgree }))
  }, [])

  return (
    <JoinForm
      errors={errors}
      action={action}
      pending={pending}
      onChange={onChange}
      onToggle={onToggle}
      form={form}
    />
  )
}

export default React.memo(JoinContainer)
