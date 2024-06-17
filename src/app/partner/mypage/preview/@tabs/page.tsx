import React from 'react'
import { getPartnerPost } from '@/actions/partner/PartnerPost'
import PartnerLookbookList from '@/components/pages/partner/profile/PartnerLookbookList'

export default async function LookBookTab() {
  const { posts, last } = await getPartnerPost('', 0, 10)

  return <PartnerLookbookList initialData={posts} isLast={last} />
}
