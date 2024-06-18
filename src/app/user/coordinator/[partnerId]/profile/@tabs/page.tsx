import React from 'react'
import { getPartnerPost } from '@/actions/partner/PartnerPost'
import PartnerLookbookList from '@/components/pages/partner/profile/PartnerLookbookList'

const NUMBER_OF_FETCH = 10

export default async function LookBookTab({
  params,
}: {
  params: { partnerId: string }
}) {
  const { partnerId } = params
  const { posts, last } = await getPartnerPost(partnerId, 0, NUMBER_OF_FETCH)

  return (
    <PartnerLookbookList
      initialData={posts}
      isLast={last}
      fetchNum={NUMBER_OF_FETCH}
    />
  )
}
