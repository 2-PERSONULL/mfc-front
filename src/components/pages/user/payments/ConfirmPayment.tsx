'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/common/Modal'
import CashCharge from './CashCharge'

export default function ConfirmPayment({
  roomId,
  amount,
  confirmId,
}: {
  roomId: number
  amount: number
  confirmId: number
}) {
  console.log(confirmId)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cashBalance = 10000

  return (
    <>
      {isModalOpen && (
        <Modal title="캐시충전" closeModal={() => setIsModalOpen(false)}>
          <CashCharge roomId={roomId} />
        </Modal>
      )}
      <div className="flex flex-col justify-center items-center pt-20">
        <section className="flex flex-col justify-center items-center gap-5 mb-2">
          <Image
            src="/icons/money-send.svg"
            alt="payment icon"
            priority
            width={80}
            height={80}
            className="mb-5"
          />
          <h1 className="font-semibold text-[17px]">결제금액</h1>
          <p>결제완료 시 거래가 확정됩니다.</p>

          <span className="text-[30px] font-semibold border-b border-b-gray-400 w-[70vw] text-center">
            {amount.toLocaleString()} 원
          </span>
        </section>

        <section className="flex gap-2 text-left w-[70vw] mb-20">
          <span>보유캐시: {cashBalance.toLocaleString()}</span>
          {cashBalance < amount && (
            <span className="text-[#FF0000] font-semibold">
              충전이 필요합니다
            </span>
          )}
        </section>

        <section className="flex flex-col items-center justify-center gap-10">
          <button
            type="button"
            className="w-[80vw] bg-black text-white font-semibold text-[17px] h-[60px] rounded-full"
          >
            결제
          </button>

          <div className="flex flex-col justify-center gap-1">
            <span className="text-gray-400 text-[14px] pl-3">
              캐시가 부족하신가요?
            </span>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-[80vw] bg-[#D9D9D9] text-black font-semibold text-[17px] h-[60px] rounded-full"
            >
              충전하러 가기
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
