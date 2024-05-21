'use client'

import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import SeperatedBeforeAfterButton from '@/components/ui/button/SeperatedBeforeAfterButton'

export default function PreferredStyle() {
  const [selectedStyle, setSelectedStyle] = useState<string[]>([])
  const styleInfo = [
    {
      id: 1,
      style: 'casual',
      imgSrc: '',
    },
    {
      id: 2,
      style: 'street',
      imgSrc: '',
    },
    {
      id: 3,
      style: 'vintage',
      imgSrc: '',
    },
    {
      id: 4,
      style: 'normcore',
      imgSrc: '',
    },
    {
      id: 5,
      style: 'modern',
      imgSrc: '',
    },
    {
      id: 6,
      style: 'feminine',
      imgSrc: '',
    },
    {
      id: 7,
      style: 'dandy',
      imgSrc: '',
    },
    {
      id: 8,
      style: 'sporty',
      imgSrc: '',
    },
    {
      id: 9,
      style: 'classic',
      imgSrc: '',
    },
    {
      id: 10,
      style: 'amekaji',
      imgSrc: '',
    },
    {
      id: 11,
      style: 'highteen',
      imgSrc: '',
    },
    {
      id: 12,
      style: 'minimal',
      imgSrc: '',
    },
  ]

  const handleStyleClick = (style: string) => {
    if (selectedStyle.includes(style)) {
      setSelectedStyle(selectedStyle.filter((selected) => selected !== style))
    } else if (selectedStyle.length < 3) {
      setSelectedStyle([...selectedStyle, style])
    }
  }
  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="선호하는 스타일을 선택해주세요. (최대 3개)" />
      <div className="grid grid-cols-3 gap-6">
        {styleInfo.map((style) => (
          <div
            key={style.id}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter') handleStyleClick(style.style)
            }}
            className="avatar flex flex-col justify-center items-center"
            onClick={() => handleStyleClick(style.style)}
          >
            <div
              className={`w-20 rounded-full bg-gray-300 text-center ${selectedStyle.includes(style.style) ? 'ring ring-black ring-offset-base-100 ring-offset-2' : ''}`}
            >
              {/* 실제 이미지 추가 필요 */}
              이미지
            </div>
            <span className="font-semibold text-sm">{style.style}</span>
          </div>
        ))}
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <SeperatedBeforeAfterButton />
      </div>
    </div>
  )
}
