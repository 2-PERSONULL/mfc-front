import { Suspense } from 'react'
import LoginForm from '@/components/pages/auth/signIn/LoginForm'

export default function SignIn() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
