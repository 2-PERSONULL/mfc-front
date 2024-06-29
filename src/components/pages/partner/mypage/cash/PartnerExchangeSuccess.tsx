import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PartnerExchangeSuccess({
  amount = 0,
}: {
  amount?: number | null
}) {
  return (
    <div className="bg-white w-[80vw] h-[50vh] relative">
      <div className=" absolute top-[-80px] left-[50%] translate-x-[-50%]">
        <Image
          src="/icons/success-circle.svg"
          alt="success-icon"
          width={150}
          height={150}
        />
      </div>
      <div className="mt-[100px]">
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold">환전 완료</h2>
          <p className="text-gray-600">등록하신 정산계좌로 입금되었어요.</p>
        </div>
        <div className="flex flex-col items-center w-full px-10 gap-2 font-semibold">
          <div className="flex justify-between w-full">
            <p>환전 금액</p>
            <p>{amount?.toLocaleString()}원</p>
          </div>
          <div className="flex justify-between w-full">
            <p>환전 수수료</p>
            <p>{amount ? (amount * 0.1).toLocaleString() : 0}원</p>
          </div>
          <div className="flex justify-between w-full">
            <p>입금 금액</p>
            <p>{amount ? (amount * 0.9).toLocaleString() : 0}원</p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/partner/management/cash"
            className="h-[50px] w-[50vw] py-2 text-white bg-black rounded-[14px] flex items-center justify-center font-semibold"
          >
            확인
          </Link>
        </div>
      </div>
    </div>
  )
}
