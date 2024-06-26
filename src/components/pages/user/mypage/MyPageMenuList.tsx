import React from 'react'
import UserMyPageMenuData from '@/libs/userMyPageMenuData'
import ChangeRole from '../../partner/mypage/menu/ChangeRole'
import SettingAlert from '../../partner/mypage/menu/SettingAlert'
import Logout from '../../partner/mypage/menu/Logout'
import MenuElement from './MenuElement'

export default function MyPageMenuList() {
  const menuData = UserMyPageMenuData
  return (
    <section className="w-full min-h-full pb-36">
      {menuData.map((menu) => (
        <MenuElement key={menu.id} data={menu} />
      ))}
      <ChangeRole />
      <SettingAlert />
      <Logout />
    </section>
  )
}
