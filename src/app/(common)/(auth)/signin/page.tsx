import { Suspense } from 'react'
import SignInLogo from '@/components/pages/auth/signIn/SignInLogo'
import SignInForm from '@/components/pages/auth/signIn/SignInForm'
import SignInAddOn from '@/components/pages/auth/signIn/SignInAddOn'
import SNSSignInButton from '@/components/pages/auth/SNSSignInButton'
import LicenseInfo from '@/components/common/LicenseInfo'

export default function SignIn() {
  return (
    <>
      <SignInLogo title="LOGIN" />
      <main className="bg-white min-h-screen w-full flex flex-col items-center px-6">
        <Suspense>
          <SignInForm />
        </Suspense>
        <SignInAddOn />
        <SNSSignInButton />
        <LicenseInfo />
      </main>
    </>
  )
}
