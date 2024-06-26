import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

interface DateProps {
  year: number
  month: number
}

export default function CashHistoryDatePicker({
  date,
  setDate,
}: {
  date: DateProps
  setDate: (date: DateProps) => void
}) {
  const currentDate = new Date()
  const sixMonthsAgo = new Date()
  sixMonthsAgo.setMonth(currentDate.getMonth() - 6)

  const startYear = sixMonthsAgo.getFullYear()
  const startMonth = sixMonthsAgo.getMonth() + 1

  const yearData = Array.from(
    { length: currentDate.getFullYear() - startYear + 1 },
    (_, i) => startYear + i,
  ).reverse()

  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1

  let monthData = []

  if (date.year === currentYear) {
    monthData = Array.from({ length: currentMonth }, (_, i) => i + 1).filter(
      (month) => !(date.year === startYear && month < startMonth),
    )
  } else if (date.year === startYear) {
    monthData = Array.from(
      { length: 12 - startMonth + 1 },
      (_, i) => startMonth + i,
    )
  } else {
    monthData = Array.from({ length: 12 }, (_, i) => i + 1)
  }

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
