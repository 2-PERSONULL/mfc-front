import React from 'react'
import Image from 'next/image'
import StyleGuideInfo from '@/types/styleGuideTypes'

interface CreditCardProp {
  card: StyleGuideInfo

  focused: boolean
}

export default function StyleGuideItem({
  card,

  focused,
}: CreditCardProp) {
  return (
    <div
      className={`${focused && 'bg-white'} flex gap-4 items-center transition-colors duration-500 w-full bg-gray-100 border border-gray-200 rounded-xl cursor-default px-5 py-2`}
    >
      <div className="w-full h-[120px] relative flex basis-1/2">
        <Image
          src={
            card.images.length > 0
              ? card.images[0]
              : '/icons/clothes-hanger.svg'
          }
          alt="상품 이미지"
          fill
          sizes="(max-width: 100px) 100vw, 100px"
          className="object-contain rounded-[14px]"
        />
      </div>
      <div className="flex flex-col basis-1/2">
        <p className="font-semibold">{card.category}</p>
        <div className="truncate max-w-[10ch] text-[13px] text-gray-700 font-semibold">
          <p> {card.brand ? card.brand : '브랜드정보 없음'}</p>
          <p className="text-gray-400 font-semibold">
            {card.budget.toLocaleString()}원
          </p>
        </div>
      </div>
    </div>
  )
}
