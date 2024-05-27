'use client'

import React, { useEffect, useState } from 'react'
import Modal from '@/components/common/Modal'
import PartnerProfileTitleAndEdit from '@/components/pages/partner/mypage/profile/PartnerProfileTitleAndEdit'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import LeadTimePicker from '@/components/ui/picker/LeadTimePicker'

export default function PartnerLeadTime({ leadTime }: { leadTime: number }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [sameDay, setSameDay] = useState<boolean>(false)
  const [day, setDay] = useState<number>(0)

  const saveHandler = () => {
    setIsModalOpen(false)
  }

  const editHandler = () => {
    setIsModalOpen(true)
  }

  useEffect(() => {
    setDay(leadTime)
  }, [leadTime])

  return (
    <div>
      {isModalOpen && (
        <Modal title="코디 소요기간" closeModal={() => setIsModalOpen(false)}>
          <div>
            <h1 className="font-semibold">
              파트너님의 평균적인 코디 소요기간을 알려주세요.
            </h1>

            <div className="mt-10">
              <label htmlFor="checkAll">
                <input
                  type="checkbox"
                  name="checkAll"
                  id="checkAll"
                  className="checkbox mr-2 border-gray-400"
                  checked={sameDay}
                  onChange={() => setSameDay(!sameDay)}
                />
                <span className="font-semibold align-top">당일 가능</span>
              </label>
            </div>

            {!sameDay && (
              <div className="flex items-center justify-center mt-10 gap-2">
                <LeadTimePicker leadTime={day} setLeadTime={setDay} />
                <h1 className="font-bold">일</h1>
              </div>
            )}
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
        title="평균 코디 소요기간"
        clickHandler={editHandler}
        // 데이터 있는지 여부
        isEmpty={!leadTime}
        content={
          <div>
            <p className="text-[14px]">
              {`${leadTime}일` ||
                '파트너님의 평균적인 코디 소요기간을 알려주세요.'}
            </p>
          </div>
        }
      />
    </div>
  )
}
