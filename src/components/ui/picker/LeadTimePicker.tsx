import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function LeadTimePicker({
  leadTime,
  setLeadTime,
}: {
  leadTime: number
  setLeadTime: (leadTime: number) => void
}) {
  // 최대 7일까지 선택 가능
  const timeData = Array.from({ length: 7 }, (_, i) => i + 1)
  const initialSlideIndex = timeData.findIndex((time) => time === leadTime)

  return (
    <div className="flex">
      <Swiper
        className="h-[150px] bg-white overflow-hidden"
        direction="vertical"
        slidesPerView={3}
        mousewheel
        loopAdditionalSlides={5}
        slideToClickedSlide
        centeredSlides
        initialSlide={initialSlideIndex}
        onSlideChange={(swiper) => setLeadTime(timeData[swiper.realIndex])}
      >
        {timeData.map((data: number) => (
          <SwiperSlide key={data}>
            <div
              className={`flex w-[90px] h-[50px] font-bold cursor-pointer items-center justify-center
                ${leadTime === data ? 'text-[15px] bg-gray-100' : 'text-[15px] text-gray-400'}`}
            >
              {data}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
