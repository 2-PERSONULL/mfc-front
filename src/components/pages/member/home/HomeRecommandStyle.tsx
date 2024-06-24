'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import LikeButton from '@/components/ui/button/LikeButton'

import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards, Pagination } from 'swiper/modules'
import Image from 'next/image'

export default function HomeRecommandStyle() {
  return (
    <section className="relative px-5 w-full h-[500px] ">
      <p className="text-2xl text-end font-semibold pt-8 pb-2">
        (유저명)님을 위한 추천 스타일
      </p>
      <Swiper
        effect="cards"
        grabCursor
        modules={[EffectCards, Pagination]}
        pagination
        className="recommend-style absolute w-full"
        style={{ overflow: 'hidden' }}
      >
        <SwiperSlide className="swiper-slide relative min-h-[400px]">
          <div className="absolute bg-black top-0 right-0 bottom-0 left-0 z-[1] opacity-40" />
          <Image
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/style/1717317075010"
            alt="style"
            objectFit="cover"
            fill
            className="relative"
          />
          <div>
            <div className="absolute bottom-16 left-5 z-[2] flex items-center gap-2">
              <div className="bg-white w-10 h-10 rounded-full" />
              <p className="text-white text-sm font-bold">파트너 명</p>
            </div>
            <div className="absolute z-[2] bottom-8 left-6">
              <p className="text-white text-xs font-bold">내용 or tag</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-h-[400px]">
          <div className="absolute bg-black top-0 right-0 bottom-0 left-0 z-10 opacity-45" />
          <Image
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/favorite-style/casual.jpg"
            objectFit="cover"
            fill
            alt="style"
          />
        </SwiperSlide>
        <SwiperSlide className="min-h-[400px]">
          <Image
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/favorite-style/classic.jpg"
            objectFit="cover"
            fill
            alt="style"
          />
        </SwiperSlide>
        <SwiperSlide className="min-h-[400px]">
          <Image
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/favorite-style/highteen.jpg"
            objectFit="cover"
            fill
            alt="style"
          />
        </SwiperSlide>
        <SwiperSlide className="min-h-[400px]">
          <Image
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/favorite-style/sporty.jpg"
            objectFit="cover"
            fill
            alt="style"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
