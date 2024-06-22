import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

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
  return (
    <div className="flex flex-col gap-10 pb-[140px]">
      <div>
        <p className="font-semibold text-[17px] mb-2">고객님의 스타일 이미지</p>
        <Swiper>
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
        <Swiper>
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
