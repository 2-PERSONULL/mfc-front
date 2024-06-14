'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import useModal from '@/stores/modal'
import FavoriteStyleList from '@/components/pages/member/profile/FavoriteStyleList'
import { MemberStyleType, MemberFavoriteStyleType } from '@/types/commonTypes'

export default function PartnerMainStyle({
  styleList,
  favoritStyle,
}: {
  styleList: MemberStyleType[]
  favoritStyle: MemberFavoriteStyleType[]
}) {
  const [selectedStyle, setSelectedStyle] = useState<number[]>([])

  const { showModal } = useModal()
  const onClickHandler = () => {
    showModal({
      title: '주요 스타일',
      content: (
        <FavoriteStyleList
          favoriteStyle={selectedStyle}
          styleList={styleList}
        />
      ),
    })
  }

  useEffect(() => {
    // fetch data
    setSelectedStyle(favoritStyle.map((style) => style.styleId))
  }, [])

  return (
    <div className="border-b border-b-gray-200 py-8">
      <div className="flex justify-between mb-2">
        <h1 className="text-[18px] font-bold mr-2">주요 스타일</h1>
        <button type="button" onClick={onClickHandler}>
          <Image
            src="/images/pencil-icon.svg"
            alt="edit icon"
            width={21}
            height={21}
          />
        </button>
      </div>

      <ul className="flex flex-wrap w-full h-auto">
        {favoritStyle.map((style) => (
          <li
            key={style.favoriteId}
            className="w-auto h-[32px] flex items-center justify-center bg-gray-100 rounded-full py-5 px-3 mr-[8px] mb-[5px]"
          >
            <p className="text-[14px] text-gray-600 font-semibold mr-[5px]">
              #{style.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
