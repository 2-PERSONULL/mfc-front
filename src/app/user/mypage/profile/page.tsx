import React from 'react'
import UserInfo from '@/components/pages/user/UserInfo'
import ProfileAdvice from '@/components/layouts/ProfileAdvice'
import { getUserInfo } from '@/actions/user/UserProfile'
import UserDetailInfo from '@/components/pages/user/profileManagement/UserDetailInfo'

export default async function UserProfileManagement() {
  const userInfo = await getUserInfo()
  return (
    <main>
      <section>
        <UserInfo info={userInfo} editImg />
      </section>
      <ProfileAdvice describe />
      <UserDetailInfo />
    </main>
  )
}
