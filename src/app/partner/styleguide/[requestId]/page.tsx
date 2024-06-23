import React from 'react'
// import { getStyleGuide } from '@/actions/partner/Coordinates'

export default async function PartnerStyleGuidePage({
  params,
}: {
  params: { requestId: string }
}) {
  const { requestId } = params
  console.log(requestId)
  // const data = await getStyleGuide(requestId)

  return <div>page</div>
}
