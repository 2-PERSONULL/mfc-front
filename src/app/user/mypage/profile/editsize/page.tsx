import React from 'react'
import { redirect } from 'next/navigation'
import ClothesSizeInfo from '@/components/pages/user/profileManagement/ClothesSizeInfo'
import SectionTitle from '@/components/layouts/ProfileAdvice'

export default function EditClothesSize() {
  const handleSave = async (formData: FormData) => {
    'use server'

    console.log('Save body info', formData)
    redirect('/user/mypage/profile')
  }
  return (
    <main className="min-h-full">
      <SectionTitle title="옷 사이즈를 알려주세요." describe />
      <ClothesSizeInfo handleSave={handleSave} />
    </main>
  )
}
