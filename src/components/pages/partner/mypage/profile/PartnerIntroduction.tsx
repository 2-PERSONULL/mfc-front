'use client'

import React, { useEffect, useState } from 'react'
import PartnerProfileTitleAndEdit from '@/components/pages/partner/mypage/profile/PartnerProfileTitleAndEdit'
import Modal from '@/components/common/Modal'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'

export default function PartnerIntroduction({ data }: { data: string }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [content, setContent] = useState<string>('')
  const [contentCount, setContentCount] = useState<number>(0)

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    setContentCount(e.target.value.length)
  }

  const saveHandler = () => {
    // fetch로 데이터 저장
    setIsModalOpen(false)
  }

  useEffect(() => {
    // 데이터 있는지 여부
    if (data) {
      setContent(data)
      setContentCount(data.length)
    }
  }, [data])

  const editHandler = () => {
    setIsModalOpen(true)
  }

  return (
    <div>
      {isModalOpen && (
        <Modal title="한줄소개" closeModal={() => setIsModalOpen(false)}>
          <div>
            <h1 className="font-semibold">한줄소개를 간단히 작성해주세요.</h1>
            <div className="relative border border-[#b6b6b6] bg-[#fff] rounded-[4px] mb-[28px] overflow-visible mt-3">
              <textarea
                className="outline-none min-h-[190px] overflow-y-auto py-[15px] pl-[11px] pr-[23px] bg-transparent w-full h-full text-[13px]"
                maxLength={40}
                onChange={onChangeContent}
                defaultValue={content || '간단한 한줄소개를 남겨주세요.'}
              />

              <span className="absolute bottom-[-28px] right-[7px] text-[12px] text-[#969696]">
                <em className="text-[#777] not-italic">{contentCount}</em> / 40
              </span>
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
        title="소개"
        clickHandler={editHandler}
        // 데이터 있는지 여부
        isEmpty={!data}
        content={
          <p className="text-[14px]">
            {data || '한 줄 소개로 간단하게 파트너님의 개성을 드러내보세요.'}
          </p>
        }
      />
    </div>
  )
}
