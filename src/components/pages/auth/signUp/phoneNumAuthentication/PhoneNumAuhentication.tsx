'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
// import SeperatedBeforeAfterButton from '@/components/ui/button/SeperatedBeforeAfterButton'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'

export default function PhoneNumAuthentication({
  clickHandler,
}: {
  clickHandler: (data: string) => void
}) {
  // const [second, setSecond] = useState(10)
  // const [minute, setMinute] = useState(1)
  const [error, setError] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [requestSMS, setRequestSMS] = useState(true)
  const [verificationCode] = useState('') // 추가 필요

  const phoneNumberRegex = /^010[0-9]{4}[0-9]{4}$/

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!phoneNumberRegex.test(phoneNumber)) {
      e.preventDefault()
      setError('**전화번호 형식에 맞게 다시 입력해주세요.**')
    } else if (phoneNumber.length > 0) {
      clickHandler(phoneNumber)
    } else {
      setError('**전화번호를 입력해주세요.**')
    }
  }

  const handlePhoneNumSubmit = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/auth/sms/send`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: phoneNumber, code: verificationCode }),
      },
    )

    const data = await response.json()
    if (data.isSuccess) {
      console.log('인증번호 발송 성공')
    }
    setRequestSMS(true)
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="휴대전화번호를 입력해주세요." />
      <div className="grid  mt-8">
        <div className="flex items-center justify-end">
          <input
            type="text"
            placeholder="전화번호를 입력하세요."
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input input-bordered w-full rounded-full border-black"
          />
          <button
            type="button"
            onClick={handlePhoneNumSubmit}
            className="absolute rounded-full bg-none px-5 py-1"
          >
            {requestSMS ? (
              <p className="text-black font-bold">
                <Image
                  style={{ width: 'auto', height: 'auto' }}
                  width={0}
                  height={0}
                  alt="check-icon"
                  src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/check.svg"
                />
              </p>
            ) : (
              <p className="text-black font-bold">전송</p>
            )}
          </button>
        </div>
        {error && (
          <p className="text-red-500 font-bold text-xs text-center">{error}</p>
        )}
        {requestSMS && (
          <p className="text-blue-500 font-bold text-xs text-center">
            인증번호가 발송되었습니다.
          </p>
        )}
        {requestSMS ? (
          <div className="flex items-center justify-end">
            <input
              type="text"
              placeholder="인증번호를 입력하세요."
              className="mt-5 input input-bordered w-full rounded-full border-black"
            />
            {/* <span className="countdown absolute mr-3 mt-5">
              <span
                id="m"
                className="text-gray-600"
                style={{ '--value': `${minute}` } as React.CSSProperties}
              />
              :
              <span
                id="s"
                className="text-gray-600"
                style={{ '--value': `${second}` } as React.CSSProperties}
              />
            </span> */}
          </div>
        ) : null}
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        {/* <SeperatedBeforeAfterButton /> */}
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
