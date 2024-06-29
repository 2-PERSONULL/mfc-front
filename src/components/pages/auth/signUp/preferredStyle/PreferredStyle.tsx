'use client'

import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import styleInfo from '@/libs/styleData'

export default function PreferredStyle({
  clickHandler,
}: {
  clickHandler: (data: number[]) => void
}) {
  const [selectedStyle, setSelectedStyle] = useState<number[]>([])

  const handleStyleClick = (style: number) => {
    if (selectedStyle.includes(style)) {
      setSelectedStyle(selectedStyle.filter((selected) => selected !== style))
    } else if (selectedStyle.length < 3) {
      setSelectedStyle([...selectedStyle, style])
    }
  }

  const handleNext = () => {
    clickHandler(selectedStyle)
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="선호하는 스타일을 선택해주세요. (최대 3개)" />
      <p className="text-xs text-gray-500">
        - 마이페이지를 통해 수정이 가능합니다.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-8">
        {styleInfo.map((style) => (
          <div
            key={style.id}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter') handleStyleClick(style.id)
            }}
            className="avatar flex flex-col justify-center items-center"
            onClick={() => handleStyleClick(style.id)}
          >
            <div
              className={`w-20 h-20 rounded-full bg-gray-300 text-center ${selectedStyle.includes(style.id) ? 'ring ring-black ring-offset-base-100 ring-offset-2' : ''}`}
            >
              {/* 실제 이미지 추가 필요 */}
              이미지
            </div>
            <span className="font-semibold text-sm">{style.style}</span>
          </div>
        ))}
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        {/* <SeperatedBeforeAfterButton /> */}
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
