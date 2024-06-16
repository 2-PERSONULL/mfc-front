import React from 'react'
import getStyleCategory from '@/actions/partner/Common'
import PreferrenceStyleList from '@/components/pages/user/profileManagement/PreferrenceStyleList'
import { getFavoriteStyle } from '@/actions/partner/PartnerProfile'

export default async function EditPreferrenceStyle() {
  const styleList = await getStyleCategory()
  const favoritStyle = await getFavoriteStyle()
  return (
    <main>
      <h1 className="font-semibold px-6 mt-5">
        선호하는 스타일을 선택해주세요. (최대 3개)
      </h1>
      <PreferrenceStyleList
        styleList={styleList}
        favoriteStyle={favoritStyle}
      />
    </main>
  )
}
