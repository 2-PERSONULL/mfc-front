'use client'

import React, { useEffect, useState } from 'react'
import UserSingleDetailInfo from '@/components/pages/user/profileManagement/UserSingleDetailInfo'
import UserPreferenceStyleInfo from '@/components/pages/user/profileManagement/UserPreferenceStyleInfo'
import UserBodyInfo from '@/components/pages/user/profileManagement/UserBodyInfo'
import UserClothesSizeInfo from '@/components/pages/user/profileManagement/UserClothesSizeInfo'
import {
  UserBodyInfoType,
  UserClothesSizeInfoType,
  UserStyleType,
} from '@/types/userInfoType'
import {
  getBodyInfo,
  getClothesSize,
  getPreferenceStyle,
} from '@/actions/user/UserProfile'

export default function UserDetailInfo() {
  const [preferenceStyleInfo, setPreferenceStyleInfo] =
    useState<UserStyleType | null>(null)
  const [bodyTypeInfo, setBodyTypeInfo] = useState<UserBodyInfoType | null>(
    null,
  )
  const [clothesSizeInfo, setClothesSizeInfo] =
    useState<UserClothesSizeInfoType | null>(null)

  useEffect(() => {
    async function fetchData() {
      const preferenceStyleData: UserStyleType =
        (await getPreferenceStyle()) as UserStyleType
      const bodyTypeInfoData: UserBodyInfoType =
        (await getBodyInfo()) as UserBodyInfoType
      const clothesSizeInfoData: UserClothesSizeInfoType =
        (await getClothesSize()) as UserClothesSizeInfoType

      setPreferenceStyleInfo(preferenceStyleData)
      setBodyTypeInfo(bodyTypeInfoData)
      setClothesSizeInfo(clothesSizeInfoData)
    }

    fetchData()
  }, [])
  return (
    <section className="w-full min-h-full bg-white gridpy-3 px-6">
      <UserSingleDetailInfo title="성별" value="남" />
      <UserPreferenceStyleInfo
        title="선호 스타일"
        href="/user/mypage/profile/editstyle"
        info={preferenceStyleInfo}
      />
      <UserBodyInfo
        title="신체 정보"
        href="/user/mypage/profile/editbodyinfo"
        info={bodyTypeInfo}
      />
      <UserClothesSizeInfo
        title="옷 사이즈"
        href="/user/mypage/profile/editsize"
        info={clothesSizeInfo}
      />
    </section>
  )
}
