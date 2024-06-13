import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

interface DateProps {
  year: number | null
  month: number | null
  day: number | null
}

export default function BirthPicker({
  date,
  setDate,
}: {
  date: DateProps
  setDate: (date: DateProps) => void
}) {
  const yearData = Array.from(
    { length: new Date().getFullYear() - 1949 },
    (_, i) => i + 1950,
  ).reverse()
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1
  const getDaysInMonth = (
    year: number | null,
    month: number | null,
  ): number => {
    if (year === null || month === null) {
      return 0
    }
    return new Date(year, month, 0).getDate()
  }
  const monthData = Array.from(
    {
      length:
        date.year !== null && currentYear !== null && date.year === currentYear
          ? currentMonth ?? 12
          : 12,
    },
    (_, i) => i + 1,
  )
  const dayData = Array.from(
    {
      length:
        date.year === currentYear && date.month === currentMonth
          ? new Date().getDate()
          : getDaysInMonth(date.year, date.month),
    },
    (_, i) => i + 1,
  )

  const initialYearIndex = yearData.findIndex((y) => y === date.year)
  const initialMonthIndex = monthData.findIndex((m) => m === date.month)
  const initialDayIndex = dayData.findIndex((d) => d === date.day)

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
      <Swiper
        className="h-[150px] bg-white overflow-hidden"
        direction="vertical"
        slidesPerView={3}
        mousewheel
        slideToClickedSlide
        centeredSlides
        initialSlide={initialDayIndex}
        onSlideChange={(swiper) => {
          setDate({ ...date, day: dayData[swiper.realIndex] })
        }}
      >
        {dayData.map((data: number) => (
          <SwiperSlide key={data}>
            <div
              className={`flex w-[90px] h-[50px] text-[15px] font-bold cursor-pointer items-center justify-center
            ${date.day !== data && 'text-gray-400'}`}
            >
              {data}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
