import React from 'react'
import getStyleCategory from '@/actions/partner/Common'
import PreferrenceStyleList from '@/components/pages/user/profileManagement/PreferrenceStyleList'
import SectionTitle from '@/components/layouts/ProfileAdvice'
import { getPreferenceStyle } from '@/actions/user/UserProfile'

export default async function EditPreferrenceStyle() {
  const styleListRaw = await getStyleCategory()
  const styleList = Array.isArray(styleListRaw) ? styleListRaw : []

  const favoritStyleRaw = await getPreferenceStyle()
  const favoritStyle = Array.isArray(favoritStyleRaw) ? favoritStyleRaw : []
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
