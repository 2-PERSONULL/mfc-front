import React, { useState } from 'react'
import SliderModal from '@/components/common/SliderModal'
import { Calendar } from '@/components/ui/calendar'
import FormLabel from '@/components/ui/input/FormLabel'
import FormPriceInput from '@/components/ui/input/FormPriceInput'

export default function ConfirmModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
}) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [amount, setAmount] = useState<number>(0)

  const handleSetDeadline = (value: Date | undefined) => {
    setDate(value)
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(date, amount)
  }

  return (
    <SliderModal
      isModalOpen={isModalOpen}
      onChangeModal={() => setIsModalOpen(!isModalOpen)}
      backgroundClose
    >
      <div className="bg-white w-full h-auto rounded-t-[30px] px-3 pb-[100px] pt-[35px]">
        <form onSubmit={submitHandler} className=" h-full overflow-y-scroll">
          <FormLabel text="코디 제출일 선택" />
          <Calendar
            disabled={{ before: new Date() }}
            mode="single"
            selected={date}
            onSelect={handleSetDeadline}
            className="rounded-md mb-[10px]"
          />

          <div className="flex flex-col gap-2 mb-[10px]">
            <FormLabel text="확정 코디 비용" />
            <FormPriceInput
              type="text"
              value={amount.toLocaleString()}
              onChange={(e) => {
                const { value } = e.target
                setAmount(Number(value.replace(/[^0-9]/g, '')))
              }}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center bg-white h-[100px]">
            <button
              type="submit"
              className="bg-black w-[80vw] text-white font-semibold text-[17px] h-[60px] rounded-full"
            >
              제안하기
            </button>
          </div>
        </form>
      </div>
    </SliderModal>
  )
}
