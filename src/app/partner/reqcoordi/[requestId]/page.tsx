import React from 'react'
import RequestDetail from '@/components/pages/partner/reqCoordi/RequestDetail'
import { getRequestDetail } from '@/actions/partner/PartnerRequest'

export default async function RequestDeatailPage({
  params,
}: {
  params: { requestId: string }
}) {
  const { requestId } = params
  const requestDetail = await getRequestDetail(requestId)

  return <RequestDetail historyId={requestId} requestDetail={requestDetail} />
}
