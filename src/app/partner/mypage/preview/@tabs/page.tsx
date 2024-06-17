import React from 'react'
import { getPartnerPost } from '@/actions/partner/PartnerPost'
import PartnerLookbookList from '@/components/pages/partner/profile/PartnerLookbookList'

export default async function LookBookTab() {
  const postList = await getPartnerPost()

  return <PartnerLookbookList postList={postList} />
}
