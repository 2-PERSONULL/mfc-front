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
  const [description, setDescription] = useState<string>('')
  const [descriptionCount, setDescriptionCount] = useState<number>(0)

  const dateErrorMessage = () => {
    if (
      new Date(finishDate.year!, finishDate.month! - 1) <
        new Date(startDate.year!, startDate.month! - 1) &&
      finishDate.year &&
      finishDate.month &&
      startDate.year &&
      startDate.month
    ) {
      return (
        <p className="pt-3 text-[12px] text-[#FF4893]">
          종료일은 시작일보다 빠를 수 없습니다
        </p>
      )
    }
  }

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTitle(value)
    setTitleCount(value.length)
  }

  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setDescription(value)
    setDescriptionCount(value.length)
  }

  const saveHandler = (formData: FormData) => {
    console.log(formData.get('startDate'))
  }

  return (
    <div>
      {modalType !== '' && (
        <SliderModal
          isModalOpen={modalType !== ''}
          onChangeModal={() => setModalType('')}
          backgroundClose
          closeButton
        >
          <PartnerCareerTimePicker
            date={modalType === 'start' ? startDate : finishDate}
            setDate={modalType === 'start' ? setStartDate : setFinishDate}
          />
        </SliderModal>
      )}
      <form className="px-5 pt-5" action={saveHandler}>
        <p className="text-[14px] bg-gray-200 px-3 py-4 rounded-[7px]">
          허위 정보를 기재할 경우, 서비스 이용이 제한될 수 있으며 사안에 따라
          법적 책임을 물을 수 있습니다.
        </p>

        <section className="mt-5">
          <h1>경력 타이틀</h1>
          <input
            type="text"
            name="title"
            required
            value={title}
            maxLength={20}
            onChange={titleChangeHandler}
            className="border border-[#b6b6b6] rounded-[4px] py-2 px-2 w-full mt-2"
          />
          <div className="flex justify-end text-[12px] text-[#969696] mt-2">
            <em className="not-italic">{titleCount}</em> / 20
          </div>
        </section>

        <section className="mt-10">
          <div className="flex gap-10">
            <div>
              <h1>시작 연월</h1>
              <input
                type="text"
                name="startDate"
                required
                readOnly
                value={
                  startDate.year && startDate.month
                    ? `${startDate.year}. ${startDate.month < 10 ? `0${startDate.month}` : startDate.month}`
                    : ''
                }
                onClick={() => {
                  if (startDate.year === null && startDate.month === null) {
                    setStartDate({
                      year: initialDate.year,
                      month: initialDate.month,
                    })
                  }
                  setModalType('start')
                }}
                className="none-round-input outline-none border-b border-b-[#b6b6b6] py-1 w-full mt-2"
              />
            </div>
            <div>
              <h1>종료 연월</h1>
              <input
                type="text"
                name="finishDate"
                required
                readOnly
                value={
                  finishDate.year && finishDate.month
                    ? `${finishDate.year}. ${finishDate.month < 10 ? `0${finishDate.month}` : finishDate.month}`
                    : ''
                }
                onClick={() => {
                  if (finishDate.year === null && finishDate.month === null) {
                    setFinishDate({
                      year: initialDate.year,
                      month: initialDate.month,
                    })
                  }
                  setModalType('end')
                }}
                className="none-round-input outline-none border-b border-b-[#b6b6b6] py-1 w-full mt-2"
              />
            </div>
          </div>
          {/* finishDate가 startDate보다 빠르면 보여준다. */}
          {dateErrorMessage()}
        </section>

        <section className="mt-10">
          <h1>상세 설명</h1>
          <div className="relative border border-[#b6b6b6] bg-[#fff] rounded-[4px] mb-[28px] overflow-visible mt-3">
            <textarea
              required
              name="description"
              className="outline-none min-h-[190px] overflow-y-auto py-[15px] pl-[11px] pr-[23px] bg-transparent w-full h-full text-[13px]"
              maxLength={40}
              placeholder="경력에 대한 상세 설명을 입력해주세요. (최대 40자)"
              onChange={onChangeDescription}
              defaultValue={description}
            />
            <span className="absolute bottom-[-28px] right-[7px] text-[12px] text-[#969696]">
              <em className="not-italic">{descriptionCount}</em> / 40
            </span>
          </div>
        </section>

        <div className="fixed bottom-7 w-full left-0 right-0 px-6">
          <button
            type="submit"
            className="rounded-full w-full h-[50px] bg-black"
          >
            <span className="text-white">저장</span>
          </button>
        </div>
      </form>
    </div>
  )
}
