'use client'

import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import CommonSelectBox from '@/components/ui/select/CommonSelectBox'
import BirthPicker from '@/components/ui/picker/BirthPicker'
import useToast from '@/stores/toast'
import SliderModal from '@/components/common/SliderModal'

export default function UserBirthAndGender({
  clickHandler,
  onKeyDown,
}: {
  clickHandler: (data: { birth: string; gender: number }) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}) {
  const today = new Date()
  const [date, setDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  })
  const { showToast } = useToast()
  const [gender, setGender] = useState('none')
  const [isBirthPickerOpen, setBirthPickerOpen] = useState(false)
  const [tempDate, setTempDate] = useState(date)

  const handleNext = (e: React.FormEvent) => {
    if (gender === 'none') {
      e.preventDefault()
      showToast({
        content: '성별을 선택해주세요.',
        type: 'warning',
      })
      return
    }

    if (
      date.year === today.getFullYear() &&
      date.month === today.getMonth() + 1
    ) {
      e.preventDefault()
      showToast({
        content: '오늘 태어나셨군요. 탄생을 축하드립니다!',
        type: 'error',
      })
      return
    }

    const birth = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
    clickHandler({ birth, gender: Number(gender) })
  }

  const handleComplete = () => {
    setDate(tempDate)
    setBirthPickerOpen(false)
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="생년월일 및 성별을 선택해주세요." />
      <div className="mt-5">
        <p>성별</p>
        <CommonSelectBox
          optionList={['남성', '여성']}
          selectedOption="성별을 선택하세요."
          setSelectedOption={(value: string) => {
            setGender(value)
          }}
        />
      </div>
      <br />
      <div>
        <p>생년월일</p>
        <input
          type="text"
          readOnly
          onKeyDown={onKeyDown}
          value={`${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`}
          onClick={() => setBirthPickerOpen(true)}
          className="w-full py-2 px-3 border border-gray-300 rounded-md cursor-pointer"
        />
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>

      <SliderModal
        isModalOpen={isBirthPickerOpen}
        onChangeModal={() => setBirthPickerOpen(false)}
        backgroundClose
        closeButton
        onComplete={handleComplete} // 추가
      >
        <BirthPicker
          date={tempDate}
          setDate={(newDate) => {
            setTempDate({
              year: newDate.year || today.getFullYear(),
              month: newDate.month || today.getMonth() + 1,
              day: newDate.day || today.getDate(),
            })
          }}
        />
      </SliderModal>
    </div>
  )
}
