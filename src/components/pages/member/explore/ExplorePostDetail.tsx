'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CircleProfile from '@/components/ui/avatar/CircleProfile'
import { UserProfile } from '@/types/userProfileType'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'
import { getPartnerPostDetail } from '@/actions/partner/PartnerPost'

export default function ExplorePostDetail({
  partnerId,
  postId,
}: {
  partnerId: string
  postId: number
}) {
  const [partnerInfo, setPartnerInfo] = useState({
    nickname: '',
    profileImage: '',
    imageAlt: '',
  })
  const [postContent, setPostContent] = useState({
    postId: '',
    imageUrl: '',
    alt: '',
    tags: [],
  })
  useEffect(() => {
    const fetchPartnerData = async () => {
      const data: UserProfile = await getPartnerProfileBasic(partnerId)
      const safeData = {
        nickname: data.nickname || '',
        profileImage: data.profileImage || '',
        imageAlt: data.imageAlt || '',
      }
      setPartnerInfo(safeData)
    }

    const fetchPostDetailData = async (value: number) => {
      const data = await getPartnerPostDetail(value)
      console.log(data)
      setPostContent({
        postId: data.postId,
        imageUrl: data.imageUrl,
        alt: data.alt,
        tags: data.tags,
      })
    }

    fetchPartnerData()
    fetchPostDetailData(postId)
  }, [postId])
  return (
    <>
      <section className="w-full h-[fit] border-t border-t-gray-200 flex items-center justify-between px-5 py-3">
        <div className="flex gap-3 h-full items-center">
          <CircleProfile imageUrl={partnerInfo.profileImage} size={40} />
          <span className="font-semibold">{partnerInfo.nickname}</span>
        </div>
      </section>
      <section className="w-full flex justify-center">
        <div className="rounded-[10px] w-full min-h-[400px] relative">
          {/* 임시로 기본 이미지 지정해둠. SSR로 수정 진행할 예정. 페이지 구성에 너무 오래걸릴 것 같아 이정도만 하고 넘어감 */}
          <Image
            src={
              postContent.imageUrl ||
              'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'
            }
            alt={postContent.alt}
            fill
            sizes="(max-width: 100px) 100vw, 100px"
          />
        </div>
      </section>
      <Link
        href={`/user/coordinator/${partnerId}/reqcoordi`}
        className="w-full bg-black px-5 text-white"
      >
        코디 요청하기
      </Link>
    </>
  )
}
