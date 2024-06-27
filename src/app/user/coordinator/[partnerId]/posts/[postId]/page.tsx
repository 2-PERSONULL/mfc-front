import React from 'react'
import PartnerPostImage from '@/components/pages/partner/mypage/style/PartnerPostImage'
import { getPartnerPostDetail } from '@/actions/partner/PartnerPost'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'
import PartnerPostLikeCount from '@/components/pages/partner/mypage/style/PartnerPostLikeCount'
import PartnerPostTagList from '@/components/pages/partner/mypage/style/PartnerPostTagList'
import ExplorePostTop from '@/components/pages/member/explore/ExplorePostTop'
import PartnerPostCreatedDate from '@/components/pages/partner/mypage/style/PartnerPostCreatedDate'

export default async function PartnerPostDetailPage({
  params,
}: {
  params: { postId: number; partnerId: string }
}) {
  const { partnerId, postId } = params
  const { imageUrl, tags, bookmarkCnt, createdAt } =
    await getPartnerPostDetail(postId)
  const { nickname, profileImage } = await getPartnerProfileBasic(partnerId)

  return (
    <>
      <ExplorePostTop
        nickname={nickname}
        profileImage={profileImage}
        partnerId={partnerId}
      />
      <PartnerPostImage imageUrl={imageUrl} />
      <PartnerPostLikeCount likeCount={bookmarkCnt} postId={postId} />
      <PartnerPostCreatedDate createdAt={createdAt} />
      <PartnerPostTagList tags={tags} />
    </>
  )
}
