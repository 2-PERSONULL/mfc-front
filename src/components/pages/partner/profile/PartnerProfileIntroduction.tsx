import React from 'react'
import { getPartnerProfile } from '@/actions/partner/PartnerProfile'

export default async function PartnerProfileIntroduction({
  partnerId,
}: {
  partnerId?: string
}) {
  const { description } = await getPartnerProfile(partnerId)

  // const description = null
  return (
    <p className="p-8 text-sm w-full break-words">
      {description || <NotData />}
    </p>
  )
}

export const NotData = ({ errorText = 'no data' }: { errorText?: string }) => {
  return (
    <p className="w-full rounded-md border-red-200 border text-red-200 text-sm text-center py-1">
      {errorText}
    </p>
  )
}
