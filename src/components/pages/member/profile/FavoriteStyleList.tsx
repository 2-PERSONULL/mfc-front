import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import useToast from '@/stores/toast'
import useModal from '@/stores/modal'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import { updateFavoriteStyle } from '@/actions/partner/PartnerProfileUpdate'
import { MemberStyleType } from '@/types/commonTypes'

export default function FavoriteStyleList({
  favoriteStyle,
  styleList,
}: {
  favoriteStyle: number[]
  styleList: MemberStyleType[]
}) {
  const { closeModal } = useModal()
  const { showToast } = useToast()
  const [selectedStyle, setSelectedStyle] = useState<number[]>([])

  useEffect(() => {
    setSelectedStyle(favoriteStyle)
  }, [favoriteStyle])

  const handleStyleClick = (style: number) => {
    if (selectedStyle.includes(style)) {
      return setSelectedStyle(
        selectedStyle.filter((selected: number) => selected !== style),
      )
    }

    if (selectedStyle.length >= 3) {
      return showToast({
        content: '최대 3개까지 선택 가능합니다.',
        type: 'warning',
      })
    }

    setSelectedStyle([...selectedStyle, style])
  }

  const saveHandler = () => {
    updateFavoriteStyle(selectedStyle)
    showToast({ content: '저장되었습니다.', type: 'success' })
    closeModal()
  }

  return (
    <div className="m-5">
      <h1 className="font-semibold">
        선호하는 스타일을 선택해주세요. (최대 3개)
      </h1>
      <div className="grid grid-cols-3 gap-3 mt-5">
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
      </div>

      <div className="fixed bottom-0 h-[90px] w-full left-0 right-0 px-6 bg-white">
        <StretchedRoundedButton comment="저장" clickHandler={saveHandler} />
      </div>
    </div>
  )
}
