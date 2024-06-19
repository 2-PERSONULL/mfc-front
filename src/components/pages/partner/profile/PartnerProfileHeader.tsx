import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NotificationIcon from '@/components/ui/icons/NotificationIcon'
import MenuLineIcon from '@/components/ui/icons/MenuLineIcon'
import BackArrowButton from '@/components/ui/button/BackArrowButton'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'

export default async function PartnerProfileHeader({
  partnerId,
}: {
  partnerId?: string
}) {
  const basicImage =
    'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'
  const { profileImage } = await getPartnerProfileBasic(partnerId)
  const imageUrl = profileImage || basicImage

  return (
    <header className="w-full h-[50px] fixed top-0 left-0 bottom-0 flex items-center">
      <div className="w-full px-3 flex items-center justify-between z-[20]">
        <BackArrowButton />

        <div className="flex gap-4">
          <Link
            href="/partner/management/alert"
            className="hover:opacity-20 cursor-pointer relative"
          >
            <NotificationIcon />
          </Link>
          <Link
            href="/partner/management/menu"
            className="hover:opacity-20 cursor-pointer relative"
          >
            <MenuLineIcon />
          </Link>
        </div>
      </div>

      {/* 배경이미지 */}
      <div className="fixed top-0 h-[300px] w-full">
        <Image
          src={imageUrl}
          alt="profile image"
          fill
          priority
          sizes="(max-width: 100px) 100vw, 100px"
          className="object-cover blur-[2px] opacity-50"
        />
      </div>
    </header>
  )
}
