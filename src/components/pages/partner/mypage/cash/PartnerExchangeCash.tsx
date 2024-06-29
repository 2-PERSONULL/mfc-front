'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PricePad from '@/components/pages/partner/mypage/cash/PricePad'
import useToast from '@/stores/toast'
import settlement from '@/actions/partner/Cash'
import GrayModal from '@/components/common/GrayModal'
import PartnerExchangeSuccess from './PartnerExchangeSuccess'

export default function PartnerExchangeCash({
  balance,
  bank,
  accountNumber,
}: {
  balance: number
  bank: string
  accountNumber: string
}) {
  const { showToast } = useToast()
  const [cashBalance, setCashBalance] = useState<number>(balance)
  const [exchangeable, setExchangeable] = useState<number>(0)
  const [amount, setAmount] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    // balance를 1000원 단위로 환전 가능
    setCashBalance(balance)
    setExchangeable(Math.floor(balance / 1000) * 1000)
  }, [balance])

  const clickHandler = async () => {
    if (amount === null) return

    // 1000원 단위로 환전 가능
    if (amount % 1000 !== 0) {
      showToast({
        content: '1000원 단위로 환전 가능합니다.',
        type: 'warning',
      })
      return
    }

    if (exchangeable < amount) {
      showToast({
        content: '환전 가능한 금액을 초과했습니다.',
        type: 'warning',
      })

      return
    }

    // 환전 로직 api
    await settlement(amount, accountNumber, bank)
    setIsModalOpen(true)
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
      {isModalOpen && (
        <GrayModal>
          <PartnerExchangeSuccess amount={amount} />
        </GrayModal>
      )}
      <div className="flex  items-center justify-around gap-5 bg-white px-6 mt-3 mb-6">
        <div className="flex flex-col justify-center bg-gray-100 w-full h-[100px] rounded-[14px] p-3">
          <h1 className="font-medium text-gray-500 ">보유 캐시</h1>
          <span className="font-bold text-lg">
            {cashBalance.toLocaleString()}
          </span>
        </div>
        <div className="flex flex-col justify-center bg-gray-100 w-full h-[100px] rounded-[14px] p-3">
          <h1 className="font-medium text-gray-500 ">환전 가능한 캐시</h1>
          <span className="font-bold text-lg">
            {exchangeable.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-6">
        {!bank ||
          (!accountNumber && (
            <div className="flex flex-col justify-center w-full h-[60px] rounded-[14px] mb-6 gap-2">
              정산 계좌 정보를 먼저 등록해주세요 :)
              <Link
                href="/partner/management/cash/bankaccount"
                className="flex items-center bg-gray-100 h-[55px] pl-5 py-3 rounded-[13px] text-gray-500 font-semibold"
              >
                <span>등록하러가기 </span>
                <Image
                  src="/icons/list-arrow.svg"
                  alt="arrow-icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          ))}
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
