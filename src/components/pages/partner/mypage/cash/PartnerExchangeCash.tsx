'use client'

import React, { useEffect, useState } from 'react'
import PricePad from '@/components/pages/partner/mypage/cash/PricePad'
import useToast from '@/stores/toast'

export default function PartnerExchangeCash() {
  const { showToast } = useToast()

  const [balance, setBalance] = useState<number>(0)
  const [exchangeable, setExchangeable] = useState<number>(0)
  const [amount, setAmount] = useState<number | null>(null)

  useEffect(() => {
    // api 호출해서 balance, exchangeable 값 가져오기
    // setBalance(100000)
    // setExchangeable(50000)
    setBalance(100000)
    setExchangeable(50000)
  }, [])

  const clickHandler = () => {
    if (amount === null) return
    if (exchangeable < amount) {
      showToast({
        content: '환전 가능한 금액을 초과했습니다.',
        type: 'warning',
      })
    }

    // 환전 로직 api
  }

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
    const newAmount = Math.floor(amount / 10)
    if (newAmount === 0) {
      setAmount(null)
      return
    }
    setAmount(Math.floor(amount / 10))
  }

  return (
    <div>
      <div className="flex  items-center justify-around gap-5 bg-white px-6 mt-3 mb-6">
        <div className="flex flex-col justify-center bg-gray-100 w-full h-[100px] rounded-[14px] p-3">
          <h1 className="font-medium text-gray-500 ">보유 캐시</h1>
          <span className="font-bold text-lg">{balance}</span>
        </div>
        <div className="flex flex-col justify-center bg-gray-100 w-full h-[100px] rounded-[14px] p-3">
          <h1 className="font-medium text-gray-500 ">환전 가능한 캐시</h1>
          <span className="font-bold text-lg">{exchangeable}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-6">
        <div className="text-sm font-medium text-gray-500">내 정산 계좌로</div>
        {amount ? (
          <>
            <div className="h-auto text-2xl w-[60vw] font-semibold">
              {amount ? `${amount.toLocaleString()} 원` : ''}
            </div>
            <div className="bg-[#DFEEFA] rounded-[14px] px-3 py-2 w-[max-content]">
              <span>
                수수료 10% 제외 환전 금액 {(amount * 0.9).toLocaleString()}원
              </span>
            </div>
          </>
        ) : (
          <input
            type="text"
            inputMode="none"
            placeholder="얼마나 환전할까요?"
            className="h-[50px] focus:outline-none text-2xl w-[60vw] font-semibold"
          />
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 mb-4">
        {amount && (
          <button
            type="button"
            onClick={clickHandler}
            className="bg-black w-full h-[55px]"
          >
            <span className="text-lg text-white font-semibold">환전하기</span>
          </button>
        )}
        <div className="flex-1">
          <PricePad clickNumber={clickNumber} deleteHandler={deleteHandler} />
        </div>
      </div>
    </div>
  )
}
