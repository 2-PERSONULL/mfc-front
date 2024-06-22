import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function UserRequestImageList({
  myImageList,
  referImageList,
}: {
  myImageList: string[]
  referImageList: string[]
}) {
  SwiperCore.use([Pagination])

  return (
    <div className="flex flex-col gap-10 pb-[140px]">
      <div>
        <p className="font-semibold text-[17px] mb-2">고객님의 스타일 이미지</p>
        <Swiper
          watchOverflow
          loop={myImageList.length > 1}
          pagination={{ type: 'fraction' }}
          className="mySwiper"
        >
          {myImageList.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[400px] bg-gray-100">
                <Image
                  src={image}
                  alt="내 이미지"
                  fill
                  sizes="(max-width: 100px) 100vw, 100px"
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <p className="font-semibold text-[17px] mb-2">코디 참고 이미지</p>
        <Swiper
          watchOverflow
          loop={referImageList.length > 1}
          pagination={{ type: 'fraction' }}
          className="mySwiper"
        >
          {referImageList.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[400px] bg-gray-100">
                <Image
                  src={image}
                  alt="참고 이미지"
                  fill
                  sizes="(max-width: 100px) 100vw, 100px"
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
