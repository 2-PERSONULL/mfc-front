'use client'

import React, { useState } from 'react'
import SliderModal from '@/components/common/SliderModal'
import RightArrowIcon from '@/components/ui/icons/RightArrowIcon'
import FormLabel from '@/components/ui/input/FormLabel'

export default function AccountManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <SliderModal
        isModalOpen={isModalOpen}
        onChangeModal={() => setIsModalOpen(!isModalOpen)}
        backgroundClose
      >
        <div>test</div>
      </SliderModal>
      <div className="p-4">
        <p className="text-[15px] mb-5">입력한 정보로 환전금액이 입금됩니다.</p>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 mb-[10px]">
            <FormLabel text="예금주" />
            <input className="border border-gray-300 rounded-[4px] py-2 px-2 w-full h-[45px] text-[14px] focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500" />
          </div>

          <div className="flex flex-col gap-2 mb-[10px]">
            <FormLabel text="은행명" required />
            <div className="relative w-full">
              <div
                role="presentation"
                className={`fixed top-0 w-screen h-full transition-all hidden'}`}
              />
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="border border-gray-300 rounded-[4px] w-full h-[45px] relative flex items-center justify-between px-2"
              >
                <span className="text-[#222] text-[14px]">
                  은행을 선택하세요
                </span>
                <RightArrowIcon
                  width={10}
                  height={10}
                  rotate="90"
                  color="gray"
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-[10px]">
            <FormLabel text="계좌번호" required />
            <input className="border border-gray-300 rounded-[4px] py-2 px-2 w-full h-[45px] text-[14px] focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500" />
          </div>
        </div>
      </div>
    </>
  )
}
