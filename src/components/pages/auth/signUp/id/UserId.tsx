'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import FormInput from '@/components/ui/input/FormInput'
import useToast from '@/stores/toast'

export default function UserId({
  clickHandler,
}: {
  clickHandler: (data: string) => void
}) {
  const { showToast } = useToast()
  const [value, setValue] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isDoubleCheck, setIsDoubleCheck] = useState(false)

  const emailRegex = /^[a-zA-Z0-9]+@[a-z.]+\.[a-z]{2,}$/

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (value.length === 0) {
      showToast({
        content: '이메일을 입력해주세요.',
        type: 'warning',
      })
    } else if (!emailRegex.test(value)) {
      showToast({
        content: '이메일 형식에 맞게 다시 입력해주세요.',
        type: 'warning',
      })
    } else if (!isDoubleCheck) {
      showToast({
        content: '아이디 중복 검사를 진행해주세요.',
        type: 'warning',
      })
    } else {
      clickHandler(value)
    }
  }

  const handleIdDoubleCheck = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth-service/auth/email/${value}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const data = await response.json()
    if (data.result) {
      setIsEmailValid(true)
      setIsDoubleCheck(true)
      showToast({
        content: '사용 가능한 이메일입니다.',
        type: 'success',
      })
    } else {
      setIsEmailValid(false)
      setIsDoubleCheck(false)
      showToast({
        content: '이미 사용중인 이메일입니다.',
        type: 'warning',
      })
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="아이디를 입력해주세요." />
      <div className="flex items-center justify-end mt-8">
        <FormInput
          disabled={isDoubleCheck}
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="이메일을 입력하세요."
        />
        {isEmailValid && isDoubleCheck ? (
          <p className="absolute px-5 py-1 text-black font-bold">
            <Image
              style={{ width: 'auto', height: 'auto' }}
              width={0}
              height={0}
              alt="check-icon"
              src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/check.svg"
            />
          </p>
        ) : (
          <button
            type="button"
            onClick={handleIdDoubleCheck}
            className="absolute rounded-full bg-none px-5 py-1"
          >
            <p className="text-black font-bold">확인</p>
          </button>
        )}
      </div>
      {/* {isEmailValid && error ? (
        <p className="text-blue-500 font-bold text-xs text-center">{error}</p>
      ) : (
        <p className="text-red-500 font-bold text-xs text-center">{error}</p>
      )} */}
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
