'use client'

import React, { useState } from 'react'
import { DateInput } from '@nextui-org/date-input'
import { parseAbsoluteToLocal } from '@internationalized/date'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
// import SeperatedBeforeAfterButton from '@/components/ui/button/SeperatedBeforeAfterButton'

export default function UserBirthAndGender({
  clickHandler,
}: {
  clickHandler: (data: { birth: string; gender: number }) => void
}) {
  const today = new Date()

  const year = today.getFullYear()
  const month = `0${today.getMonth() + 1}`.slice(-2)
  const day = `0${today.getDate()}`.slice(-2)

  const dateString = `${year}-${month}-${day}`
  const [date, setDate] = useState(
    parseAbsoluteToLocal(new Date(dateString).toISOString()),
  )
  const [gender, setGender] = useState('none')

  const handleNext = () => {
    if (date && gender) {
      const seperatedDate = date ? date.toString().split('T').shift() : ''
      const birth = seperatedDate || '' // Ensure birth is always a string
      clickHandler({ birth, gender: Number(gender) })
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="생년월일 및 성별을 선택해주세요." />
      <div className="mt-8">
        <p>성별</p>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="select select-bordered w-full border-black"
        >
          <option value="none" disabled>
            성별을 선택하세요.
          </option>
          <option value={0}>남성</option>
          <option value={1}>여성</option>
        </select>
      </div>
      <br />
      <DateInput
        granularity="day"
        label="생년월일"
        value={date}
        onChange={setDate}
      />
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        {/* <SeperatedBeforeAfterButton /> */}
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
