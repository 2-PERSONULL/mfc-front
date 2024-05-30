'use client'

import React, { useState } from 'react'
import SliderModal from '@/components/common/SliderModal'
import PartnerCareerTimePicker from '@/components/ui/picker/PartnerCareerTimePicker'

interface CareerDateType {
  year: number | null
  month: number | null
}

export default function PartnerCareerEditor() {
  // year는 올해 년도로 설정 month는 현재 달로 설정
  const initialDate = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  }

  const [modalType, setModalType] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [titleCount, setTitleCount] = useState<number>(0)
  const [startDate, setStartDate] = useState<CareerDateType>({
    year: null,
    month: null,
  })
  const [finishDate, setFinishDate] = useState<CareerDateType>({
    year: null,
    month: null,
  })
  // const [description, setDescription] = useState<string>('')

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTitle(value)
    setTitleCount(value.length)
  }

  return (
    <div>
      <SliderModal
        isModalOpen={!!modalType}
        onChangeModal={() => setModalType('')}
        backgroundClose
        closeButton
      >
        <PartnerCareerTimePicker
          date={modalType === 'start' ? startDate : finishDate}
          setDate={modalType === 'start' ? setStartDate : setFinishDate}
        />
      </SliderModal>
      <div className="px-5 pt-5">
        <p className="text-[14px] bg-gray-200 px-3 py-4 rounded-[7px]">
          허위 정보를 기재할 경우, 서비스 이용이 제한될 수 있으며 사안에 따라
          법적 책임을 물을 수 있습니다.
        </p>

        <section className="mt-5">
          <h1>경력 타이틀</h1>
          <input
            type="text"
            value={title}
            maxLength={20}
            onChange={titleChangeHandler}
            className="border border-[#b6b6b6] rounded-[4px] py-2 px-2 w-full mt-2"
          />
          <div className="flex justify-end text-[13px]">
            <em className="text-[#777] not-italic">{titleCount}</em> / 20자
          </div>
        </section>

        <section className="mt-10">
          <div className="flex gap-10">
            <div>
              <h1>시작 연월</h1>
              <input
                type="text"
                readOnly
                value={
                  startDate.year && startDate.month
                    ? `${startDate.year}. ${startDate.month < 10 ? `0${startDate.month}` : startDate.month}`
                    : ''
                }
                onClick={() => {
                  setModalType('start')
                  if (startDate.year === null && startDate.month === null) {
                    setStartDate(initialDate)
                  }
                }}
                className="none-round-input outline-none border-b border-b-[#b6b6b6] py-1 w-full mt-2"
              />
            </div>
            <div>
              <h1>종료 연월</h1>
              <input
                type="text"
                readOnly
                value={
                  finishDate.year && finishDate.month
                    ? `${finishDate.year}. ${finishDate.month < 10 ? `0${finishDate.month}` : finishDate.month}`
                    : ''
                }
                onClick={() => {
                  setModalType('end')
                  if (finishDate.year === null && finishDate.month === null) {
                    setFinishDate(initialDate)
                  }
                }}
                className="none-round-input outline-none border-b border-b-[#b6b6b6] py-1 w-full mt-2"
              />
            </div>
          </div>
          {/* finishDate가 startDate보다 빠르면 보여준다. */}
          {new Date(finishDate.year!, finishDate.month! - 1) <
            new Date(startDate.year!, startDate.month! - 1) && (
            <p className="pt-3 text-[12px] text-[#FF4893]">
              종료일은 시작일보다 빠를 수 없습니다
            </p>
          )}
        </section>

        <section className="mt-10">
          <h1>상세 설명</h1>
          {/* <input
          type="text"
          maxLength={20}
          className="border border-[#b6b6b6] rounded-[4px] py-2 px-2 w-full mt-2"
          />
          <div className="flex justify-end text-[13px]">
          <em className="text-[#777] not-italic">{titleCount}</em> / 40자
        </div> */}
        </section>
      </div>
    </div>
  )
}
