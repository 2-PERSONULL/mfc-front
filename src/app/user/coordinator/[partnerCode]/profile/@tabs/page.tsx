import React from 'react'
// import { getPartnerPost } from '@/app/api/partner/PartnerPost'
import PartnerLookbookList from '@/components/pages/partner/profile/PartnerLookbookList'

export default async function LookBookTab({
  params,
}: {
  params: { partnerCode: string }
}) {
  console.log(params.partnerCode)
  // const { partnerCode } = params
  // const data = await getPartnerPost(partnerCode)
  const sampleData = [
    {
      postId: 1,
      imageUrl:
        'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/style/1717317227652',
      alt: 'sample1',
    },
    {
      postId: 2,
      imageUrl:
        'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/style/1717401498053',
      alt: 'sample1',
    },
    {
      postId: 3,
      imageUrl:
        'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/style/1717317227652',
      alt: 'sample1',
    },
    {
      postId: 4,
      imageUrl:
        'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/style/1717401498053',
      alt: 'sample1',
    },
    {
      postId: 5,
      imageUrl:
        'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/style/1717401498053',
      alt: 'sample1',
    },
    {
      postId: 6,
      imageUrl:
        'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/style/1717401498053',
      alt: 'sample1',
    },
  ]
  return <PartnerLookbookList postList={sampleData} />
}
