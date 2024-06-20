import React from 'react'
import { getPartnerPost } from '@/actions/partner/PartnerPost'
import PartnerLookbookListByUser from '@/components/pages/partner/profile/PartnerLookbookListByUser'

const NUMBER_OF_FETCH = 10

export default async function LookBookTab({
  params,
}: {
  params: { partnerId: string }
}) {
  const { partnerId } = params
  const { posts, last } = await getPartnerPost(partnerId, 0, NUMBER_OF_FETCH)

  return (
    <PartnerLookbookListByUser
      initialData={posts}
      isLast={last}
      fetchNum={NUMBER_OF_FETCH}
      partnerId={partnerId}
    />
  )
}
