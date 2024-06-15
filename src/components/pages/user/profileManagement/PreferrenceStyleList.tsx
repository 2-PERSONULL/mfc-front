'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MemberStyleType } from '@/types/commonTypes'

export default function PreferrenceStyleList({
  styleList,
}: {
  styleList: MemberStyleType[]
}) {
  const [selectedStyle, setSelectedStyle] = useState<number[]>([])

  const handleStyleClick = (style: number) => {
    if (selectedStyle.includes(style)) {
      return setSelectedStyle(
        selectedStyle.filter((selected: number) => selected !== style),
      )
    }
    setSelectedStyle([...selectedStyle, style])
  }
  return (
    <section className="grid grid-cols-3 gap-3 mt-5 m-5">
      {styleList.map((style) => (
        <div
          key={style.styleId}
          className="flex flex-col justify-center items-center"
        >
          <div
            role="presentation"
            onClick={() => handleStyleClick(style.styleId)}
            className="w-[90px] h-[90px] relative my-4"
          >
            <Image
              src={style.imageUrl}
              alt={style.alt}
              fill
              sizes="(max-width: 100px) 100vw, 100px"
              className={`object-cover rounded-full ${selectedStyle?.includes(style.styleId) ? 'ring-4 ring-black ring-offset-base-100 ring-offset-2' : ''}`}
            />
          </div>
          <span className="text-center font-semibold text-sm">
            {style.name}
          </span>
        </div>
      ))}
    </section>
  )
}
