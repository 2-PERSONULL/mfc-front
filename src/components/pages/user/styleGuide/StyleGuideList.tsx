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
import StyleGuideAction from '@/components/pages/user/styleGuide/StyleGuideAction'
import StyleGuideTitle from '@/components/pages/user/styleGuide/StyleGuideTitle'
import StyleGuideInfo from '@/types/styleGuideTypes'

const sampleData = [
  {
    category: '상의',
    brand: '던스트',
    budget: 100000,
    url: 'https://dunststudio.com/product/detail.html?product_no=5220&cate_no=31&display_group=1',
    comment:
      'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    images: [
      'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/style-guide/1717722692489',
      'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/style-guide/1719074384447',
    ],
  },
  {
    category: '하의',
    brand: '',
    budget: 100000,
    url: 'https://www.nike.com/kr/ko_kr/',
    comment:
      'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    images: [
      //   'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/style-guide/1719074388647',
      //   'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/style-guide/1719074384447',
    ],
  },
]

export default function StyleGuideList() {
  const [data] = useState<StyleGuideInfo[]>(sampleData)
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
            {sampleData.map((style, index) => (
              <SwiperSlide key={index}>
                <StyleGuideItemDetail style={style} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
      <StyleGuideAction />
    </>
  )
}
