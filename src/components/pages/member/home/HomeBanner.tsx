'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const sampleBanner = [
  '/banner/banner2.png',
  '/banner/banner3.png',
  '/banner/banner1.png',
]

export default function HomeBanner() {
  const [currentCard, setCurrentCard] = useState<number>(0)

  return (
    <section className="mb-14">
      <Swiper
        spaceBetween={15}
        slidesPerView={1.3}
        simulateTouch
        grabCursor
        centeredSlides
        initialSlide={currentCard}
        onSlideChange={(swiper) => {
          setCurrentCard(swiper.activeIndex)
        }}
        observer
        navigation
        modules={[Navigation]}
        className="banner"
      >
        {sampleBanner?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="banner min-h-[350px] mt-8">
              <div
                className={`${currentCard === index ? 'h-[350px]' : 'h-[300px]'} rounded-[20px] w-full relative overflow-hidden`}
              >
                <Image
                  src={item}
                  alt="홈 배너"
                  fill
                  sizes="(max-width: 100px) 100vw, 100px"
                  className="relative object-cover rounded-[20px]"
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="absolute top-10 h-[220px] w-full bg-black mt-[230px]" />
    </section>
  )
}
