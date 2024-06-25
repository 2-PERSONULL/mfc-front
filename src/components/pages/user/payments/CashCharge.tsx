'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import BottomFixedButton from '@/components/ui/button/BottomFixedButton'
import usePayment from '@/hooks/usePayment'

export default function CashCharge({
  closeModal,
  cashBalance,
}: {
  closeModal?: () => void
  cashBalance: number
}) {
  const router = useRouter()
  const callbackUrl = usePathname()
  const confirmId = useSearchParams().get('confirmId')
  const amount = useSearchParams().get('amount')
  const roomId = useSearchParams().get('roomId')

  const { requestPayment } = usePayment()

  // 결제 수단
  const easyPayList = [
    {
      id: 1,
      image: '/icons/npay.svg',
      value: 'NAVERPAY',
    },
    {
      id: 2,
      image: '/icons/kakaopay.svg',
      value: 'KAKAOPAY',
    },
    {
      id: 3,
      image: '/icons/tosspay.svg',
      value: 'TOSSPAY',
    },
  ]
  const cashList = [1000, 5000, 10000, 20000]
  const [chargeAmount, setChargeAmount] = useState(0)
  const [payMethod, setPayMethod] = useState<string>('CARD')

  return (
    <div className="p-6">
      <section>
        <h1 className="text-[17px] font-semibold">충전할 캐시</h1>
        <div className="border-b-2 border-b-black flex justify-between items-center p-2 mb-2">
          <div className="text-[30px] font-semibold">
            {chargeAmount.toLocaleString()}
          </div>

          <button
            type="button"
            onClick={() => setChargeAmount(0)}
            className="px-1 bg-gray-400 rounded-full shadow-md w-[25px] h-[25px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 25 25"
              className="inline-block w-4 h-4 stroke-current text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </section>

      <section className="mb-10">
        <ul className="flex gap-2">
          {cashList.map((cash, index) => (
            <li
              role="presentation"
              onClick={() => {
                if (chargeAmount + cash <= 100000) {
                  setChargeAmount((prev) => prev + cash)
                }
              }}
              key={index}
              className="text-[15px] font-semibold w-[fit] bg-gray-200 rounded-full px-2 py-1"
            >
              + {cash.toLocaleString()}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-2 mb-10">
        <p className="text-[14px] text-gray-400">
          1회 최대 충전가능 금액은 100,000원 입니다.{' '}
        </p>
        <div className="flex text-[17px] justify-between">
          <h1 className="">결제하실 금액</h1>
          <span className="font-bold text-red-500">
            {chargeAmount.toLocaleString()} 원
          </span>
        </div>
        <div className="flex text-[17px] justify-between">
          <h1 className="text-[17px]">결제 후 내 캐시</h1>
          <span className="font-bold">
            {(cashBalance + chargeAmount).toLocaleString()} 캐시
          </span>
        </div>
      </section>

      <section>
        <h1 className="text-[17px] font-semibold mb-2">결제방법</h1>

        <div
          role="presentation"
          onClick={() => setPayMethod('CARD')}
          className={`flex h-[50px] items-center justify-center p-3 mb-4 ${payMethod === 'CARD' ? 'border-black border-2' : 'border border-gray-300'} `}
        >
          신용 ‧ 체크카드
        </div>
        <ul className="flex gap-2">
          {easyPayList.map((pay) => (
            <li
              key={pay.id}
              role="presentation"
              onClick={() => setPayMethod(pay.value)}
              className={`p-3 w-full h-[50px] flex items-center justify-center ${payMethod === pay.value ? 'border-black border-2' : 'border border-gray-300'}`}
            >
              <div className="w-full h-[20px] relative">
                <Image
                  src={pay.image}
                  alt="payment icon"
                  fill
                  sizes="(max-width: 100px) 100vw, 100px"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <BottomFixedButton
        text="결제하기"
        disabled={chargeAmount === 0}
        clickHandler={() =>
          requestPayment(
            chargeAmount,
            payMethod,
            closeModal || (() => router.replace('/user/mypage/paymentlist')),
            `${callbackUrl}?confirmId=${confirmId}&amount=${amount}&roomId=${roomId}`,
          )
        }
      />
    </div>
  )
}
