'use client'

import React from 'react'
import Image from 'next/image'
import { PartnerCareerFetchType } from '@/types/partnerProfileTypes'
import { formatCareerPeriod } from '@/utils/formatTime'
import { deletePartnerCareer } from '@/actions/partner/PartnerProfileUpdate'
import PartnerCareerEditor from '@/components/pages/partner/mypage/profile/career/PartnerCareerEditor'
import useConfirmStore from '@/stores/confirm'
import useModal from '@/stores/modal'

export default function PartnerCareerDashboard({
  careers,
}: {
  careers: PartnerCareerFetchType[]
}) {
  const { openConfirmModal } = useConfirmStore()
  const { showModal } = useModal()

  const deleteHandler = async (careerId: number) => {
    const confirm = await openConfirmModal({
      content: `해당 경력을 삭제하시겠습니까?`,
    })

    if (confirm) deletePartnerCareer(careerId)
  }

  const editHandler = (career: PartnerCareerFetchType) => {
    showModal({
      title: '경력 수정',
      content: <PartnerCareerEditor type="edit" career={career} />,
    })
  }

  return (
    <div>
      <ul className="mt-5">
        {careers.map((career, idx) => (
          <li
            key={career.careerId}
            className={`${idx === careers.length - 1 ? '' : 'border-b border-b-gray-300 mb-4'} relative`}
          >
            <div role="presentation" onClick={() => editHandler(career)}>
              <h1 className="text-[15px] font-semibold">{career.title}</h1>
              <p className="text-[12px] text-gray-600 mt-1">
                {formatCareerPeriod(career.startDate, career.finishDate)}
              </p>
              <p className="text-[13px] text-gray-400 mt-1">
                {career.description}
              </p>
            </div>
            <button
              type="button"
              onClick={() => deleteHandler(career.careerId)}
            >
              <Image
                src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/delete-icon.svg"
                alt="delete-icon"
                width={21}
                height={21}
                className="absolute right-0 top-[25%] cursor-pointer"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
