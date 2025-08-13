'use server'
/**
 * 회원가입 처리
 *
 */
export async function processJoin(errors, formData: FormData) {
  errors = errors ?? {}
  const params: any = {}

  // 필요한 필드와 값만 추출
  for (const [key, value] of formData.entries()) {
    if (key.startsWith('$ACTION_')) continue
    let _value: string | boolean = value.toString()
    if (['true', 'false'].includes(_value)) {
      _value = Boolean(_value)
    }

    params[key] = _value
  }

  let hasErrors: boolean = false
  // 필수 항목 검증 S
  const requiredFields = {
    email: '이메일을 입력하세요.',
    password: '비밀번호를 입력하세요.',
    confirmPassword: '비밀번호를 확인하세요.',
    name: '회원이름을 입력하세요.',
    mobile: '휴대전화번호를 입력하세요.',
    termsAgree: '회원가입 약관에 동의하세요.',
  }

  for (const [field, message] of Object.entries(requiredFields)) {
    if (
      !params[field] ||
      (typeof params[field] === 'string' && !params[field].trim())
    ) {
      hasErrors = true

      errors[field] = errors[field] ?? []
      errors[field].push(message)
    }
  }
  // 필수 항목 검증 E

  // 비밀번호, 비밀번호 확인 일치 여부
  const password = params.password?.trim()
  if (password && password !== params.confirmPassword?.trim()) {
    errors.confirmPassword = errors.confirmPassword ?? []
    errors.confirmPassword.push('비밀번호가 일치하지 않습니다.')
    hasErrors = true
  }
}
