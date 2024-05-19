import React from 'react'
import partnerImageList from '@/libs/partnerSampleData'

export default function PartnerPostList() {
  // 이미지를 불러온다.
  const images = partnerImageList
  return (
    <div className="pt-5 px-4">
      <div className="grid grid-cols-3 gap-2">
        <div className="w-full h-[110px] border-dashed border-[3px] object-cover rounded-[10px] flex items-center justify-center">
          <p className="text-[#dbdcdf]">+ Add</p>
        </div>

        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-[110px] object-cover rounded-[10px]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
