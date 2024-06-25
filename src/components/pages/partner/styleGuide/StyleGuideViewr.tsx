'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import StyleGuideItem from '@/components/pages/user/styleGuide/StyleGuideItem'
import StyleGuideItemDetail from '@/components/pages/user/styleGuide/StyleGuideItemDetail'

import StyleGuideInfo from '@/types/styleGuideTypes'
import BottomFixedTransButton from '@/components/ui/button/BottomFixedTransButton'

export default function StyleGuideList({
  data,
  requestId,
  status,
}: {
  data: StyleGuideInfo[]
  requestId: string
  status: string
}) {
  const [swiper, setSwiper] = useState<SwiperCore>()
  const [currentCard, setCurrentCard] = useState<number>(0)

  // const editHandler = () => {
  //   console.log('editHandler')
  // }

  const handleSelect = (index: number) => {
    setCurrentCard(index)
    swiper?.slideTo(index, 500)
  }

  return (
    <>
      <div className="p-3 pb-[120px]">
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
        <section className="w-full px-6 mt-10">
          <Swiper
            spaceBetween={100}
            slidesPerView={1}
            allowTouchMove={false}
            onSwiper={setSwiper}
            onSlideChange={(s) => setCurrentCard(s.activeIndex)}
          >
            {data.map((style, index) => (
              <SwiperSlide key={index}>
                <StyleGuideItemDetail style={style} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
      {status !== 'CLOSED' && (
        <BottomFixedTransButton
          title="수정하기"
          link={`/partner/styleguide/${requestId}?type=edit`}
        />
      )}
    </>
  )
}
