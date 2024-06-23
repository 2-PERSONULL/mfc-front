import React from 'react'
import { getStyleGuide } from '@/actions/partner/Coordinates'
import StyleGuideNew from '@/components/pages/user/styleGuide/StyleGuideNew'

export default async function StyleGuidePage({
  params,
}: {
  params: { requestId: string }
}) {
  const { requestId } = params
  const data = await getStyleGuide(requestId)

  return <StyleGuideNew data={data} />
}
