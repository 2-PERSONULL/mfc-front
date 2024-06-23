import React from 'react'
// import { getStyleGuide } from '@/actions/partner/Coordinates'
import StyleGuideEditor from '@/components/pages/partner/styleGuide/StyleGuideEditor'

export default async function PartnerStyleGuidePage({
  params,
  searchParams,
}: {
  params: { requestId: string }
  searchParams?: { [key: string]: string }
}) {
  const { requestId } = params
  const type = searchParams?.type

  // const data = await getStyleGuide(requestId)

  // const isSubmit = data ? true : false
  // console.log(isSubmit)

  return (
    <div>{type === 'new' && <StyleGuideEditor requestId={requestId} />}</div>
  )
}
