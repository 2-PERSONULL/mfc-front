'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import useToast from '@/stores/toast'
import FormInput from '@/components/ui/input/FormInput'

export default function PhoneNumAuthentication({
  clickHandler,
}: {
  clickHandler: (data: string) => void
}) {
  const { showToast } = useToast()
  const [second, setSecond] = useState(0)
  const [minutes, setMinutes] = useState(5)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [requestSMS, setRequestSMS] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1)
      }
      if (second === 0) {
        if (minutes === 0) {
          clearInterval(timer)
          setIsVerified(true)
        } else {
          setMinutes(minutes - 1)
          setSecond(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [requestSMS, minutes, second])

  const phoneNumberRegex = /^010[0-9]{4}[0-9]{4}$/

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!phoneNumberRegex.test(phoneNumber)) {
      e.preventDefault()
      showToast({
        content: '전화번호 형식에 맞게 입력해주세요.',
        type: 'warning',
      })
    } else if (!isVerified) {
      e.preventDefault()
      showToast({
        content: '휴대전화 인증번호가 필요합니다.',
        type: 'warning',
      })
    } else if (phoneNumber.length === 0) {
      e.preventDefault()
      showToast({
        content: '전화번호를 입력해주세요.',
        type: 'warning',
      })
    } else if (isVerified && phoneNumber.length > 0) {
      clickHandler(phoneNumber)
    }
  }

  const handlePhoneNumSubmit = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth-service/auth/sms/send`,
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
      showToast({
        content: '인증번호 발송 성공. 문자메시지를 확인해주세요.',
        type: 'success',
      })
      setRequestSMS(true)
    } else {
      setRequestSMS(false)
      console.log('인증번호 발송 실패')
      showToast({
        content: `${data.message}`,
        type: 'warning',
      })
    }
  }

  const handleVerifyAuthCode = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth-service/auth/sms/verify`,
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
      console.log('인증번호 확인 성공')
      showToast({
        content: '인증번호 확인 성공',
        type: 'success',
      })
      setIsVerified(true)
    } else {
      console.log('인증번호 확인 실패')
      setIsVerified(false)
      showToast({
        content: `${data.message}`,
        type: 'warning',
      })
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="휴대전화번호를 입력해주세요." />
      <div className="grid  mt-8 gap-3">
        <div className="flex items-center justify-end">
          <FormInput
            disabled={requestSMS}
            type="text"
            value={phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPhoneNumber(e.target.value)
            }
            placeholder="전화번호를 입력하세요."
          />
          {requestSMS ? (
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
              onClick={handlePhoneNumSubmit}
              className="absolute rounded-full bg-none px-5 py-1"
            >
              <p className="text-black font-bold">전송</p>
            </button>
          )}
        </div>
        {requestSMS ? (
          <div className="flex items-center justify-end">
            <FormInput
              disabled={isVerified}
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="인증번호를 입력하세요."
            />
            {minutes === 0 && second === 0 ? (
              <span className="absolute mr-3 mt-5">❌</span>
            ) : (
              <div className="flex items-center justify-end">
                {isVerified ? (
                  <p className="absolute px-5 text-black font-bold">
                    <Image
                      style={{ width: 'auto', height: 'auto' }}
                      width={0}
                      height={0}
                      alt="check-icon"
                      src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/check.svg"
                    />
                  </p>
                ) : (
                  <>
                    <div className="absolute pr-14">
                      <span className="text-gray-600">{minutes}</span>:
                      <span className="text-gray-600">{second}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleVerifyAuthCode}
                      className="absolute px-5 font-bold"
                    >
                      확인
                    </button>
                  </>
                )}
              </div>
            )}
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
