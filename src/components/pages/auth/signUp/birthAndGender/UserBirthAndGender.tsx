'use client'

import React from 'react'
import { DateInput } from '@nextui-org/date-input'
// import { parseAbsoluteToLocal } from '@internationalized/date'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import SeperatedBeforeAfterButton from '@/components/ui/button/SeperatedBeforeAfterButton'
// import GenderSelectBox from '@/components/ui/dropdown/GenderSelectBox'

export default function UserBirthAndGender() {
  // const today = new Date()

  // const year = today.getFullYear()
  // const month = `0${today.getMonth() + 1}`.slice(-2)
  // const day = `0${today.getDate()}`.slice(-2)

  // const dateString = `${year}-${month}-${day}`
  // const [date, setDate] = useState(
  //   parseAbsoluteToLocal(new Date(dateString).toISOString()),
  // )
  // const [gender, setGender] = useState('')
  // console.log(gender)

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="생년월일 및 성별을 선택해주세요." />
      <div>
        <p>성별</p>
        {/* <GenderSelectBox /> */}
        <select defaultValue="none" className="select select-bordered w-full ">
          <option value="none" disabled>
            성별을 선택하세요.
          </option>
          <option value="남성">남성</option>
          <option value="여성">여성</option>
        </select>
      </div>
      <br />
      <DateInput
        granularity="day"
        label="생년월일"
        // value={date}
        // onChange={setDate}
      />
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <SeperatedBeforeAfterButton />
      </div>
    </div>
  )
}
