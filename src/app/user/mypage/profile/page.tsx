import React from 'react'
import UserInfo from '@/components/pages/user/UserInfo'
import UserSingleDetailInfo from '@/components/pages/user/profileManagement/UserSingleDetailInfo'
import UserMultiDetailInfo from '@/components/pages/user/profileManagement/UserMultiDetailInfo'
import ProfileAdvice from '@/components/layouts/ProfileAdvice'

export default function UserProfileManagement() {
  const dummyStyleInfo = [
    {
      id: 1,
      name: '스타일 1',
    },
    {
      id: 2,
      name: '스타일 2',
    },
    {
      id: 3,
      name: '스타일 3',
    },
  ]
  const dummyBodyInfo = {
    height: 170,
    weight: 70,
    bodyType: '직사각형',
  }
  const dummySizeInfo = {
    top: 'XL',
    bottom: 'L',
    shoes: 270,
  }
  return (
    <main>
      {/* props로 이미지 정보 받아올 수 있게 수정할 것 */}
      <section>
        <UserInfo />
      </section>
      <ProfileAdvice describe />
      <section className="w-full bg-white gridpy-3 px-6">
        <UserSingleDetailInfo title="성별" value="남" />
        {/* props로 정보 전달 */}
        <UserMultiDetailInfo
          title="선호 스타일"
          href="/user/mypage/profile/editstyle"
          info={dummyStyleInfo}
        />
        <UserMultiDetailInfo
          title="신체 정보"
          href="/user/mypage/profile/editbodyinfo"
          info={dummyBodyInfo}
        />
        <UserMultiDetailInfo
          title="옷 사이즈"
          href="/user/mypage/profile/editsize"
          info={dummySizeInfo}
        />
      </section>
    </main>
  )
}
