import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

interface CareerDateProps {
  year: number | null
  month: number | null
}

export default function PartnerCareerTimePicker({
  date,
  setDate,
}: {
  date: CareerDateProps
  setDate: (date: CareerDateProps) => void
}) {
  const yearData = Array.from(
    { length: new Date().getFullYear() - 1949 },
    (_, i) => i + 1950,
  ).reverse()
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1
  // 현재 연월까지만 선택 가능
  const monthData = Array.from(
    { length: date.year === currentYear ? currentMonth : 12 },
    (_, i) => i + 1,
  )

  // date값이 없을 경우 initialSlide를 현재 년도와 월로 설정
  const initialYearIndex = yearData.findIndex((y) => y === date.year)
  const initialMonthIndex = monthData.findIndex((m) => m === date.month)

  return (
    <div className="flex bg-white justify-center py-4 relative">
      <div className="absolute inset-x-0 inset-y-[65px] h-[50px] bg-gray-100" />
      <Swiper
        className="h-[150px] bg-white overflow-hidden"
        direction="vertical"
        slidesPerView={3}
        mousewheel
        slideToClickedSlide
        centeredSlides
        initialSlide={initialYearIndex}
        onSlideChange={(swiper) => {
          setDate({ ...date, year: yearData[swiper.realIndex] })
        }}
      >
        {yearData.map((data: number) => (
          <SwiperSlide key={data}>
            <div
              className={`flex w-[90px] h-[50px] text-[15px] font-bold cursor-pointer items-center justify-center
                ${date.year !== data ? 'text-gray-400' : 'text-black'}`}
            >
              {data}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="h-[150px] bg-white overflow-hidden"
        direction="vertical"
        slidesPerView={3}
        mousewheel
        slideToClickedSlide
        centeredSlides
        initialSlide={initialMonthIndex}
        onSlideChange={(swiper) => {
          setDate({ ...date, month: monthData[swiper.realIndex] })
        }}
      >
        {monthData.map((data: number) => (
          <SwiperSlide key={data}>
            <div
              className={`flex w-[90px] h-[50px] text-[15px] font-bold cursor-pointer items-center justify-center
                ${date.month !== data && 'text-gray-400'}`}
            >
              {data}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
