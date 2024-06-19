import React from 'react'
import getStyleCategory from '@/actions/partner/Common'
import PreferrenceStyleList from '@/components/pages/user/profileManagement/PreferrenceStyleList'
import { getFavoriteStyle } from '@/actions/partner/PartnerProfile'
import SectionTitle from '@/components/layouts/ProfileAdvice'

export default async function EditPreferrenceStyle() {
  const styleList = await getStyleCategory()
  const favoritStyle = await getFavoriteStyle()
  return (
    <main className="min-h-screen mb-10">
      <SectionTitle title="선호하는 스타일을 선택해주세요." describe />
      <PreferrenceStyleList
        styleList={styleList}
        favoriteStyle={favoritStyle}
      />
    </main>
  )
}
