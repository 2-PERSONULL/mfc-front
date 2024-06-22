import React from 'react'
import { redirect } from 'next/navigation'
import ClothesSizeInfo from '@/components/pages/user/profileManagement/ClothesSizeInfo'
import SectionTitle from '@/components/layouts/ProfileAdvice'
import { updateClothesSize } from '@/actions/user/UserProfile'

export default function EditClothesSize() {
  const handleSave = async (formData: FormData) => {
    'use server'

    console.log('Save body info', formData)
    await updateClothesSize({
      formData: {
        topSize: formData.get('topSize') as string,
        bottomSize: formData.get('bottomSize') as string,
        shoeSize: formData.get('shoeSize') as unknown as number,
      },
    })
    redirect('/user/mypage/profile')
  }
  return (
    <main className="min-h-full">
      <SectionTitle title="옷 사이즈를 알려주세요." describe />
      <ClothesSizeInfo handleSave={handleSave} />
    </main>
  )
}
