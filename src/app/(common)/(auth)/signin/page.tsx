import { Suspense } from 'react'
import Link from 'next/link'
import SignInForm from '@/components/pages/auth/signIn/SignInForm'
// import SignInAddOn from '@/components/pages/auth/signIn/SignInAddOn'
// import SNSSignInButton from '@/components/pages/auth/SNSSignInButton'
import LicenseInfo from '@/components/common/LicenseInfo'

export default function SignIn() {
  return (
    <main>
      <section className="bg-white min-h-full w-full flex flex-col items-center px-6">
        <Suspense>
          <SignInForm />
        </Suspense>
        {/* <SignInAddOn /> */}
        <Link
          href="/signup"
          className="text-center bg-white text-black border-2 border-black font-bold w-full rounded-full py-3 mt-3"
        >
          이메일로 회원가입하기
        </Link>
        {/* <SNSSignInButton /> */}
        <LicenseInfo />
      </section>
    </main>
  )
}
