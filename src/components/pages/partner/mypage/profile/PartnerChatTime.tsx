'use client'

import React, { useState } from 'react'
import PartnerProfileTitleAndEdit from '@/components/pages/partner/mypage/profile/PartnerProfileTitleAndEdit'
import Modal from '@/components/common/Modal'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import TimepickerSwiper from '@/components/ui/picker/TimepickerSwiper'
import useToast from '@/stores/toast'

export default function PartnerChatTime({ chatTime }: { chatTime: string }) {
  const [startTime, setStartTime] = useState<number>(0)
  const [endTime, setEndTime] = useState<number>(1)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { showToast } = useToast()

  const saveHandler = () => {
    // fetch로 데이터 저장
    if (startTime === endTime) {
      showToast({
        content: '시작 시간과 종료 시간이 같습니다.',
        type: 'warning',
      })
      return
    }
    setIsModalOpen(false)
  }

  const editHandler = () => {
    setIsModalOpen(true)
  }

  return (
    <div>
      {isModalOpen && (
        <Modal title="채팅 가능 시간" closeModal={() => setIsModalOpen(false)}>
          <div>
            <h1 className="font-semibold">
              파트너님의 연락 가능한 시간을 알려주세요.
            </h1>
            <div className="flex items-center justify-center gap-2 mt-10">
              <TimepickerSwiper hour={startTime} setHour={setStartTime} />
              ~
              <TimepickerSwiper hour={endTime} setHour={setEndTime} />
            </div>
            <div className="fixed bottom-7 w-full left-0 right-0 px-6">
              <StretchedRoundedButton
                comment="저장"
                clickHandler={saveHandler}
              />
            </div>
          </div>
        </Modal>
      )}
      <PartnerProfileTitleAndEdit
        title="채팅 가능시간"
        clickHandler={editHandler}
        // 데이터 있는지 여부
        isEmpty={!chatTime}
        content={
          <div>
            <p className="text-[14px]">
              {chatTime || ' 파트너님의 연락 가능한 시간을 알려주세요.'}
            </p>
          </div>
        }
      />
    </div>
  )
}