'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Modal from '@/components/common/Modal'
import CashCharge from './CashCharge'
import sendCard from '@/actions/chat/chatCard'
import { payCoordinating } from '@/actions/user/Payments'
import useToast from '@/stores/toast'

export default function ConfirmPayment({
  roomId,
  amount,
  requestId,
  cashBalance,
  partnerId,
}: {
  roomId: number
  amount: number
  requestId: string
  cashBalance: number
  partnerId: string
}) {
  console.log(partnerId)
  const { showToast } = useToast()
  const router = useRouter()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const paymentHandler = async () => {
    // 코디네이팅 결제 로직(캐시 차감)
    const response = await payCoordinating(requestId, partnerId, Number(amount))

    if (response.isSuccess) {
      const cardMessage = {
        requestId,
        title: '결제완료',
        description:
          '고객님이 결제를 완료하여 코디 거래가 확정되었습니다. 파트너님은 제출기한내에 코디를 제출해주세요:)',
        target: 'all',
        details: [],
        actions: [],
        type: 'information',
      }

      sendCard(cardMessage, roomId.toString())
      router.replace(`/user/chatroom/${roomId}`)
    }

    // 결제 실패 시
    showToast({ content: response.message, type: 'error' })
  }

  return (
    <>
      {isModalOpen && (
        <Modal title="캐시충전" closeModal={() => setIsModalOpen(false)}>
          <CashCharge
            closeModal={() => setIsModalOpen(false)}
            cashBalance={cashBalance}
          />
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
            {typeof amount === 'string'
              ? parseInt(amount, 10).toLocaleString()
              : amount?.toLocaleString()}
            원
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
            onClick={paymentHandler}
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
