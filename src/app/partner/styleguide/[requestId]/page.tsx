import React from 'react'
import { getStyleGuide } from '@/actions/partner/Coordinates'
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

  const data = await getStyleGuide(requestId)

  return (
    <main>
      {type === 'view' ? (
        <StyleGuideViewer data={data} requestId={requestId} />
      ) : (
        <StyleGuideEditor requestId={requestId} editData={data} />
      )}
    </main>
  )
}
