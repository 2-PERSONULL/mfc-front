import React from 'react'
import Image from 'next/image'
import { getFollowStatus } from '@/actions/user/Follow'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'
import PartnerFollowButton from '@/components/ui/button/PartnerFollowButton'
import PartnerProfileIntroduction from '@/components/pages/partner/profile/PartnerProfileIntroduction'

export default async function PartnerProfileTopInfo({
  partnerId,
}: {
  partnerId?: string
}) {
  const basicImage =
    'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'
  const { nickname, profileImage } = await getPartnerProfileBasic(partnerId)

  const isFollow = await getFollowStatus(partnerId)
  const imageUrl = profileImage || basicImage

  return (
    <section className="mt-[-200px] rounded-t-[1rem] bg-white relative z-1 pt-[5rem]">
      {/* 프로필이미지 */}
      <div className=" absolute top-[-50px] w-[110px] h-[110px] left-[50%] translate-x-[-50%] rounded-full border-[5px] border-white bg-slate-400 overflow-hidden">
        <Image
          src={imageUrl}
          alt="profile image"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-center font-bold text-xl mb-3">{nickname}</h1>
        {partnerId && (
          <PartnerFollowButton partnerId={partnerId} isFollow={isFollow} />
        )}
      </div>

      {/* 파트너 요약 */}
      <div className="mt-7 flex justify-around w-full h-full tracking-tight">
        <div className="flex flex-col items-center">
          <p className="text-[1.6rem] font-bold">24</p>
          <span className="text-[12px] text-gray-500">코디매칭</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[1.6rem] font-bold">2,234</h1>
          <span className="text-[12px] text-gray-500">팔로워</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[1.6rem] font-bold">4.5</h1>
          <span className="text-[12px] text-gray-500">리뷰평점</span>
        </div>
      </div>

      <hr className="mx-6 mt-6" />

      <PartnerProfileIntroduction partnerId={partnerId} />
    </section>
  )
}
