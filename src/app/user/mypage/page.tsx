import React from 'react'
import UserInfo from '@/components/pages/user/UserInfo'
import MyPageMenuList from '@/components/pages/user/mypage/MyPageMenuList'
import { getUserInfo } from '@/actions/user/UserProfile'
import { UserProfile } from '@/types/userProfileType'

export default async function UserMyPage() {
  const userInfo: UserProfile | undefined = await getUserInfo()
  return (
    <main>
      <UserInfo info={userInfo} editImg={false} />
      <MyPageMenuList />
    </main>
  )
}
