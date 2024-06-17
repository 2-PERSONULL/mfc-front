import React from 'react'
import ClothesSizeInfo from '@/components/pages/user/profileManagement/ClothesSizeInfo'
import SectionTitle from '@/components/layouts/SectionTitle'

export default function EditClothesSize() {
  return (
    <main className="min-h-full">
      <SectionTitle title="나의 옷 사이즈를 입력해주세요." describe />
      <ClothesSizeInfo />
    </main>
  )
}
