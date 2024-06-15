import React from 'react'
import getStyleCategory from '@/actions/partner/Common'
import PreferrenceStyleList from '@/components/pages/user/profileManagement/PreferrenceStyleList'

export default async function EditPreferrenceStyle() {
  const styleList = await getStyleCategory()
  return (
    <main>
      <h1 className="font-semibold">
        선호하는 스타일을 선택해주세요. (최대 3개)
      </h1>
      <PreferrenceStyleList styleList={styleList} />
    </main>
  )
}
