import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PartnerMyPageMenuData from '@/libs/partnerMyPageData'
import Logout from '@/components/pages/partner/mypage/menu/Logout'
import SettingAlert from './SettingAlert'
import ChangeRole from './ChangeRole'

export default function MyPageMenu() {
  const menuData = PartnerMyPageMenuData

  return (
    <div>
      <ul>
        {menuData.map((menu) => (
          <li key={menu.id}>
            <Link
              className="flex items-center justify-between px-5 py-7"
              href={menu.url}
            >
              <span>{menu.title}</span>
              <Image
                src="https://assets.cdn.soomgo.com/icons/icon-mypage-list-arrow.svg"
                alt="arrow-icon"
                width={24}
                height={24}
              />
            </Link>
          </li>
        ))}
      </ul>
      <ChangeRole />
      <SettingAlert />
      <Logout />
    </div>
  )
}
