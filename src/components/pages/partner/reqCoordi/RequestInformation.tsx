import React from 'react'
import RequestDetailForm from '@/components/pages/partner/reqCoordi/RequestDetailForm'
import { formatRequestDate } from '@/utils/formatTime'
import { UserRequestDetailType } from '@/types/requestType'

export default function RequestInformation({
  requestDetail,
}: {
  requestDetail: UserRequestDetailType
}) {
  return (
    <div className="flex flex-col gap-8">
      <RequestDetailForm
        title="코디 제출 기한"
        value={formatRequestDate(requestDetail.partner.deadline)}
      />
      <RequestDetailForm title="코디 상황" value={requestDetail.situation} />
      <RequestDetailForm title="요청 내용" value={requestDetail.description} />
      <RequestDetailForm
        title="코디 옵션"
        value={requestDetail.categoryIds.join(', ')}
      />
      <RequestDetailForm
        title="선호 브랜드"
        value={
          requestDetail.brandIds.length > 0
            ? requestDetail.brandIds.join(', ')
            : '선호 브랜드가 없습니다.'
        }
      />
      <RequestDetailForm
        title="코디 예산"
        value={`${parseInt(requestDetail.budget, 10).toLocaleString()}원`}
      />
    </div>
  )
}
