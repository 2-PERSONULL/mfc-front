import React from 'react'
import { getStyleGuide } from '@/actions/partner/Coordinates'
import { getRequestStatus } from '@/actions/chat/Confirm'
import StyleGuideEditor from '@/components/pages/partner/styleGuide/StyleGuideEditor'
import StyleGuideViewer from '@/components/pages/partner/styleGuide/StyleGuideViewr'

export default async function PartnerStyleGuidePage({
  params,
  searchParams,
}: {
  params: { requestId: string }
  searchParams?: { [key: string]: string }
}) {
  const { requestId } = params
  const type = searchParams?.type
  const partnerId = searchParams?.partnerId
  const roomNumber = searchParams?.roomNumber
  const data = await getStyleGuide(requestId)
  const status = await getRequestStatus(requestId, partnerId)

  return (
    <main>
      {type === 'view' ? (
        <StyleGuideViewer
          data={data}
          requestId={requestId}
          status={status || ''}
        />
      ) : (
        <StyleGuideEditor
          requestId={requestId}
          editData={data}
          roomNumber={roomNumber}
          partnerId={partnerId}
        />
      )}
    </main>
  )
}
