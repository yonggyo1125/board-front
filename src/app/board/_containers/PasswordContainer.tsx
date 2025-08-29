'use client'
import React, { useActionState } from 'react'
import PasswordForm from '../_components/PasswordForm'
import { processPassword } from '../_services/actions'

const PasswordContainer = ({ mode, seq }) => {
  const [errors, action, pending] = useActionState<any, any>(
    processPassword,
    {},
  )

  return (
    <PasswordForm
      mode={mode}
      seq={seq}
      errors={errors}
      action={action}
      pending={pending}
    />
  )
}

export default React.memo(PasswordContainer)
