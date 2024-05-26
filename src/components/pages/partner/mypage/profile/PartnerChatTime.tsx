'use client'

import React, { useState } from 'react'
import PartnerProfileTitleAndEdit from '@/components/pages/partner/mypage/profile/PartnerProfileTitleAndEdit'
import Modal from '@/components/common/Modal'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'

export default function PartnerChatTime({ chatTime }: { chatTime: string }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const saveHandler = () => {
    // fetch로 데이터 저장
    setIsModalOpen(false)
  }

  const editHandler = () => {
    setIsModalOpen(true)
  }

  return (
    <div>
      {isModalOpen && (
        <Modal title="한줄소개" closeModal={() => setIsModalOpen(false)}>
          <div>
            <h1 className="font-semibold">
              파트너님의 연락 가능한 시간을 알려주세요.
            </h1>
            <div className="relative border border-[#b6b6b6] bg-[#fff] rounded-[4px] mb-[28px] overflow-visible mt-3" />
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
          <p className="text-[14px]">
            {chatTime || ' 파트너님의 연락 가능한 시간을 알려주세요.'}
          </p>
        }
      />
    </div>
  )
}
