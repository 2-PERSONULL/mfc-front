import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import timePickerData from '@/libs/timePickerData'

export default function TimepickerSwiper({
  hour,
  setHour,
}: {
  hour: number
  setHour: (hour: number) => void
}) {
  const timeData = timePickerData
  const initialSlideIndex = timeData.findIndex((time) => time.value === hour)

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
        onSlideChange={(swiper) => setHour(timeData[swiper.realIndex].value)}
      >
        {timeData.map((time: { value: number; label: string }) => (
          <SwiperSlide key={time.value}>
            <div
              className={`flex w-[90px] h-[50px] font-bold cursor-pointer items-center justify-center
                ${hour === time.value ? 'text-[15px] bg-gray-100' : 'text-[15px] text-gray-400'}`}
            >
              {time.label}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
