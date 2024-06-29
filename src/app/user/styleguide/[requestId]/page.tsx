import React from 'react'
import { getStyleGuide } from '@/actions/partner/Coordinates'
import { getRequestStatus } from '@/actions/chat/Confirm'
import StyleGuideList from '@/components/pages/user/styleGuide/StyleGuideList'

export default async function StyleGuidePage({
  params,
  searchParams,
}: {
  params: { requestId: string }
  searchParams?: { [key: string]: string | undefined }
}) {
  const { requestId } = params
  const data = await getStyleGuide(requestId)
  const partnerId = searchParams?.partnerId
  const status = await getRequestStatus(requestId, partnerId)

  return <StyleGuideList data={data} requestId={requestId} status={status} />
}
