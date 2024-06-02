'use client'

import React, { useState } from 'react'
import { DateInput } from '@nextui-org/date-input'
import { parseAbsoluteToLocal } from '@internationalized/date'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'

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
  const [dateError, setDateError] = useState(false)
  const [genderError, setGenderError] = useState(false)

  const handleNext = () => {
    // const selectedDate = new Date(date.toString().split('T').shift()!)
    // const isToday = selectedDate.toDateString() === today.toDateString()

    // if (isToday) {
    //   setDateError(true)
    //   return
    // }

    if (gender === 'none') {
      setGenderError(true)
      return
    }

    if (date && gender) {
      const seperatedDate = date ? date.toString().split('T').shift() : ''
      const birth = seperatedDate || ''
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
          onChange={(e) => {
            setGender(e.target.value)
            setGenderError(false)
          }}
          className="select select-bordered w-full border-black"
        >
          <option value="none" disabled>
            성별을 선택하세요.
          </option>
          <option value={0}>남성</option>
          <option value={1}>여성</option>
        </select>
        {genderError && (
          <p className="text-red-500 font-bold text-xs text-center">
            **성별을 선택해주세요.**
          </p>
        )}
      </div>
      <br />
      <DateInput
        granularity="day"
        label="생년월일"
        value={date}
        onChange={(newDate) => {
          setDate(newDate)
          setDateError(false)
        }}
      />
      {dateError && (
        <p className="text-red-500 font-bold text-xs text-center">
          **오늘 날짜는 선택할 수 없습니다.**
        </p>
      )}
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
