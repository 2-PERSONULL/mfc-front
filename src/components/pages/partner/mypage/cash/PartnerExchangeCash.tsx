'use client'

import React, { useState } from 'react'
import PricePad from '@/components/pages/partner/mypage/cash/PricePad'

export default function PartnerExchangeCash() {
  const [amount, setAmount] = useState<number | null>(null)

  const clickNumber = (num: string) => {
    if (num === '00') {
      if (amount === null) return
      setAmount(amount * 100)
      return
    }

    if (num === '0') {
      if (amount === null) return
      setAmount(amount * 10)
      return
    }

    if (amount === null) {
      setAmount(Number(num))
      return
    }

    setAmount(amount * 10 + Number(num))
  }

  const deleteHandler = () => {
    if (amount === null) return
    setAmount(Math.floor(amount / 10))
  }

  return (
    <div>
      <div className="flex  items-center justify-around gap-5 bg-white px-6 my-4">
        <div className="flex flex-col justify-center bg-gray-200 w-full h-[100px] rounded-[14px] p-3">
          <h1 className="font-medium text-gray-500 dark:text-gray-400">
            보유 캐시
          </h1>
          <span className="font-bold text-lg">23,000</span>
        </div>
        <div className="flex flex-col justify-center bg-gray-200 w-full h-[100px] rounded-[14px] p-3">
          <h1 className="font-medium text-gray-500 dark:text-gray-400">
            환전 가능한 캐시
          </h1>
          <span className="font-bold text-lg">23,000</span>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white px-6">
        <div className="flex flex-col">
          <div className="text-sm font-medium text-gray-500">
            내 계좌로 얼마나 환전할까요?
          </div>
          {/* <input
            type="text"
            inputMode="none"
            value={amount?.toLocaleString()}
            className="h-[50px] border-b focus:outline-none text-2xl"
          /> */}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mb-4">
        <button type="button" className="bg-black w-full h-[55px]">
          <span className="text-lg text-white font-semibold">환전하기</span>
        </button>
        <div className="flex-1">
          <PricePad clickNumber={clickNumber} deleteHandler={deleteHandler} />
        </div>
      </div>
    </div>
  )
}
