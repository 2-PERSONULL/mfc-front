import React from 'react'
import RequestDetail from '@/components/pages/partner/reqCoordi/RequestDetail'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import { getRequestDetail } from '@/actions/partner/PartnerRequest'

export default async function RequestDeatailPage({
  params,
}: {
  params: { requestId: string }
}) {
  const { requestId } = params
  const requestDetail = await getRequestDetail(requestId)

  return (
    <div>
      <GoBackHeader title="요청 상세보기" />
      <RequestDetail historyId={requestId} requestDetail={requestDetail} />
    </div>
  )
}
