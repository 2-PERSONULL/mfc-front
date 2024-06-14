import React from 'react'
import Image from 'next/image'
import SliderModal from '@/components/common/SliderModal'

interface BankType {
  code: string
  name: string
}

export default function BankList({
  bankList,
  isModalOpen,
  setIsModalOpen,
  setSelectedBank,
}: {
  bankList: BankType[]
  isModalOpen: boolean
  setIsModalOpen: (value: boolean) => void
  setSelectedBank: (value: BankType | null) => void
}) {
  const clickHandler = (bank: BankType) => {
    setSelectedBank(bank)
    setIsModalOpen(false)
  }

  return (
    <SliderModal
      isModalOpen={isModalOpen}
      onChangeModal={() => setIsModalOpen(!isModalOpen)}
      backgroundClose
    >
      <div className="bg-white w-full h-[70dvh] rounded-t-[30px] px-4 pb-[70px] pt-[35px]">
        <h1 className="text-[18px] font-semibold pb-5">
          금융기관을 선택해주세요
        </h1>
        <ul className=" h-full overflow-y-scroll grid grid-cols-3 gap-3">
          {bankList &&
            bankList.map((bank) => (
              <li
                role="presentation"
                onClick={() => clickHandler(bank)}
                key={bank.code}
                className="bg-gray-100 rounded-[14px] h-[90px] flex flex-col items-center justify-center"
              >
                <Image
                  src="/bank/032.svg"
                  alt="bank-icon"
                  width="40"
                  height="40"
                />
                {bank.name}
              </li>
            ))}
        </ul>
      </div>
    </SliderModal>
  )
}
