import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import SliderModal from '@/components/common/SliderModal'
import { Calendar } from '@/components/ui/calendar'
import FormLabel from '@/components/ui/input/FormLabel'
import FormPriceInput from '@/components/ui/input/FormPriceInput'
import sendCard from '@/actions/chat/chatCard'
import useToast from '@/stores/toast'
import addConfirm from '@/actions/chat/Confirm'
import { formatRequestDate } from '@/utils/formatTime'

export default function ConfirmModal({
  isModalOpen,
  setIsModalOpen,
  userId,
  requestId,
}: {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
  userId: string
  requestId: string
}) {
  const { showToast } = useToast()
  const { roomId } = useParams<{ roomId: string }>()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [amount, setAmount] = useState<number>(0)

  const handleSetDeadline = (value: Date | undefined) => {
    setDate(value)
  }

  // 확정 제안하기
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!date) {
      showToast({ content: '코디 제출일을 선택해주세요', type: 'warning' })
      return
    }
    if (amount === 0) {
      showToast({ content: '금액을 입력해주세요.', type: 'warning' })
      return
    }

    const formattedDate = date?.toLocaleDateString()
    const formattedAmount = `${amount.toLocaleString()}원`

    const cardMessage = {
      requestId,
      title: '확정제안',
      description:
        '협의한 코디 제출일과 금액이 맞는지 확인하고 결제를 진행해주세요.',
      details: [
        { subtitle: '코디 제출일', value: formattedDate },
        { subtitle: '금액', value: formattedAmount },
      ],
      actions: [{ label: '결제하기', action: 'click', url: '' }],
      target: 'USER',
      type: 'confirm',
    }

    await sendCard(cardMessage, roomId)

    const response = await addConfirm({
      userId,
      options: 0,
      totalPrice: amount,
      dueDate: formatRequestDate(date.toISOString()),
      requestId,
    })

    if (response.isSuccess) {
      setIsModalOpen(false)
    }

    // showToast({ content: '서버에 오류가 발생했습니다.', type: 'warning' })
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
