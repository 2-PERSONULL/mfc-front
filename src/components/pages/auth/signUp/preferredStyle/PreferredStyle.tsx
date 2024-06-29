'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import { StyleCategoryListType } from '@/types/styleCategoryListType'
import Skeleton from '@/components/ui/skeleton'

export default function PreferredStyle({
  styleData,
  clickHandler,
  isLoading,
}: {
  styleData: StyleCategoryListType[]
  clickHandler: (data: number[]) => void
  isLoading: boolean
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
    <div className="flex flex-col min-h-full max-w-full mb-32 px-6 pt-28 content-around">
      <SignUpTitle comment="선호하는 스타일을 선택해주세요. (최대 3개)" />
      <p className="text-xs text-gray-500">
        - 마이페이지를 통해 수정이 가능합니다.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-8">
        {styleData.map((style) => (
          <div
            key={style.styleId}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter') handleStyleClick(style.styleId)
            }}
            className="avatar flex flex-col justify-center items-center"
            onClick={() => handleStyleClick(style.styleId)}
          >
            {isLoading ? (
              <>
                <Skeleton className="w-20 h-20 rounded-full" />
                <Skeleton className="w-[50%] h-5" />
              </>
            ) : (
              <>
                <Image
                  src={style.imageUrl}
                  alt={style.alt}
                  width={50}
                  height={50}
                  className={`w-20 h-20 rounded-full bg-gray-300 text-center ${selectedStyle.includes(style.styleId) ? 'ring ring-black ring-offset-base-100 ring-offset-2' : ''}`}
                />
                <span className="font-semibold text-sm">{style.name}</span>
              </>
            )}
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
