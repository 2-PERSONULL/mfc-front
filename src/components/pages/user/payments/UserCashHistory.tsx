'use client'

import React, { useEffect, useState } from 'react'
import SliderModal from '@/components/common/SliderModal'
import CashHistoryDatePicker from '@/components/ui/picker/CashHistoryDatePicker'
import { CashChargeHistoryType } from '@/types/cashType'
import { convertToKorWithTime } from '@/utils/formatTime'

interface DateType {
  year: number | null
  month: number | null
}

// year는 올해 년도로 설정 month는 현재 달로 설정
const initialDate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
}

const buttonList = [
  { name: '전체', value: 'all' },
  { name: '충전', value: 'add' },
  { name: '결제', value: 'pay' },
]

export default function UserCashHistory({
  chargeHistory,
  paymentHistory,
  isLast,
}: {
  chargeHistory: CashChargeHistoryType[]
  paymentHistory: CashChargeHistoryType[]
  isLast: boolean
}) {
  console.log(isLast)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [searchDate, setSearchDate] = useState<DateType>(initialDate)
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedHistory, setSelectedHistory] = useState<
    CashChargeHistoryType[]
  >([...chargeHistory, ...paymentHistory])

  useEffect(() => {
    if (selectedType === 'all')
      setSelectedHistory([...chargeHistory, ...paymentHistory])
    if (selectedType === 'add') setSelectedHistory(chargeHistory)
    if (selectedType === 'pay') setSelectedHistory(paymentHistory)
  }, [selectedType])

  useEffect(() => {
    // selectedHistory를 paymentDate 를 기준으로 내림차순 정렬
    setSelectedHistory((prev) =>
      prev.sort((a, b) => {
        return (
          new Date(b.paymentDate).getTime() - new Date(a.paymentDate).getTime()
        )
      }),
    )
  }, [selectedHistory])

  return (
    <>
      <SliderModal
        isModalOpen={isModalOpen}
        onChangeModal={() => setIsModalOpen(false)}
        backgroundClose
        closeButton
      >
        <CashHistoryDatePicker date={searchDate} setDate={setSearchDate} />
      </SliderModal>

      <div className="px-4 h-screen flex flex-col">
        <section className="flex gap-2 py-4">
          <input
            type="text"
            name="searchDate"
            readOnly
            value={
              searchDate.year && searchDate.month
                ? `${searchDate.year}. ${searchDate.month < 10 ? `0${searchDate.month}` : searchDate.month}`
                : ''
            }
            onClick={() => setIsModalOpen(true)}
            className="text-center border border-gray-300 rounded-[14px] py-2 h-[45px] text-[14px] focus:outline-none w-[100px]"
          />

          {buttonList.map((button) => (
            <button
              key={button.value}
              type="button"
              onClick={() => setSelectedType(button.value)}
              className={`border rounded-[14px] py-2 px-2 h-[45px] text-[14px] min-w-[70px] ${
                selectedType === button.value
                  ? 'border-black border-2 font-semibold'
                  : 'border-gray-300'
              }`}
            >
              {button.name}
            </button>
          ))}
        </section>

        <div className="flex-grow overflow-y-auto no-scrollbar mb-10">
          <hr className="border-2 border-black mb-4" />
          <ul>
            {selectedHistory.map((history, index) => (
              <li
                key={index}
                className="px-2 py-4 flex items-center justify-between border-b border-b-gray-200"
              >
                <div className="flex flex-col">
                  <h1 className="text-[17px] ">
                    {history.paymentStatus === 'PAID' ? '캐시충전' : '코디결제'}
                  </h1>
                  <div className="text-[14px]">
                    {convertToKorWithTime(history.paymentDate)}
                  </div>
                </div>
                <div className="text-[17px] font-semibold">
                  {history.paymentStatus === 'PAID' ? '+' : '-'}
                  {history.amount.toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
