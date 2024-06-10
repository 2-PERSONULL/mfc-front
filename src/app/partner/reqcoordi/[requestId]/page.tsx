import React from 'react'
import RequestDetail from '@/components/pages/partner/reqCoordi/RequestDetail'
import GoBackHeader from '@/components/layouts/GoBackHeader'

export default function RequestDeatailPage({
  params,
}: {
  params: { requestId: number }
}) {
  const { requestId } = params

  return (
    <div>
      <GoBackHeader title="요청 상세보기" />
      <RequestDetail historyId={requestId} />
    </div>
  )
}
