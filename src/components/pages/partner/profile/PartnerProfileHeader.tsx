import React from 'react'
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
    <header>
      <div
        className="w-full h-[400px] pt-3 blur-[2px]"
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: '420px',
          backgroundSize: 'contain',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed',
          filter: 'grayscale(80%)',
          opacity: '0.6',
        }}
      />
      <div className="w-full p-3 flex items-center justify-between fixed z-[0] top-0">
        <BackArrowButton />

        {!partnerId && (
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
        )}
      </div>
    </header>
  )
}
