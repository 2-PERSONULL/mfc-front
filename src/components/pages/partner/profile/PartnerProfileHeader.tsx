import React from 'react'
import Image from 'next/image'
import BackArrowButton from '@/components/ui/button/BackArrowButton'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'

export default async function PartnerProfileHeader() {
  const basicImage =
    'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'
  const { nickname, profileImage } = await getPartnerProfileBasic()
  const imageUrl = profileImage || basicImage

  return (
    <div>
      <div className="relative w-full">
        <div className="h-[150px] w-full relative">
          <div className="w-[50px] h-[50px] z-50 flex absolute left-0 top-0 bottom-0 items-center justify-center">
            <BackArrowButton />
          </div>
          <Image
            src={imageUrl}
            alt="profile image"
            fill
            priority
            sizes="(max-width: 100px) 100vw, 100px"
            className="object-cover blur-[2px] opacity-50 rounded-b-[15px]"
          />
        </div>
        <div className="absolute bottom-[-30px] left-1/2 translate-x-[-50%] bg-white w-full h-[70px] rounded-t-[20px]" />
        <div className="absolute bottom-[-15px] left-1/2 translate-x-[-50%] w-[110px] h-[110px]">
          <Image
            src={imageUrl}
            alt="profile image"
            fill
            priority
            sizes="(max-width: 100px) 100vw, 100px"
            className="object-cover rounded-full mr-1 ring-1 ring-white ring-offset-2"
          />
        </div>
      </div>

      <section className="mt-7 flex flex-col items-center">
        <h1 className="text-center font-bold text-xl mb-3">{nickname}</h1>
        <button
          type="button"
          className="rounded-full bg-black w-[120px] h-[42px] text-white"
        >
          Follow
        </button>
      </section>

      <section className="mt-7 flex justify-around">
        <div className="flex flex-col items-center">
          <h1 className="text-[16px] font-bold">24</h1>
          <span className="text-[12px] text-gray-500">코디매칭</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[16px] font-bold">2,234</h1>
          <span className="text-[12px] text-gray-500">팔로워</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[16px] font-bold">4.5</h1>
          <span className="text-[12px] text-gray-500">리뷰평점</span>
        </div>
      </section>
      <hr className="mx-6 mt-5" />
    </div>
  )
}
