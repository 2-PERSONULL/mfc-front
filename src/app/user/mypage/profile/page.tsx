import React from 'react'
import UserInfo from '@/components/pages/user/UserInfo'
import UserSingleDetailInfo from '@/components/pages/user/profileManagement/UserSingleDetailInfo'
import UserPreferrenceStyleInfo from '@/components/pages/user/profileManagement/UserPreferrenceStyleInfo'
import UserClothesSizeInfo from '@/components/pages/user/profileManagement/UserClothesSizeInfo'
// import SectionTitle from '@/components/layouts/SectionTitle'

export default function UserProfileManagement() {
  return (
    <main>
      {/* props로 이미지 정보 받아올 수 있게 수정할 것 */}
      <UserInfo />
      {/* <SectionTitle title="유저 정보" /> */}
      <section className="w-full bg-white grid gap-3 py-3 px-6">
        <UserSingleDetailInfo title="성별" value="남" />
        {/* props로 선호스타일 정보 전달 */}
        <UserPreferrenceStyleInfo href="/user/mypage/profile/editstyle" />
        <UserSingleDetailInfo
          title="체형"
          value="마른 체형"
          href="/user/mypage/profile/editbodytype"
          edit
        />
        {/* props로 선호스타일 정보 전달 */}
        <UserClothesSizeInfo href="/user/mypage/profile/editsize" />
      </section>
    </main>
  )
}
