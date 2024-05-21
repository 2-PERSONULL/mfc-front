import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
// import SeperatedBeforeAfterButton from '@/components/ui/button/SeperatedBeforeAfterButton'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'

export default function PhoneNumAuthentication({
  clickHandler,
}: {
  clickHandler: (data: string) => void
}) {
  const [alert, setAlert] = useState(false)
  const [value, setValue] = useState('')

  const handleNext = () => {
    if (value.length > 0) {
      clickHandler(value)
    } else {
      setAlert(true)
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="휴대전화번호를 입력해주세요." />
      <input
        type="text"
        placeholder="전화번호를 입력하세요."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input input-bordered w-full rounded-full border-black"
      />
      <br />
      <input
        disabled
        type="text"
        placeholder="인증번호를 입력하세요."
        className="input input-bordered w-full rounded-full border-black"
      />
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        {/* <SeperatedBeforeAfterButton /> */}
        {alert && (
          <p className="text-red-500 font-bold text-xs text-center">
            **전화번호를 입력해주세요.**
          </p>
        )}
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
