import React from 'react'
import UserInfo from '@/components/pages/user/UserInfo'
import ProfileAdvice from '@/components/layouts/ProfileAdvice'
import {
  getBodyInfo,
  getClothesSize,
  getPreferenceStyle,
  getUserInfo,
} from '@/actions/user/UserProfile'
import {
  UserBodyInfoType,
  UserClothesSizeInfoType,
  UserStyleType,
} from '@/types/userInfoType'
import UserDetailInfo from '@/components/pages/user/profileManagement/UserDetailInfo'

export default async function UserProfileManagement() {
  const userInfo = await getUserInfo()
  const preferenceStyleInfo: UserStyleType =
    (await getPreferenceStyle()) as UserStyleType
  const bodyTypeInfo: UserBodyInfoType =
    (await getBodyInfo()) as UserBodyInfoType
  const clothesSizeInfo: UserClothesSizeInfoType =
    (await getClothesSize()) as UserClothesSizeInfoType
  return (
    <main>
      <section>
        <UserInfo info={userInfo} editImg />
      </section>
      <ProfileAdvice describe />
      <UserDetailInfo
        style={preferenceStyleInfo}
        bodyType={bodyTypeInfo}
        clothes={clothesSizeInfo}
      />
    </main>
  )
}
