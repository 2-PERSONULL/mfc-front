import React from 'react'
import { getPartnerPost } from '@/actions/partner/PartnerPost'
import PartnerLookbookList from '@/components/pages/partner/profile/PartnerLookbookList'

export default async function LookBookTab({
  params,
}: {
  params: { partnerId: string }
}) {
  const { partnerId } = params
  const { posts, last } = await getPartnerPost(partnerId, 0, 10)

  return <PartnerLookbookList initialData={posts} isLast={last} />
}
