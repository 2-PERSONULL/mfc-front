'use client'

import React, { useEffect, useState } from 'react'
import SliderModal from '@/components/common/SliderModal'
import CashHistoryDatePicker from '@/components/ui/picker/CashHistoryDatePicker'
import { CashChargeHistoryType, PaymentHistoryType } from '@/types/cashType'
import { convertToKorWithTime } from '@/utils/formatTime'
import { getPaymentHistory } from '@/actions/user/Payments'

interface DateType {
  year: number
  month: number
}

// year는 올해 년도로 설정 month는 현재 달로 설정
const initialDate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
}

const buttonList = [
  { name: '전체', value: 'all' },
  { name: '적립', value: 'add' },
  { name: '환전', value: 'exchange' },
]

export default function PartnerCashHistory({
  settlementHistory,
  isLast,
}: {
  settlementHistory: CashChargeHistoryType[]
  isLast: boolean
}) {
  console.log(isLast)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [searchDate, setSearchDate] = useState<DateType>(initialDate)
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedHistory, setSelectedHistory] = useState<
    CashChargeHistoryType[]
  >([...settlementHistory])

  useEffect(() => {
    const newDate = `${searchDate.year}-${searchDate.month < 10 ? `0${searchDate.month}` : searchDate.month}`

    const getPaymentData = async () => {
      const result = await getPaymentHistory('SETTLEMENT_COMPLETED', newDate, 0)
      if (result.content) {
        const newData = result.content.map((item: PaymentHistoryType) => ({
          amount: item.amount,
          paymentStatus: 'SETTLEMENT',
          paymentDate: item.createdAt,
        }))
        return setSelectedHistory(newData)
      }
      return setSelectedHistory([])
    }

    getPaymentData()
  }, [searchDate])

  useEffect(() => {
    if (selectedType === 'all') setSelectedHistory([...settlementHistory])
    if (selectedType === 'add') setSelectedHistory([...settlementHistory])
    if (selectedType === 'exchange') setSelectedHistory([])
  }, [selectedType])

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
          {selectedHistory.length === 0 && (
            <div className="mt-10 text-center">조회 내역이 없습니다.</div>
          )}
          <ul>
            {selectedHistory.map((history, index) => (
              <li
                key={index}
                className="px-2 py-4 flex items-center justify-between border-b border-b-gray-200"
              >
                <div className="flex flex-col">
                  <h1 className="text-[17px] ">캐시적립</h1>
                  <div className="text-[14px]">
                    {' '}
                    {convertToKorWithTime(history.paymentDate)}
                  </div>
                </div>
                <div className="text-[17px] font-semibold">
                  {history.paymentStatus === 'SETTLEMENT' ? '+' : '-'}
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
