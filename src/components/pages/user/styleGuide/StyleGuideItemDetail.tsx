import React from 'react'
import Image from 'next/image'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
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
    <div className="flex flex-col gap-4 w-full">
      <RequestDetailForm title="구매처(브랜드 및 쇼핑몰)" value={style.brand} />
      {/* <PartnerSnsTag sns={{ id: 1, type: 'link', snsUrl: style.url }} /> */}
      <RequestDetailForm title="가격" value={style.budget.toLocaleString()} />
      <RequestDetailForm title="코멘트" value={style.comment} />

      {style.images.length > 0 && (
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[17px]">스타일 이미지</p>
          <div className="">
            <Swiper
              watchOverflow
              loop={style.images.length > 1}
              pagination={{ type: 'fraction' }}
              className="mySwiper"
            >
              {style.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[350px]">
                    <Image
                      src={image}
                      alt={`스타일 이미지 ${index + 1}`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  )
}
