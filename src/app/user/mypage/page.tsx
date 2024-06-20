import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import UserMyPageMenuData from '@/libs/userMyPageMenuData'
import ChangeRole from '@/components/pages/partner/mypage/menu/ChangeRole'
import SettingAlert from '@/components/pages/partner/mypage/menu/SettingAlert'
import Logout from '@/components/pages/partner/mypage/menu/Logout'
import UserInfo from '@/components/pages/user/UserInfo'

export default function UserMyPage() {
  const menuData = UserMyPageMenuData

  return (
    <main>
      <UserInfo editImg={false} />
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
    </main>
  )
}
