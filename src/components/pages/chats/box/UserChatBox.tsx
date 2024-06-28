'use client'

import React, { useEffect, useState } from 'react'
import CircleProfile from '@/components/ui/avatar/CircleProfile'
import Steps from '@/components/ui/step/Step'
import { formatRequestDate } from '@/utils/formatTime'
import getCurrentStep from '@/utils/getCurrentStep'
import UserChatBoxButton from '@/components/pages/chats/box/UserChatBoxButton'
import { PartnerChatListType } from '@/types/requestType'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'
import UserChatBoxStatus from '@/components/pages/chats/box/UserChatBoxStatus'
// import { refundCash } from '@/actions/user/Payments'

export default function UserChatBox({
  requestData,
}: {
  requestData: PartnerChatListType
}) {
  const isSubmit =
    requestData.status === 'COORDINATE_RECEIVED' ||
    requestData.status === 'CLOSED'

  const [partnerNickname, setPartnerNickname] = useState<string>('')
  const [partnerImageUrl, setPartnerImageUrl] = useState<string>('')
  const steps = ['요청', '거래대기', '거래확정', '코디완료']

  const isDeadlinePast = () => {
    const deadlineDate = new Date(requestData.deadline)
    const today = new Date()

    deadlineDate.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)

    return deadlineDate < today
  }

  const isExpired = () => {
    // status CONFIRMED 인데 deadline 이 지났을 때
    if (requestData.status === 'CONFIRMED' && isDeadlinePast()) return true
    return false
  }

  // 파트너 아이디로 파트너 정보를 조회한다. (닉네임, 프로필 이미지)
  useEffect(() => {
    async function getPartnerInfo() {
      const partnerInfo = await getPartnerProfileBasic(requestData.partnerId)
      setPartnerNickname(partnerInfo.nickname)
      setPartnerImageUrl(partnerInfo.profileImage)
    }

    getPartnerInfo()
  }, [requestData])

  return (
    <div className="border-y-2 border-y-gray-100 bg-white relative">
      <div className="p-5">
        {/* 파트너정보 */}
        <section className="flex items-center mb-8">
          <CircleProfile size={50} imageUrl={partnerImageUrl} />
          <h1 className="ml-2 font-semibold">{partnerNickname}</h1>

          {/* 요청상태 */}
          <UserChatBoxStatus
            status={requestData.status}
            deadline={requestData.deadline}
            isExpired={isExpired()}
          />
        </section>

        {/* 진행률 */}
        <section className="mb-6">
          <Steps
            steps={steps}
            currentStep={isSubmit ? 4 : getCurrentStep(requestData.status)}
          />
        </section>

        {/* 요청서명&일시 */}
        <div className="relative h-[50px]">
          <p className="mb-3 break-words">{requestData.title}</p>
          <span className="text-gray-400 flex text-[14px] absolute right-0 bottom-0">
            요청일시: {formatRequestDate(requestData.createdDate)}
          </span>
        </div>
      </div>

      {/* 액션 */}
      <UserChatBoxButton
        isSubmit={isSubmit}
        status={requestData.status}
        requestId={requestData.requestId}
        partnerId={requestData.partnerId}
        isExpired={isExpired()}
      />
    </div>
  )
}
