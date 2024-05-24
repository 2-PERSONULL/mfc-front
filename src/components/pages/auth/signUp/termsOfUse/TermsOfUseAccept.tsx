'use client'

import React, { useEffect, useState } from 'react'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'

interface CheckboxState {
  checkbox1: boolean
  checkbox2: boolean
  checkbox3: boolean
  checkbox4: boolean
  checkbox5: boolean
}

export default function TermsOfUseAccept({
  clickHandler,
}: {
  clickHandler: () => void
}) {
  const [error, setError] = useState(false)
  const [isCheckedAll, setIsCheckedAll] = useState(false)
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  })

  useEffect(() => {
    setIsCheckedAll(Object.values(checkboxes).every((value) => value))
  }, [checkboxes])

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedAll(e.target.checked)
    setCheckboxes((prev) => {
      const newState: CheckboxState = {
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
      }
      Object.keys(prev).forEach((key) => {
        newState[key as keyof CheckboxState] = e.target.checked
      })
      return newState
    })
  }

  const handleCheck =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckboxes((prev) => ({ ...prev, [name]: e.target.checked }))
    }

  const handleNext = () => {
    if (
      checkboxes.checkbox1 &&
      checkboxes.checkbox2 &&
      checkboxes.checkbox3 &&
      checkboxes.checkbox4
    ) {
      clickHandler()
    } else {
      setError(true)
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="서비스 이용약관에 동의해주세요." />
      <div className="flex flex-col form-control mt-8">
        <label htmlFor="checkAll">
          <input
            type="checkbox"
            name="checkAll"
            id="checkAll"
            className="checkbox mr-2 border-gray-400"
            checked={isCheckedAll}
            onChange={handleCheckAll}
          />
          <span className="align-top">전체 동의</span>
        </label>
        <br />
        <label htmlFor="checkbox1">
          <input
            type="checkbox"
            name="checkbox1"
            id="checkbox1"
            className="checkbox mr-2 border-gray-400"
            checked={checkboxes.checkbox1}
            onChange={handleCheck('checkbox1')}
          />
          <span className="align-top">만 14세 이상 (필수)</span>
        </label>
        <label htmlFor="checkbox2">
          <input
            type="checkbox"
            id="checkbox2"
            className="checkbox mr-2 border-gray-400"
            checked={checkboxes.checkbox2}
            onChange={handleCheck('checkbox2')}
          />
          <span className="align-top">서비스 이용약관 (필수)</span>
        </label>
        <label htmlFor="checkbox3">
          <input
            type="checkbox"
            id="checkbox3"
            className="checkbox mr-2 border-gray-400"
            checked={checkboxes.checkbox3}
            onChange={handleCheck('checkbox3')}
          />
          <span className="align-top">개인정보처리방침 (필수)</span>
        </label>
        <label htmlFor="checkbox4">
          <input
            type="checkbox"
            id="checkbox4"
            className="checkbox mr-2 border-gray-400"
            checked={checkboxes.checkbox4}
            onChange={handleCheck('checkbox4')}
          />
          <span className="align-top">개인정보제공내용 (필수)</span>
        </label>
        <label htmlFor="checkbox5">
          <input
            type="checkbox"
            id="checkbox5"
            className="checkbox mr-2 border-gray-400"
            checked={checkboxes.checkbox5}
            onChange={handleCheck('checkbox5')}
          />
          <span className="align-top">
            이벤트, 프로모션 문자(SMS) 수신 및 활용 (선택)
          </span>
        </label>
        {error && (
          <p className="text-red-500 font-bold text-xs text-center">
            **필수 항목에 동의해주세요.**
          </p>
        )}
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}