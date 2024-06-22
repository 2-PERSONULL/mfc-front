import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import UserMyPageMenuData from '@/libs/userMyPageMenuData'
import ChangeRole from '../../partner/mypage/menu/ChangeRole'
import SettingAlert from '../../partner/mypage/menu/SettingAlert'
import Logout from '../../partner/mypage/menu/Logout'

export default function MyPageMenuList() {
  const menuData = UserMyPageMenuData
  return (
    <section className="w-full min-h-screen">
      {menuData.map((menu) => (
        <Link
          key={menu.id}
          href={menu.url}
          className="flex items-center justify-between px-5 py-7"
        >
          <span>{menu.title}</span>
          <Image
            src="/icons/list-arrow.svg"
            alt="arrow-icon"
            width={24}
            height={24}
          />
        </Link>
      ))}
      <ChangeRole />
      <SettingAlert />
      <Logout />
    </section>
  )
}
