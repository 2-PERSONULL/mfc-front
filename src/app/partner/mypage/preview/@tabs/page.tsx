import React from 'react'
import { getPartnerPost } from '@/actions/partner/PartnerPost'
import PartnerLookbookList from '@/components/pages/partner/profile/PartnerLookbookList'

const NUMBER_OF_FETCH = 10

export default async function LookBookTab() {
  const { posts, last } = await getPartnerPost('', 0, NUMBER_OF_FETCH)

  return (
    <div className="w-full bg-white">
      <PartnerLookbookList
        initialData={posts}
        isLast={last}
        fetchNum={NUMBER_OF_FETCH}
      />
    </div>
  )
}
