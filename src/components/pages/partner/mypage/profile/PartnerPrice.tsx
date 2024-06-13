'use client'

import React, { useState } from 'react'
import PartnerProfileTitleAndEdit from '@/components/pages/partner/mypage/profile/PartnerProfileTitleAndEdit'
import Modal from '@/components/common/Modal'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import { updatePartnerPrice } from '@/actions/partner/PartnerProfileUpdate'
import useToast from '@/stores/toast'

export default function PartnerPrice({
  averagePrice,
}: {
  averagePrice: number
}) {
  const { showToast } = useToast()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [price, setPrice] = useState<number>(averagePrice || 0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const filteredValue = value.replace(/[^0-9]/g, '')
    setPrice(Number(filteredValue))
  }

  const formatPrice = (value: number) => {
    return value.toLocaleString()
  }

  const saveHandler = () => {
    // fetch로 데이터 저장
    if (price === 0) {
      return showToast({
        content: '코디 평균가를 입력해주세요.',
        type: 'warning',
      })
    }

    updatePartnerPrice(price)
    showToast({ content: '저장되었습니다.', type: 'success' })
    return setIsModalOpen(false)
  }

  return (
    <div>
      {isModalOpen && (
        <Modal title="코디 평균가" closeModal={() => setIsModalOpen(false)}>
          <div className="m-5">
            <h1 className="font-semibold">
              파트너님의 코디 평균가를 등록해주세요.
            </h1>

            <div className="flex flex-wrap relative w-full  items-center">
              <input
                type="text"
                value={formatPrice(price)}
                onChange={handleChange}
                min={0}
                className="mt-5 border border-[#b6b6b6] rounded-[4px] py-2 pl-[12px] pr-[31px] w-full text-right"
              />
              <div className="absolute right-0 bottom-2 pr-[12px]">원</div>
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
        title="코디 평균가"
        clickHandler={() => setIsModalOpen(true)}
        content={
          <p className="text-[14px]">
            {`${averagePrice.toLocaleString()} 원` ||
              '코디 평균가를 등록해주세요'}
          </p>
        }
      />
    </div>
  )
}
