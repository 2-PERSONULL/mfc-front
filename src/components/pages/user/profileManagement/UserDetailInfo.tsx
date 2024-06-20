import React from 'react'
import UserSingleDetailInfo from '@/components/pages/user/profileManagement/UserSingleDetailInfo'
import UserPreferenceStyleInfo from '@/components/pages/user/profileManagement/UserPreferenceStyleInfo'
import UserBodyInfo from '@/components/pages/user/profileManagement/UserBodyInfo'
import UserClothesSizeInfo from '@/components/pages/user/profileManagement/UserClothesSizeInfo'
import {
  UserBodyInfoType,
  UserClothesSizeInfoType,
  UserStyleType,
} from '@/types/userInfoType'

export default function UserDetailInfo({
  style,
  bodyType,
  clothes,
}: {
  style: UserStyleType
  bodyType: UserBodyInfoType
  clothes: UserClothesSizeInfoType
}) {
  return (
    <section className="w-full min-h-full bg-white gridpy-3 px-6">
      <UserSingleDetailInfo title="성별" value="남" />
      <UserPreferenceStyleInfo
        title="선호 스타일"
        href="/user/mypage/profile/editstyle"
        info={style}
      />
      <UserBodyInfo
        title="신체 정보"
        href="/user/mypage/profile/editbodyinfo"
        info={bodyType}
      />
      <UserClothesSizeInfo
        title="옷 사이즈"
        href="/user/mypage/profile/editsize"
        info={clothes}
      />
    </section>
  )
}
