'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { partnerImageList } from '@/libs/partnerSampleData'

export default function PartnerPostList() {
  const router = useRouter()

  const showPostDetail = (id: number) => {
    router.push(`/partner/mypage/styles/${id}`)
  }

  // 이미지를 불러온다.
  const images = partnerImageList
  return (
    <div className="pt-5 px-4">
      <div className="grid grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => router.push('/partner/mypage/styles/edit')}
          className="w-full h-[110px] border-dashed border-[3px] object-cover rounded-[10px] flex items-center justify-center"
        >
          <p className="text-[#dbdcdf]">+ Add</p>
        </button>

        {images.map((image) => (
          <div
            role="presentation"
            onClick={() => showPostDetail(image.id)}
            key={image.id}
            className="w-full h-[110px] relative"
          >
            <Image
              src={image.url}
              alt={image.title}
              fill
              priority
              sizes="(max-width: 100px) 100vw, 100px"
              className="object-cover mr-1 rounded-[10px]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
