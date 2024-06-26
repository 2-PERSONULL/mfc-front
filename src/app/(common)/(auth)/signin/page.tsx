import { Suspense } from 'react'
import SignInForm from '@/components/pages/auth/signIn/SignInForm'
import LicenseInfo from '@/components/common/LicenseInfo'
import SignUpButton from '@/components/pages/auth/signIn/SignUpButton'

export default function SignIn() {
  return (
    <main>
      <section className="bg-white min-h-full w-full flex flex-col items-center px-6">
        <Suspense>
          <SignInForm />
        </Suspense>
        <SignUpButton />
        <LicenseInfo />
      </section>
    </main>
  )
}
