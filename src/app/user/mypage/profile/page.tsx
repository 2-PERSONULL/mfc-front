import React from 'react'
import UserInfo from '@/components/pages/user/UserInfo'
import ProfileAdvice from '@/components/layouts/ProfileAdvice'
import {
  getBodyInfo,
  getClothesSize,
  getPreferenceStyle,
  getUserInfo,
} from '@/actions/user/UserProfile'
import UserSingleDetailInfo from '@/components/pages/user/profileManagement/UserSingleDetailInfo'
import UserPreferenceStyleInfo from '@/components/pages/user/profileManagement/UserPreferenceStyleInfo'
import UserBodyInfo from '@/components/pages/user/profileManagement/UserBodyInfo'
import UserClothesSizeInfo from '@/components/pages/user/profileManagement/UserClothesSizeInfo'
import {
  UserBodyInfoType,
  UserClothesSizeInfoType,
  UserStyleType,
} from '@/types/userInfoType'
import { getBirthGender } from '@/actions/member/Auth'
import { UserBirthGenderType } from '@/types/userBirthGenderType'

export default async function UserProfileManagement() {
  const userInfo = await getUserInfo()
  const userBirthGenderData: UserBirthGenderType =
    (await getBirthGender()) as UserBirthGenderType
  const preferenceStyleData: UserStyleType =
    (await getPreferenceStyle()) as UserStyleType
  const bodyTypeInfoData: UserBodyInfoType =
    (await getBodyInfo()) as UserBodyInfoType
  const clothesSizeInfoData: UserClothesSizeInfoType =
    (await getClothesSize()) as UserClothesSizeInfoType
  return (
    <main>
      <section>
        <UserInfo info={userInfo} editImg />
      </section>
      <ProfileAdvice describe />
      <section className="w-full min-h-full bg-white gridpy-3 px-6">
        <UserSingleDetailInfo
          title="성별"
          value={userBirthGenderData.userGender}
        />
        <UserPreferenceStyleInfo
          title="선호 스타일"
          href="/user/mypage/profile/editstyle"
          info={preferenceStyleData}
        />
        <UserBodyInfo
          title="신체 정보"
          href="/user/mypage/profile/editbodyinfo"
          info={bodyTypeInfoData}
        />
        <UserClothesSizeInfo
          title="옷 사이즈"
          href="/user/mypage/profile/editsize"
          info={clothesSizeInfoData}
        />
      </section>
    </main>
  )
}
