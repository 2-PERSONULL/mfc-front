'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import StyleGuideItem from '@/components/pages/user/styleGuide/StyleGuideItem'
import StyleGuideItemDetailOld from '@/components/pages/user/styleGuide/StyleGuideItemDetailOld'
import StyleGuideAction from '@/components/pages/user/styleGuide/StyleGuideAction'
import StyleGuideTitle from '@/components/pages/user/styleGuide/StyleGuideTitle'
import StyleGuideInfo from '@/types/styleGuideTypes'

export default function StyleGuideListOld({
  data,
}: {
  data: StyleGuideInfo[]
}) {
  const [swiper, setSwiper] = useState<SwiperCore>()
  const [currentCard, setCurrentCard] = useState<number>(0)

  const handleSelect = (index: number) => {
    setCurrentCard(index)
    swiper?.slideTo(index, 500)
  }

  return (
    <>
      <div className="p-3 pb-[120px]">
        <StyleGuideTitle />
        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
          simulateTouch
          grabCursor
          centeredSlides
          initialSlide={currentCard}
          onSlideChange={(swipe) => {
            handleSelect(swipe.snapIndex)
          }}
          observer
          navigation
          modules={[Navigation]}
        >
          {data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <StyleGuideItem card={item} focused={currentCard === index} />
              </SwiperSlide>
            )
          })}
        </Swiper>

        {/* 선택된 아이템 */}
        <section className="w-full px-6 mt-5">
          <Swiper
            spaceBetween={100}
            slidesPerView={1}
            allowTouchMove={false}
            onSwiper={setSwiper}
            onSlideChange={(s) => setCurrentCard(s.activeIndex)}
          >
            {data.map((style, index) => (
              <SwiperSlide key={index}>
                <StyleGuideItemDetailOld style={style} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
      <StyleGuideAction />
    </>
  )
}
