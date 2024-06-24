import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import PartnerPostImage from '@/components/pages/partner/mypage/style/PartnerPostImage'
import { getPartnerPostDetail } from '@/actions/partner/PartnerPost'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'
import PartnerPostLikeCount from '@/components/pages/partner/mypage/style/PartnerPostLikeCount'
import PartnerPostTagList from '@/components/pages/partner/mypage/style/PartnerPostTagList'
import PartnerPostTop from '@/components/pages/partner/mypage/style/PartnerPostTop'
import StyleEditor from '@/components/pages/partner/mypage/style/StyleEditor'

interface TagType {
  tagId: number
  value: string
}

export default async function PartnerPostDetailPage({
  params,
  searchParams,
}: {
  params: { postId: number }
  searchParams?: { [key: string]: string | undefined }
}) {
  const type = searchParams?.type
  const { postId } = params
  const { imageUrl, tags, bookmarkCnt } = await getPartnerPostDetail(postId)
  const { nickname, profileImage } = await getPartnerProfileBasic()

  return (
    <div>
      <GoBackHeader title={`스타일 ${type === 'edit' ? '수정' : '상세보기'}`} />
      {type === 'edit' ? (
        <StyleEditor
          postId={postId}
          imageUrl={imageUrl}
          tagList={tags.map((tag: TagType) => tag.value)}
        />
      ) : (
        <>
          <PartnerPostTop
            nickname={nickname}
            profileImage={profileImage}
            postId={postId}
          />
          <PartnerPostImage imageUrl={imageUrl} />
          <PartnerPostLikeCount likeCount={bookmarkCnt} postId={postId} />
          <PartnerPostTagList tags={tags} />
        </>
      )}
    </div>
  )
}
