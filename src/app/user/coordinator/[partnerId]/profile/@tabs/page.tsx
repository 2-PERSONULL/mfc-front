import React from 'react'
import { getPartnerPost } from '@/actions/partner/PartnerPost'
import PartnerLookbookList from '@/components/pages/partner/profile/PartnerLookbookList'

export default async function LookBookTab({
  params,
}: {
  params: { partnerId: string }
}) {
  const { partnerId } = params
  const postList = await getPartnerPost(partnerId)

  return <PartnerLookbookList postList={postList} />
}
