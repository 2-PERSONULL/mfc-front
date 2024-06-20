import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PartnerCashBalanceBox() {
  return (
    <section className="p-4 border-b-2 border-b-gray-200">
      <div className="flex items-center justify-around">
        <div className="flex flex-col">
          <span className="text-[17px] font-bold">보유 캐시</span>
          <span className="text-[30px] font-bold">
            45,000
            <span className="text-[30px] font-bold ml-1">원</span>
          </span>
        </div>
        <Image src="/icons/pig.svg" width={120} height={120} alt="cash" />
      </div>
      <div className="flex justify-center mb-4">
        <Link href="/partner/management/cash/exchange">
          <button
            type="button"
            className="bg-black w-[80vw] h-[50px] rounded-full text-[17px] text-white font-bold"
          >
            환전하기
          </button>
        </Link>
      </div>
    </section>
  )
}
