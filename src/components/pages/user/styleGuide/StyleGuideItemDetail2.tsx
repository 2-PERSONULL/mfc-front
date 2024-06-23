import React from 'react'
import Image from 'next/image'
import SwiperCore from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import StyleGuideInfo from '@/types/styleGuideTypes'
// import PartnerSnsTag from '@/components/pages/partner/mypage/profile/PartnerSnsTag'
import RequestDetailForm from '@/components/pages/partner/reqCoordi/RequestDetailForm'

SwiperCore.use([Pagination])

export default function StyleGuideItemDetail({
  style,
}: {
  style: StyleGuideInfo
}) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <RequestDetailForm title="구매처(브랜드 및 쇼핑몰)" value={style.brand} />
      {/* <PartnerSnsTag sns={{ id: 1, type: 'link', snsUrl: style.url }} /> */}
      <RequestDetailForm title="가격" value={style.budget.toLocaleString()} />
      <div className="flex flex-col w-full items-center mb-6">
        <Image
          src="/icons/comma2.svg"
          alt="콤마"
          width={20}
          height={20}
          className="mb-4"
        />
        <p className="font-semibold text-centner text-[17px]">코멘트</p>
        <p className="p-4 text-[14px] rounded-[7px] text-center w-[70vw] leading-relaxed">
          {style.comment || '정보 없음'}
        </p>
        <Image src="/icons/comma1.svg" alt="콤마" width={20} height={20} />
      </div>

      <div className="flex flex-col w-full">
        {style.images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-[350px] ${index % 2 === 0 ? 'items-start' : 'items-end'}`}
            style={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
            }}
          >
            <Image
              src={image}
              alt={`스타일 이미지 ${index + 1}`}
              layout="intrinsic"
              width={240} // Adjust width as needed
              height={240} // Adjust height as needed
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
