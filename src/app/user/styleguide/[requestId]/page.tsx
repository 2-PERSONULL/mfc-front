import React from 'react'
import { getStyleGuide } from '@/actions/partner/Coordinates'
import StyleGuideList from '@/components/pages/user/styleGuide/StyleGuideList'

export default async function StyleGuidePage({
  params,
}: {
  params: { requestId: string }
}) {
  const { requestId } = params
  const data = await getStyleGuide(requestId)

  return <StyleGuideList data={data} requestId={requestId} />
}
